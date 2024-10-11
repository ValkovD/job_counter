import React from 'react'
import SpinnerGif from "../spinners/Figit_spinner.gif"
export const Loading = () => {
    return (
        <div className="flex justify-center p-5">
            <img src={SpinnerGif}></img>
        </div>
    )
}
