import teamRepo from "@/app/repo/team-repo";

export async function GET() {
    const teams = await teamRepo.getTeams()
    return Response.json(teams, { status: 200 })
}

export async function POST(request) {
    const team = await request.json()
    const newTeam = await teamRepo.addTeam(team)
    return Response.json(newTeam, { status: 201 })
}