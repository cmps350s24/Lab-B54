'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Account({ account, onDelete }) {

    return (
        <tr id="row-${acct.accountNo}">
            <td><img src={account.Owner.profileImage} alt="Profile Image" className={styles.profilePic} /></td>
            <td>{account.Owner.firstname}</td>
            <td>{account.Owner.lastname}</td>
            <td>{account.Owner.gender}</td>
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance} QR</td>
            <td>{account.Owner.email}</td>
            <td>{account.dateOpened}</td>
            <td>
                {account.balance == 0 ?
                    <button className={styles.btnDelete}
                        onClick={e => onDelete(account.accountNo)}
                    >
                        <i class="fas fa-trash">Delete</i>
                    </button> : ''}

                <Link href={
                    {
                        pathname: '/accounts/upsert',
                        query: account
                    }
                }>
                    <button className={styles.btnEdit}>
                        <i className="fas fa-edit">
                            Edit
                        </i>
                    </button>
                </Link>
            </td>
        </tr >
    )
}


