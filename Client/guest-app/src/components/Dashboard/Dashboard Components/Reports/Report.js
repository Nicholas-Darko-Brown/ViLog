import { useEffect, useState } from 'react'
import GeneratePDF from './GenerateReport';
import Navbar from '../Navbar/Navbar';
import './Report.css';
import axios from 'axios'
import ReportsComponent from './ReportsComponent'

const Report = () => {
    const [reports, setReports] = useState([])
  
    useEffect(() => {
        const getAllReports = async () => {
            try {
                const response = await axios.get("/adminPage/employeeList");
                setReports(response.data);
                console.log(response)
            } catch(err){
                console.log(err)
            }
        }
        getAllReports()
    }, [])

    console.log(reports)

    const reportTickets = reports.map(report => report);

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="">
        <button
              className="btn btn-primary"
              onClick={() => GeneratePDF(reportTickets)}
            >
              Generate monthly report
            </button>
        </div>
      </div>
      <ReportsComponent reports={reports} />
    </div>
  );
};

export default Report;
