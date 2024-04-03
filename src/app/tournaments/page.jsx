import { getTournaments } from "@/lib/getData";
import Link from "next/link";

export default async function Tournaments() {

    const tournaments = await getTournaments();

    console.log("tournament in page : ", tournaments)

    return (
        <div>
            <h1>Tournaments</h1>
            {tournaments.map((tournament) => (
                <Link href={`/tournaments/${tournament._id}`} key={tournament._id} >
                <div>{tournament.name}</div>
                </Link>
            ))}
        </div>
    )
}