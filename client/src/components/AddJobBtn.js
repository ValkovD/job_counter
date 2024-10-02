import React from 'react'

export const AddJobBtn = ({ setShowModal }: any) => {

    return (
        <div className='flex justify-center'>
            <button onClick={() => { setShowModal(true) }} className="rounded-lg ... bg-lime-500 h-12 w-60"><p>+ Job</p></button>
        </div>
    )
}




