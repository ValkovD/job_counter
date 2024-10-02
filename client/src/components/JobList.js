import React from 'react'
// import { AddJobBtn } from './AddJobBtn'
import { Job } from './Job';
interface Jobs {
    jobOoutcome: string;
    notes: string
}
interface JobListProps {
    [x: string]: any;
    [index: number]: Jobs

}


export const JobList = (props: JobListProps) => {
    // Fetch the jobs today
    let { jobs } = props
    // console.log(jobs.length)
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center'>
                {jobs.length > 0 ? jobs.map((job: Jobs, index: number) => {
                    return <Job job={job} index={index} key={index} />
                }) : props.error}
            </div>


            {/* <AddJobBtn></AddJobBtn> */}

        </div>
    )
}





