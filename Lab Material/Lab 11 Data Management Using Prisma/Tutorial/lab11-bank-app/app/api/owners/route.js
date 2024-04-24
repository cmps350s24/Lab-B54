import accountsRepo from "@/app/repo/accounts-repo"
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get("name")
    if (name) {
        console.log(name)
        return Response.json(await accountsRepo.searchOwner(name), { status: 200 })

    }

    const owners = await accountsRepo.getOwners()
    return Response.json(owners, { status: 200 })
}
