import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link'
export default function Account({ account, onDelete }) {
    return (
        <tr id="row-${acct.accountNo}">
            <td><img src={account.profileImage} alt="Profile Image" className={styles.profilePic} /></td>
            <td>{account.firstname}</td>
            <td>{account.lastname}</td>
            <td>{account.gender}</td>
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.balance} QR</td>
            <td>{account.email}</td>
            <td>{account.dateOpened}</td>
            <td>
                {account.balance >= 0 ?
                    <button onClick={e => onDelete(account.accountNo)} className={styles.btnDelete}>
                        <i class="fas fa-trash">Delete</i>
                    </button> : ''}
                <Link href={
                    {
                        pathname: "/accounts/edit",
                        query: account
                    }
                }
                >
                    <button className={styles.btnEdit}>
                        <i className="fas fa-edit">Edit</i>
                    </button>
                </Link>
            </td>
        </tr>
    )
}
