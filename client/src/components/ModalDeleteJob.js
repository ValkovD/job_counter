import React from 'react'

export const ModalDeleteJob = ({ setShowDelModal, delOneJob, jobTodel }) => {
    return (
        <div id="crud-modal" tabIndex={-1} aria-hidden="true" className="visible overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
                            DELETE ?
                        </h3>
                    </div>
                    {/* <!-- Modal body --> */}
                    <form className="flex flex-row justify-around p-4 md:p-5">
                        <button onClick={() => { setShowDelModal(false); delOneJob() }} type="submit" className=" bg-red-500 w-32 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            YES
                        </button>

                        <button onClick={() => { setShowDelModal(false) }} type="submit" className=" bg-lime-500 w-40 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            NO
                        </button>
                    </form>
                </div>
            </div >
        </div >
    )
}



