import React from 'react';
import { Navbar } from './components/Navbar';
import { AddJobBtn } from './components/AddJobBtn';
import { JobList } from './components/JobList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ModalSubmitJob } from './components/ModalSubmitJob';
// import './App.css';
function App() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Get jobs with todays date
  const fetchJobs = async function () {
    try {
      const res = await axios.get("http://localhost:5000/jobs/today")
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
      const res = await axios.post("http://localhost:5000/jobs/", data);
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
