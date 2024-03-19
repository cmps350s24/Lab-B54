import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function PUT(request, { params }) {
    const accountNo = params.id
    const accountUpdate = await request.json()
    const updatedAccount = await accountsRepo.updateAccount(accountUpdate, accountNo)
    return Response.json(updatedAccount, { status: 200 })
}

export async function GET(request, { params }) {
    const accountNo = params.id
    const account = await accountsRepo.getAccount(accountNo)
    return Response.json(account, { status: 200 })
}
export async function DELETE(request, { params }) {
    const accountNo = params.id
    const message = await accountsRepo.deleteAccount(accountNo)
    return Response.json({ message }, { status: 200 })
}
