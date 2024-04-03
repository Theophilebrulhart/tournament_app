"use client"
import { addTournament } from "@/lib/actionServer";
import { useFormState } from "react-dom";

export default function CreateTournament() {

    const [state, formAction] = useFormState(addTournament, undefined)


    return (
        <div>
            <h1>Create Tournament</h1>
            <form action={formAction}>
                <input type="text" name="name" placeholder="Name" />
                <input type="number" name="fieldNbr" placeholder="Field Number" />
                <button type="submit">Create</button>
                {state?.error && <div>{state.error}</div>}
            </form>
        </div>
    )
}