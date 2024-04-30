import teamRepo from "@/app/repo/team-repo";

export async function GET(request, { params }) {
    const teamId = params.teamId
    const players = await teamRepo.getTeamPlayers(teamId)
    return Response.json(players, { status: 200 })
}