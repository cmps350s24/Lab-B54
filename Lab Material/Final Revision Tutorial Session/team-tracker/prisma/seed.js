// 1. open the json files
// 2. read the json files
// 3. parse the json files
// 4. loop through the json files
// 5. create records using the prisma client
import { PrismaClient } from '@prisma/client'
import fs from 'fs-extra'
import path from 'path'

const prisma = new PrismaClient()

const teamsPath = path.join(process.cwd(), 'app/data/teams.json')
const playersPath = path.join(process.cwd(), 'app/data/players.json')

async function initializeDB() {
    try {
        const teams = await fs.readJSON(teamsPath)
        const players = await fs.readJSON(playersPath)

        for (const team of teams) {
            await prisma.team.create({ data: team })
        }
        for (const player of players) {
            await prisma.player.create({ data: player })
        }
        return true
    } catch (error) {
        console.log(error)
    }
}


const success = await initializeDB()
if (success) {
    console.log('Database seeded')
} else {
    console.log('Database not seeded')
}




