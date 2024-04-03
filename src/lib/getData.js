import ConnectToDb from "./connectToDb";
import { Team, Tournament } from "./models";

export async function getTournaments() {
    try {
        ConnectToDb();
        const tournaments = await Tournament.find({});
        return tournaments;
    }
    catch (err) {
        console.log(err);
        throw new Error('Error getting tournaments');
    }
}

export async function getTournament(id) {
    try {
        ConnectToDb();
        const tournament = await Tournament.findById(id);

        if (!tournament) {
            throw new Error('Tournament not found');
        }
        console.log("tournament in getTournament : ", tournament)


        return tournament;
    }
    catch (err) {
        console.log(err);
        throw new Error('Error getting tournament');
    }
}



export async function getTeams() {
    try {
        ConnectToDb();
        const teams = await Team.find({});
        return teams;
    }
    catch (err) {
        console.log(err);
        throw new Error('Error getting teams');
    }
}

export async function getTeam(id) {
    try {
        ConnectToDb();
        const team = await Team.findById(id);
        return team;
    }   
    catch (err) {
        console.log(err);
        throw new Error('Error getting team');
    }  
}