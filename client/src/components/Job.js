import React from 'react'

export const Job = (props) => {
    let { job } = props
    return (
        <div className='m-1 p-1 border-2 border-neutral-950 rounded' >
            {`${props.index + 1}. # ${job.jobOutcome.toUpperCase()} =>  ${job.notes} @ ${job.time}`}
        </div>
    )
}

