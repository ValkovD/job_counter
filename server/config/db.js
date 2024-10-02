import mongoose from 'mongoose';
const db = process.env.MONGOURI;
console.log(db)
const connectMongoDb = async () => {

    try {
        await mongoose.connect(db);
        console.log("MongoDB Connected jpscount");
    } catch (err) {
        console.error(err.message);
        // to stop the server
        process.exit(1);
    }
};
export default connectMongoDb;