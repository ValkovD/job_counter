import React from 'react';
import { Navbar } from './components/Navbar';
import { AddJobBtn } from './components/AddJobBtn';
import { JobList } from './components/JobList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ModalSubmitJob } from './components/ModalSubmitJob';
// const JOB_COUNTER_BACKEND_URL = process.env.JOB_COUNTER_BACKEND_URL
const PORT = process.env.PORT
// import './App.css';
function App() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  console.log(process.env.REACT_APP_BACKEND_URL)
  // Get jobs with todays date
  const fetchJobs = async function () {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs/today`)
      const jobs = res.data.today;
      console.log(res.data.today);
      setJobs(jobs)
    } catch (err) {
      console.error(err.message)
      // console.log(err.response.data)
      setError(err.message)
    }


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
  useEffect(() => {
    fetchJobs()
  }, [])
  return (
    <div >
      <Navbar jobs={jobs}></Navbar>
      <JobList jobs={jobs} error={error}></JobList>
      <AddJobBtn setShowModal={setShowModal}></AddJobBtn>
      {showModal ? <ModalSubmitJob setShowModal={setShowModal} submitJob={submitJob}></ModalSubmitJob> : null}
    </div>
  );
}

export default App;
