import mongoose, { Schema } from 'mongoose';


const tournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max :50,
    },
    fieldNbr: {
        type: Number,
        required: true
    },
    teams: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Team' 
    }]
    },
    {timestamps: true}
);

const teamsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max :50,
    },
    tournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }]
    },
    {timestamps: true}
);

export const Tournament = mongoose.models.Tournament || mongoose.model('Tournament', tournamentSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamsSchema);