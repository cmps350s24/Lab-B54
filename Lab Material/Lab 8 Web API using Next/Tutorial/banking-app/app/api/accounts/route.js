export async function GET(request) {
    const message = "Welcome to your first API call [ /api/accounts]"
    return Response.json({ message: message }, { status: 200 })
}