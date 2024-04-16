import React from 'react'
import styles from '@/app/page.module.css'

export default function Add() {
    return (
        <>
            <h3>Add Account</h3>
            <form id="account-form" className={styles.form}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" />

                <label htmlFor="acctType">Account Type</label>
                <select name="acctType" id="acctType" required>
                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance">Balance</label>
                <input type="number" name="balance" id="balance" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="dateOpened">Date Opened</label>
                <input type="date" name="dateOpened" id="dateOpened" />

                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" required>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="profileImage">Profile Image URL</label>
                <input type="url" name="profileImage" id="profileImage" />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
