import mongoose from "mongoose"

const connectToDb = async()=>{
    try {
        await mongoose.connect(process.env.URI as string ,{dbName:process.env.DB_NAME as string})
        console.log('connected to db')
    } catch (error) {   
        throw error;
    }
}

export default connectToDb;