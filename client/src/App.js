import React from 'react';
import { Navbar } from './components/Navbar';
import { AddJobBtn } from './components/AddJobBtn';
import { JobList } from './components/JobList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ModalSubmitJob } from './components/ModalSubmitJob';
import { ModalDeleteJob } from './components/ModalDeleteJob';
import { Loading } from './components/Loading';
// const JOB_COUNTER_BACKEND_URL = process.env.JOB_COUNTER_BACKEND_URL
const PORT = process.env.PORT
// import './App.css';
function App() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [jobToDel, setJobToDel] = useState("")
  const [showSpin, setShowSpin] = useState(false);
  // Get jobs with todays date
  const fetchJobs = async function () {
    setShowSpin(true);
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs/today`)
      const jobs = res.data.today;
      setJobs(jobs)

    } catch (err) {
      console.error(err.message)
      // console.log(err.response.data)
      setError(err.message)
    }
    setShowSpin(false);
  }
  // POST Submit Job
  const submitJob = async function (data) {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/jobs/`, data);
      fetchJobs()
    } catch (err) {
      console.error(err.message)
      // console.log(err.response.data)
      setError(err.message)
    }
  }
  // Delete one JOB
  const delOneJob = async function () {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/jobs/${jobToDel}`);
      fetchJobs()
    } catch (err) {
      console.error(err.message)
      setError(err.message)
    }
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  return (
    <div >
      <Navbar jobs={jobs}></Navbar>
      <>
        {showSpin ? <Loading></Loading> :
          <JobList
            setShowDelModal={setShowDelModal}
            setJobToDel={setJobToDel}
            jobs={jobs}
            error={error}>
          </JobList>
        }
      </>


      <AddJobBtn setShowModal={setShowModal}></AddJobBtn>
      {showModal ? <ModalSubmitJob
        setShowModal={setShowModal}
        submitJob={submitJob}>
      </ModalSubmitJob> : null}
      {showDelModal ? <ModalDeleteJob
        setShowDelModal={setShowDelModal}
        delOneJob={delOneJob}
      // jobToDel={jobToDel}
      ></ModalDeleteJob> : null}
    </div>
  );
}

export default App;
