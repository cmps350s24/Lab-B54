'use client'
import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from '@/app/page.module.css'


export default function Transaction() {
    const router = useRouter()
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch('/api/accounts')
            .then(res => res.json())
            .then(setAccounts)

    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const transaction = Object.fromEntries(formData)
        // send it to the server
        const url = `/api/accounts/${transaction.accountNo}/trans`
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        }

        const response = await fetch(url, request)
        router.push('/')
    }
    return (
        <>
            <h3 className={styles.title}>Add Transaction</h3>
            <form id="trans-form" onSubmit={handleSubmit} className={styles.form}>
                <label for="accountNo">Account No</label>
                <select name="accountNo" id="accountNo" required>
                    {accounts.map(account => <option value={account.accountNo} key={account.accountNo}>
                        {account.accountNo} - {account.firstname}   {account.lastname} -  {account.balance}
                    </option>)}
                </select>

                <label for="type">Transaction Type</label>
                <select name="transType" id="transType" required>
                    <option></option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </select>

                <label for="amount">Amount</label>
                <input type="number" id="amount" name="amount" required />
                <button type="Submit">Submit</button>
            </form >
        </>
    )
}


// rfc