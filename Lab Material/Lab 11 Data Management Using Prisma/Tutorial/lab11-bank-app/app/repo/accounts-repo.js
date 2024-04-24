import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async getOwners() {
        try {
            return prisma.owner.findMany()
        } catch (error) {
            return { error: error.message }
        }
    }
    async getAccounts(acctType) {
        try {
            if (acctType == 'All' || acctType == null)
                return prisma.account.findMany({
                    include: { Owner: true }
                })

            return prisma.account.findMany({
                where: { acctType },
                include: { Owner: true }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async addAccount(account) {
        try {
            return prisma.account.create({
                data: account
            })
        } catch (error) {
            return { error: error.message }
        }
    }

    async addOwner(owner) {


        try {
            return prisma.owner.create({
                data: owner
            })
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update(
                { where: { accountNo } },
                { data: account }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async getAccount(accountNo) {
        try {
            return prisma.account.findUnique(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async searchOwner(name) {
        try {
            return prisma.owner.findMany({
                where: {
                    OR: [
                        { firstname: { contains: name } },
                        { lastname: { contains: name } }
                    ]
                }
            })
        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

        // steps
        // 1. get the matching account
        // 2. update the balance
        // 3. add the transaction
        try {
            const account = this.getAccount(accountNo)
            if (transaction.transType == 'Deposit')
                account.balance += transaction.amount
            else if (account.balance >= transaction.amount)
                account.balance -= transaction.amount

            this.updateAccount(accountNo, account)
            return prisma.transaction.create({ data: transaction })

        } catch (error) {
            return { error: error.message }
        }

    }

}

export default new AccountsRepo()