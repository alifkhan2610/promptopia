import mongoose from "mongoose";

let isConnected = false; // truck the connection

export const connectToDB = async() =>{
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log('Mongodb is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifideTopology: true,
        })
        isConnected = true;
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
}