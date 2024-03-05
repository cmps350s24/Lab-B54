const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: "saving"
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
export function convertFromUSToQAR(amount) {
    return amount * 3.64;
}

export function addAccount(account) {
    accounts.push(account);
}

export function getAccounts() {
    return accounts
}

export function deposit(accountNo, amount) {

}