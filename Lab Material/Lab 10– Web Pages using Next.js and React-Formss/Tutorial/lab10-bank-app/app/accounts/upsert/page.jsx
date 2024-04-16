
'use client'
import { React, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import styles from '@/app/page.module.css'



export default function Upsert() {

    const searchParams = useSearchParams()  //all the information sent through the URL is parsed for you
    const [account, setAccount] = useState(Object.fromEntries(searchParams) || {})
    const router = useRouter()
    function handleChange(e) {
        const newAccount = { ...account };
        newAccount[e.target.name] = e.target.value;
        setAccount(newAccount);
    }

    async function handleSubmit(e) {
        e.preventDefault()

        // send the data to the server
        if (!account.accountNo) {
            //add
            const response = await fetch(`/api/accounts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            })
        } else {
            // update
            const response = await fetch(`/api/accounts/${account.accountNo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            }
            )
        }
        // is it an add [POST]

        //is it an update [PUT}]

        // navigate the page back to the home page
        router.push('/')
    }

    return (
        <>
            {/* {JSON.stringify(account)}
            {JSON.stringify(accountToEdit)} */}
            {!account.accountNo ?
                <h3 className={styles.title}>Add Account</h3> :
                <h3 className={styles.title}>Edit Account</h3>
            }

            <form id="account-form" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={account.firstname}
                    onChange={handleChange}
                />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" value={account.lastname}
                    onChange={handleChange} />

                <label htmlFor="acctType">Account Type</label>
                <select name="acctType" id="acctType" required value={account.acctType} onChange={handleChange} >
                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance">Balance</label>
                <input type="number" name="balance" id="balance" required value={account.balance} onChange={handleChange} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={account.email} onChange={handleChange} />

                <label htmlFor="dateOpened">Date Opened</label>
                <input type="date" name="dateOpened" id="dateOpened" value={account.dateOpened} onChange={handleChange} />

                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" required value={account.gender} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="profileImage">Profile Image URL</label>
                <input type="url" name="profileImage" id="profileImage" value={account.profileImage} onChange={handleChange} />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
