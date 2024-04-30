'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Team({ teams }) {
    const router = useRouter()

    async function handleDelete(teamId) {
        const response = await fetch(`/api/teams/${teamId}`, {
            method: 'DELETE',
        })

        router.refresh()
    }
    return (
        <div className={styles.teamCardContainer}>
            {teams.map((team) => (
                <div className={styles.teamCard}>
                    <h1>Team Name : {team.name}</h1>
                    <h3>City : {team.city}</h3>
                    <h3>Division : {team.division}</h3>
                    <button onClick={e => handleDelete(team.id)}> Delete</button>
                    <Link href={`/teams/${team.id}/players`}>View Players</Link>
                </div>
            ))}
        </div>
    )
}
