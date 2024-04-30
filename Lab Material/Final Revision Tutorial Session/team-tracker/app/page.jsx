import Image from "next/image";
import Team from "@/app/teams/Team";

import teamRepo from "@/app/repo/team-repo";

export default async function Home() {
  const teams = await teamRepo.getTeams();
  return (
    <>
      <Team teams={teams}></Team>
    </>
  );
}
