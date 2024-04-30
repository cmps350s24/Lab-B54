import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


class TeamRepo {
    async addTeam(team) {
        try {
            return await prisma.team.create({ data: team })
        } catch (error) {
            return { error: error.message }
        }
    }

    async addPlayer(player) {
        try {
            return await prisma.player.create({ data: player })
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateTeam(id, team) {
        try {
            return await prisma.team.update({
                data: team,
                where: { id }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async updatePlayer(id, player) {
        try {
            return await prisma.player.update({
                data: player,
                where: { id }
            })
        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteTeam(id) {
        try {
            return await prisma.team.delete({
                where: { id }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async deletePlayer(id) {
        try {
            return await prisma.player.delete({
                where: { id }
            })
        } catch (error) {
            return { error: error.message }
        }
    }

    async getTeams() {
        try {
            return await prisma.team.findMany()
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTeamPlayers(teamId) {
        try {
            return await prisma.player.findMany({
                where: { teamId }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
}

export default new TeamRepo()