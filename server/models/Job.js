import mongoose from "mongoose";
import dateString from "../utils/DateString";
import timeStamp from "../utils/TimeString";
// mongoose.set('debug', true);
// const arrayOfObjects = ArrayOfObjects
const JobSchema = new mongoose.Schema({
    date: {
        type: String,
        default: dateString
    },
    time: {
        type: String,
        default: timeStamp
    },
    jobOutcome: String,
    notes: String,
})
export default mongoose.model("job", JobSchema);