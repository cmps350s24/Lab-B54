import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async getOwners() {


    }
    async getAccounts(acctType) {

    }
    async addAccount(account) {
        prisma.account.create({
            data: account
        })
    }

    async addOwner(owner) {
        prisma.owner.create({
            data: owner
        })
    }

    async updateAccount(accountNo, account) {

    }

    async getAccount(accountNo) {

    }
    async searchOwner(name) {

    }

    async deleteAccount(accountNo) {

    }
    async getTransactions(accountNo) {

    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

    }

}

export default new AccountsRepo()