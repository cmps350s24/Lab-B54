import React from 'react'
import styles from '@/app/page.module.css'

export default function Account({ account }) {
    return (
        <tr>
            <td>{account.accountNo}</td>
            <td>{account.acctType}</td>
            <td>{account.firstname}</td>
            <td>{account.lastname}</td>
            <td>
                <img src={account.profileImage} alt="" className={styles.profilePic} />
            </td>

        </tr>
    )
}
