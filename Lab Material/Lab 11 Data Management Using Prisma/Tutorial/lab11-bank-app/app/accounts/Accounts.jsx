'use client'
import { React, useState } from 'react'
import styles from '@/app/page.module.css'
import Account from './Account'


export default function Accounts({ initialAccounts }) {
    const [accounts, setAccounts] = useState(initialAccounts)

    async function handleLoadAccounts(acctType) {
        const response = await fetch(`/api/accounts?type=${acctType}`)
        setAccounts(await response.json())
    }

    async function handleDeleteAccount(accountNo) {
        const confirmation = confirm(`Are you sure you want to delete this account? ${accountNo}`)
        if (confirmation) {
            const response = await fetch(`/api/accounts/${accountNo}`, { method: 'DELETE' })
            const message = await response.json()
            alert(JSON.stringify(message))
            handleLoadAccounts('All')
        }
    }
    return (
        <div>
            <label for="acctType">
                Account Type
            </label>
            <select id="acctType" onChange={e => handleLoadAccounts(e.target.value)}
                className={styles.filterDropdown}>
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>
            <table id="accounts" className={styles.table}>
                <thead>
                    <tr>
                        <th>Profile Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Email</th>
                        <th>Date Opened</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(account => <Account
                            account={account}
                            onDelete={handleDeleteAccount}
                        >
                        </Account>)
                    }
                </tbody>
            </table>

        </div >
    )
}

