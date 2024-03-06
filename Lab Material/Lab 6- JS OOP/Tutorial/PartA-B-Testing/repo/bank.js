const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: "saving",
    },
    {
        accountNo: 234,
        balance: 4000,
        type: "current"
    },
    {
        accountNo: 345,
        balance: 35000,
        type: "current"
    },
    {
        accountNo: 456,
        balance: 60000,
        type: 'saving'
    }

]
function convertFromUSToQAR(amount) {
    return amount * 3.64;
}

function addAccount(account) {
    accounts.push(account);
}

function getAccounts() {
    return accounts
}

function deposit(accountNo, amount) {
    const accountToDeposit = accounts.find(account => account.accountNo === accountNo)
    if (!accountToDeposit) return false

    accountToDeposit.balance += amount
    return true
}
function withdraw(accountNo, amount) {
    const accountToDeposit = accounts.find(account => account.accountNo === accountNo)
    if (!accountToDeposit) return false

    accountToDeposit.balance -= amount
    return true
}

function getAccount(accountNo) {
    return accounts.find(account => account.accountNo === accountNo)
}

function deleteAccount(accountNo) {
    const index = accounts.findIndex(account => account.accountNo === accountNo)
    if (index === -1) return false

    accounts.splice(index, 1)
    return true
}

function sumBalance() {
    return accounts.reduce((acc, curr) => acc + curr.balance, 0)
}

function averageBalance() {
    return sumBalance() / accounts.length;
}


function maxBalance() {
    return accounts.reduce((a, b) => a.balance > b.balance ? a : b)
}

function toJson() {
    return JSON.stringify(accounts)
}

function fromJson(json) {
    return JSON.parse(json)
}

export default { convertFromUSToQAR, addAccount, getAccounts, deposit, withdraw, getAccount, deleteAccount, }

const content = toJson()
console.log(content);

console.log(fromJson(content));