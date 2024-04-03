const mongoose = require('mongoose');

const connection = {};

export default async function ConnectToDb (){

    try{
        if (connection.isConnected){
            console.log('using existing connection')
            return;
        }
        console.log('using new connection')
        const db = await mongoose.connect(process.env.MONGODB_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("connected to database");
    }
    catch(err){
        console.log(err);
        throw new Error('Error connecting to the database');
    }

}