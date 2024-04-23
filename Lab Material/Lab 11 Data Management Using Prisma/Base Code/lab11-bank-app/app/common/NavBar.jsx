import React from 'react'
import Link from 'next/link'
import styles from '@/app/page.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul class="navbar-nav">
                <li>Alpha Bank</li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/accounts/upsert">Add Account</Link>
                </li>
                <li>
                    <Link href="/accounts/transaction">Add Transaction</Link>
                </li>
            </ul>
        </nav>
    )
}
