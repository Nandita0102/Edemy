import mongoose from "mongoose";

//connect to MONGODB database

const connectDB = async()=>{
    mongoose.connection.on('connected', ()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/EdemyLMS`)
}
export default connectDB