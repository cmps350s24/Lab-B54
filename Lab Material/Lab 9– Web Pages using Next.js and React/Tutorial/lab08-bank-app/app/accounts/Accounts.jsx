'use client'
import React from 'react'
import Account from './Account'
import styles from '@/app/page.module.css'

// /api/accounts ? type = "All"
// /api/accounts ? type = "Saving"
// /api/accounts ? type = "Current"

async function handleLoadAccounts(e) {
    const response = await fetch(`/api/accounts?type=${e.target.value}`)
    const filteredAccounts = await response.json()
    console.log(filteredAccounts);
}

export default function Accounts({ initialAccounts }) {

    return <>
        <h1>Accounts</h1>
        <label for="acctType" className={styles.label}>
            Account Type
        </label>
        <select id="acctType" onChange={handleLoadAccounts}
            className={styles.filterDropdown}>
            <option value="All">All</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
        </select>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Profile Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    initialAccounts.map(account => <Account account={account}></Account>)
                }
            </tbody>
        </table>
    </>
}
