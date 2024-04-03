export default async function TeamCard({ teamId })  {

    const team = await getTeam(teamId);

    return (
        <div>
            {team && team.name}
        </div>
    )
}