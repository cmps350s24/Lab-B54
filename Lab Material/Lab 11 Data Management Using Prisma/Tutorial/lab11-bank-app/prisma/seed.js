import fs from 'fs-extra'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const ownersPath = path.join(process.cwd(), 'app/data/owners.json')
const accountsPath = path.join(process.cwd(), 'app/data/accounts.json')
const transPath = path.join(process.cwd(), 'app/data/transactions.json')

async function main() {
    try {
        const owners = await fs.readJSON(ownersPath)
        const accounts = await fs.readJSON(accountsPath)
        const transactions = await fs.readJSON(transPath)

        for (const owner of owners) await prisma.owner.create({ data: owner })
        for (const account of accounts) await prisma.account.create({ data: account })
        for (const transaction of transactions) await prisma.transaction.create({ data: transaction })

    } catch (error) {
        console.log(error);
        return { error: error.message }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })