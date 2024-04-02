import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/accounts/add">Add Account</Link></li>
                <li><Link href="/accounts/transaction">Transaction</Link></li>
            </ul>
        </nav>
    )
}
