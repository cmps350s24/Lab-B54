'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRouter, useSearchParams } from 'next/navigation'

export default function page() {
    const router = useRouter()
    const searchParams = useSearchParams()  //map
    const account = Object.fromEntries(searchParams) //object
    console.log(account);

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newAccount = Object.fromEntries(formData)

        // send it to the server
        if (!account.accountNo) {
            const response = await fetch('/api/accounts',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newAccount)
                }
            )
        }
        else {
            newAccount.accountNo = account.accountNo
            const response = await fetch(`/api/accounts/${account.accountNo}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newAccount)
                }
            )
        }
        router.push('/')
    }
    return (
        <>
            {account.accountNo ? <h3 className={styles.title}>Edit Account</h3> : <h3 className={styles.title}>Add Account</h3>}

            <form id="account-form" className={styles.form} onSubmit={handleSubmit}>

                {!account.accountNo ?
                    <>
                        <label for="acctType">Select Owner</label>
                        <select name="ownerId" id="ownerId" required defaultValue={account.ownerId} >
                            <option value=""></option>
                            <option value="Saving">Saving</option>
                            <option value="Current">Current</option>
                        </select>
                    </> : ''
                }
                <label for="acctType">Account Type</label>
                <select name="acctType" id="acctType" required defaultValue={account.acctType} >
                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label for="balance">Balance</label>
                <input type="number" name="balance" id="balance" required defaultValue={account.balance} />

                <label for="dateOpened">Date Opened</label>
                <input type="date" name="dateOpened" id="dateOpened" defaultValue={account.dateOpened} />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
