
import "./../globals.css";
import { getTeams } from '@/lib/getData';

export default async function Teams()  {

  const teams = await getTeams()
  console.log("teams in page : ", teams)

  return (
    <div>team page</div>

  );
}