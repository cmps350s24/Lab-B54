const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: "saving"
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
