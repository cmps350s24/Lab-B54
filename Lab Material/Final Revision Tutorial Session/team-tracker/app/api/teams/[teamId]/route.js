import teamRepo from "@/app/repo/team-repo";

export async function DELETE(request, { params }) {
    const teamId = params.teamId;
    const response = await teamRepo.deleteTeam(teamId);
    return Response.json(response, { status: 200 })
}
