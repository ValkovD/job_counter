import React from 'react'
// import { AddJobBtn } from './AddJobBtn'
import { Job } from './Job';


export const JobList = (props) => {
    // Fetch the jobs today
    let { jobs, setShowDelModal, setJobToDel } = props
    // console.log(jobs.length)
    return (
        <div className='flex flex-col  justify-center'>
            <div className='flex flex-col justify-center'>
                {jobs.length > 0 ? jobs.map((job, index) => {
                    return <Job
                        setShowDelModal={setShowDelModal}
                        setJobToDel={setJobToDel}
                        job={job} index={index} key={index} />
                }) : <p className='text-center p-5'>No jobs Done Today</p>}
            </div>
        </div>
    )
}

{/* <p className='text-center p-5'>No jobs Done Today</p> */ }



