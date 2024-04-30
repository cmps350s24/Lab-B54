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
            else
                return { error: "Insufficient Balance" }

            this.updateAccount(accountNo, account)
            return prisma.transaction.create({ data: transaction })

        } catch (error) {
            return { error: error.message }
        }
    }

    async getAvgBalance() {
        try {
            return prisma.account.aggregate({
                _avg: { balance: true }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async getMinAndMaxBalance() {
        try {
            return prisma.account.aggregate({
                _max: { balance: true },
                _min: { balance: true }
            })
        }
        catch (error) {
            return { error: error.message }
        }
    }

    async getTransSum(accountNo, fromDate, toDate) {
        try {
            return prisma.transaction.aggregate({
                where: {
                    accountNo,
                    date: {
                        gte: new Date(fromDate).toISOString,
                        lte: new Date(toDate).toISOString,
                    }
                },
                by: ['transType'],
                _sum: { amount: true }
            })
        } catch (e) {
            return { error: e.message }
        }
    }
    async getOwnerReport(ownerId) {
        try {
            return prisma.owner.findUnique({
                where: { id: ownerId },
                include: {
                    accounts: {
                        include: {
                            transactions: true
                        }
                    }
                }
            })
        } catch (e) {
            return { error: e.message }
        }
    }
}

export default new AccountsRepo()