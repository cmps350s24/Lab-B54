import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function GET(request, { params }) {
    const accountNo = params.id

    const transactions = await accountsRepo.getTransactions(accountNo)
    return Response.json(transactions, { status: 200 })
}

export async function POST(request, { params }) {
    const transaction = await request.json()
    const accountNo = params.id

    const accountAfterTransaction = await accountsRepo.addTransaction(transaction, accountNo)
    return Response.json(accountAfterTransaction, { status: 200 })
}
