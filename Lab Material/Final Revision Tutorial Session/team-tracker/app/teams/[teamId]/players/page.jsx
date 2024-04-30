import React from 'react'
import teamRepo from '@/app/repo/team-repo'
import styles from '@/app/page.module.css'

export default async function page({ params }) {
    const players = await teamRepo.getTeamPlayers(params.teamId)
    return (
        <div className={styles.teamCardContainer}>
            {players.map((player) => (
                <div className={styles.teamCard}>
                    <h1>Player Name : {player.name}</h1>
                    <h3>Position : {player.position}</h3>
                    <h3>Jersey Number : {player.jerseyNumber}</h3>
                </div>
            ))}
        </div>
    )
}
