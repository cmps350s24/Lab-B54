import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    const accounts = await accountsRepo.getAccounts(type)
    return Response.json(accounts, { status: 200 })
}

export async function POST(request) {
    const account = await request.json()
    const newAccount = await accountsRepo.addAccount(account)
    return Response.json(newAccount, { status: 200 })
}
