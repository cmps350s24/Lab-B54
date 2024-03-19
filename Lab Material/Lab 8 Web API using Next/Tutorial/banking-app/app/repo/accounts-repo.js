// npm i fs-extra
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

export default class AccountsRepo {
    constructor() {
        this.path = path.join(process.cwd(), 'app/data/accounts.json')
        console.log(this.path);
    }
    // This can be used if we want to generate a unique account number, but the account no should be a number
    // otherwise use nano id which generates a unique id but string 
    async generateUniqueAccountNo() {
        const accounts = await this.getAccounts()
        return Math.max(...accounts.map(account => account.accountNo)(...accountNumbers)) + 1
    }

    async getAccounts(type) {
        const accounts = await fs.readJSON(this.path)
        if (type) {
            return accounts.filter(account => account
                .acctType.toLowerCase() === type.toLowerCase())
        }

        return accounts;
    }
    async addAccount(account) {
        account.accountNo = nanoid()
        const accounts = await this.getAccounts()
        accounts.push(account)
        await fs.writeJSON(this.path, accounts)
        return account
    }

    async updateAccount(account, accountNo) {
        const accounts = await fs.readJson(this.path)
        const index = accounts.findIndex(acc => acc.accountNo == accountNo)
        console.log(index);
        if (index >= 0) {
            accounts[index] = { ...accounts[index], ...account }
            await fs.writeJson(this.path, accounts)
            return "updated successfully"
        }
        return "Unable to update account because it does not exist"
    }

    async getAccount(accNo) {
        const accounts = await fs.readJson(this.path)
        const index = accounts.findIndex(acc => acc.accountNo == accNo)
        if (index >= 0) {
            return accounts[index]
        }
        return "Account not found"
    }

    async deleteAccount(accNo) {
        const accounts = await fs.readJson(this.path)
        const index = accounts.findIndex(acc => acc.accountNo == accNo)
        if (index < 0) return "Account not found"

        accounts.splice(index, 1)
        await fs.writeJson(this.path, accounts)
        return "deleted successfully"
    }
    async getTransactions(accountNo) {
        const accounts = await this.getAccounts();
        const account = accounts.find(account => account.accountNo == accountNo);
        if (!account)
            return "Account not found";

        else if (!account.transactions)
            return "No transactions found";

        return account.transactions;
    }
    async addTransaction(transaction, accountNo) {
        console.log('I was called');
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());
        try {
            const accounts = await this.getAccounts();
            const account = accounts.find(account => account.accountNo == accountNo);
            if (transaction.transType == 'Deposit')
                account.balance += transaction.amount;
            else if (transaction.transType == 'Withdraw')
                if (account.balance < transaction.amount)
                    return "Insufficient balance";
                else
                    account.balance -= transaction.amount;
            await fs.writeJSON(this.path, accounts)
            return account
        } catch (err) {
            throw err;
        }
    }
}