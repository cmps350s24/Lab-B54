import React from 'react'
import accountsRepo from '@/app/repo/accounts-repo'
export default async function GET() {
    const owners = await accountsRepo.getOwners()
    return Response.json(owners)

}
