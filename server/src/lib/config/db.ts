import mongoose from "mongoose";

const connectWithDB = async (): Promise<void> => {
    try {
        const response = await mongoose.connect(process.env.MONGO_LOCAL_URI as string);
        console.log(`Mongo Conected: ${response.connection.host}`);
    } catch (error) {
        console.log(`MONGO Connection error: ${error}`);

    }
}

export default connectWithDB;
