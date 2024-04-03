import { getTeam, getTournament } from "@/lib/getData";

export default async function SingleTournament({ params }) {
    console.log("id in single tournament : ", params)
    const { id } = params;

    const tournament = await getTournament(id);

    // console.log(tournament)

    // Obtenir les détails de chaque équipe
    // const teams = await Promise.all(tournament.teams.map(teamId => getTeam(teamId)));

    // console.log("teams in single tournament : ", teams);

    return (
        <div>
           {tournament && tournament.name}
           {/* {teams && teams.map(team => <div key={team._id}>{team.name}</div>)} */}
        </div>
    )
}