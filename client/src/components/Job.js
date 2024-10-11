import React from 'react'

export const Job = (props) => {
    let { job, setShowDelModal, setJobToDel } = props
    const handleClick = (e) => {
        setShowDelModal(true)
        setJobToDel(e.target.id)
    }
    return (
        <div className='m-1 p-1 border-2 border-neutral-950 rounded' >
            <img id={job._id} onClick={(e) => { handleClick(e) }} width="30" height="30" src="https://img.icons8.com/plasticine/100/filled-trash.png" alt="filled-trash" />
            {`${props.index + 1}. # ${job.jobOutcome.toUpperCase()} =>  ${job.notes} @ ${job.time}`}

        </div>
    )
}

