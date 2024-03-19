export async function PUT(request, { params }) {
    const accountUpdate = await request.json()
    const message = `This is the put method /api/accounts/ID NUMBER`
    return Response.json({ accountUpdate, id: params.id }, { status: 200 })
}