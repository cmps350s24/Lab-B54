import teamRepo from "@/app/repo/team-repo";


export async function PUT(request, { params }) {
    const teamId = params.teamId;
    const team = await request.json();
    const updatedTeam = await teamRepo.updateTeam(teamId, team);
    return Response.json(updatedTeam, { status: 200 })
}
export async function DELETE(request, { params }) {
    const teamId = params.teamId;
    const response = await teamRepo.deleteTeam(teamId);
    return Response.json(response, { status: 200 })
}
