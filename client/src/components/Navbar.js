import React, { useEffect } from 'react'
// import { ShiftHours } from './ShiftHours'
import { useState } from 'react';



export const Navbar = (props) => {
    let { jobs } = props
    // JPS- one shift is taken as 7.7 hrs shift
    // Shift hours today will probably need to be hooked in DB so can be tracked for current day in history
    const [shiftHours, setShiftHours] = useState(11);
    const [jps, setJps] = useState(jobs.length)
    function handleSelectChange(event) {
        setShiftHours(event.target.value);
    }
    // Calculate JPS 
    function jpsCalculate() {
        let jps = jobs.length / (shiftHours / 7.7)
        setJps(Number(jps.toFixed(2)))
        return jps
    }
    // useEffect(() => { setJps() }, [])
    useEffect(() => { jpsCalculate() }, [shiftHours, jobs.length])

    return (
        <div className='bg-neutral-300 h-auto p-1'>
            <h1 className='text-center'>JPS Counter</h1>
            <div className='flex justify-around'>
                <p className=''>Hi Deyan</p>
                <p>Shift Hrs</p>
                <select defaultValue={shiftHours} onChange={handleSelectChange}>
                    <option value="3">3</option>
                    <option value="3.25">3.25</option>
                    <option value="3.5">3.5</option>
                    <option value="3.75">3.75</option>
                    <option value="4">4</option>
                    <option value="4.25">4.25</option>
                    <option value="4.5">4.5</option>
                    <option value="4.75">4.75</option>
                    <option value="5">5</option>
                    <option value="5.25">5.25</option>
                    <option value="5.5">5.5</option>
                    <option value="5.75">5.75</option>
                    <option value="6">6</option>
                    <option value="6.25">6.25</option>
                    <option value="6.5">6.5</option>
                    <option value="6.75">6.75</option>
                    <option value="7">7</option>
                    <option value="7.25">7.25</option>
                    <option value="7.5">7.5</option>
                    <option value="7.75">7.75</option>
                    <option value="8">8</option>
                    <option value="8.25">8.25</option>
                    <option value="8.5">8.5</option>
                    <option value="8.75">8.75</option>
                    <option value="9">9</option>
                    <option value="9.25">9.25</option>
                    <option value="9.5">9.5</option>
                    <option value="9.75">9.75</option>
                    <option value="10">10</option>
                    <option value="10.25">10.25</option>
                    <option value="10.5">10.5</option>
                    <option value="10.75">10.75</option>
                    <option value="11">11</option>
                    <option value="11.25">11.25</option>
                    <option value="11.5">11.5</option>
                    <option value="11.75">11.75</option>
                    <option value="12">12</option>
                </select>
                <p className=''>JPS Today: {jps}</p>
            </div>

        </div>
    )
}

