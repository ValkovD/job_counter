
import Job from '../models/Job';
import dateString from '../utils/DateString';
// ==============================================

// Show All Days GET /days
// async function showAllDays(req: Request, res: Response): Promise<void> {
//     let allDays = await Job.find({})
//     console.log("allJobs", allJobs);
//     if (allJobs.length === 0) { return res.status(404).json([{ msg: "Jobs Not found" }]) }
//     try {
//         res.status(200).json([{ allJobs }]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json([{ msg: "Server error" }]);
//     }
// };


// Show todays Jobs GET /days/today
async function showToday(req, res) {
    let today = await Job.find({ date: dateString() })
    // console.log("today", today, dateString())
    if (!today) { return res.status(404).json({ msg: "Today not found CODE 404" }) }
    try {
        res.status(200).json({ today });
    } catch (err) {
        console.error(err.message);
        res.status(500).json([{ msg: "Server error" }]);
    }
};
// Submit Job POST /jobs
async function submitJob(req, res) {
    const today = dateString();
    // let jobExist = await Day.findOne({ date: today })
    // console.log("jobExist", jobExist)
    // if (jobExist) {
    //     return res.status(409).json({ msg: "Day already exist CODE 409" })
    // }
    try {
        let job = req.body
        // console.log(job)
        // date must be passed in this format "15-02-1874" "dd-mm-yyyy"


        job = new Job(job)
        await job.save()
        // console.log(job)
        res.status(200).json({ msg: "Job submited" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json([{ msg: "Server error" }]);
    }
};


// FILL DAYS SERVICE ROUTE
// async function fillDays(req, res) {
//     const today = dateString();
//     const { jobs } = req.body
//     let dayExist = await Day.findOne({ date: today })
//     console.log("dayExist", dayExist)
//     if (dayExist) {
//         return res.status(409).json({ msg: "Day already exist CODE 409" })
//     }
//     try {
//         console.log(req.body)
//         // date must be passed in this format "15-02-1874" "dd-mm-yyyy"


//         let day = new Day({ jobs })
//         await day.save()
//         res.status(200).json({ msg: "Day submited" });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json([{ msg: "Server error" }]);
//     }
// };
// Delete day DELETE /days
async function deleteDay(req, res) {
    if (req.params.id.length !== 24) {
        return res
            .status(400)
            .json([{ msg: "Incorrect id format requested from client" }]);
    }
    try {
        let jobToDelete = await Job.findById(req.params.id).exec();
        if (!jobToDelete) {
            return res
                .status(404)
                .json({ msg: "Job not found" });
        }
        let deletedJob = await Job.findByIdAndDelete(jobToDelete);
        return res.status(200).json([{ msg: `Job ${deletedJob.date} deleted` }]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json([{ msg: "Server error" }]);
    }
    const jobToDelete = req.params.id;
    console.log(jobToDelete)
    res.send(jobToDelete);
};

// Edit job PUT /days/edit/jobs
// async function submitJob(req, res) {
//     try {
//         let date = { date: req.body.date };
//         let newJobsArray = req.body.jobs
//         // console.log(newJobsArray)
//         let findDay = await Job.findOne(date);
//         console.log("findDaysssssssssssssssssssssss", findDay)
//         let updatedDay = await Job.findOneAndUpdate(date, { jobs: [findDay.jobs, ...newJobsArray] }, { new: true });
//         if (!updatedDay || !findDay) {
//             return res.status(404).json({ msg: "Day not found CODE 404" })
//         }
//         res.send(updatedDay);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json([{ msg: "Server error" }]);
//     }
// }
export default {
    showToday,
    // submitDay,
    submitJob,
    deleteDay,
    // showAllDays,
    // fillDays
}


