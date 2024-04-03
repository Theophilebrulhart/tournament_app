"use server"

import { revalidatePath } from "next/cache";
import ConnectToDb from "./connectToDb"
import { Tournament } from "./models";

export async function addTournament(previousState, formData) {
    
    const {name, fieldNbr} = Object.fromEntries(formData);

    try{
        ConnectToDb();
        const tournament = new Tournament({name, fieldNbr});
        await tournament.save();
        console.log("new tournament", name, " added")
        revalidatePathx("/tournaments");
    }
    catch(err){
        console.log(err);
        return {error: "Error adding tournament"};
    }
}