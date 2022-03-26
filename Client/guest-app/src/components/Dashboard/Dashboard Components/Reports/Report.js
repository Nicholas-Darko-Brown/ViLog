import { useEffect, useState } from 'react';
import GeneratePDF from './GenerateReport';
import GenerateVisitorPDF from './GenerateVisitorReport';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import ReportsComponent from './ReportsComponent';
import VisitorsComponent from './VisitorsComponent';

const Report = () => {
  const [reports, setReports] = useState([]);
  const [visitors, setVisitors] = useState([]) // new

  useEffect(() => {
    const getAllReports = async () => {
      try {
        const response = await axios.get('/adminPage/employeeList');
        setReports(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getAllReports();
  }, []);

  console.log(reports);

  //new
  useEffect(() => {
    const getVisitorsReport = async () => {
      try {
        const response = await axios.get('/adminPage/visitorsLog');
        setVisitors(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getVisitorsReport();
  }, []);

  const reportTickets = reports.filter(report => report);
  console.log(reportTickets);

  const visitorsReport = visitors.filter(visitor => visitor)
  console.log(visitorsReport)

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="">
          <button
            className="btn btn-primary"
            onClick={() => GeneratePDF(reportTickets)}
          >
            Generate Employee Report
          </button>

          <ReportsComponent reports={reports} />
        </div>

        <div className="">
          <button className="btn btn-primary"
            onClick={() => GenerateVisitorPDF(visitorsReport)}>Generate Visitors Report</button>

            <VisitorsComponent visitors={visitors} />
        </div>
      </div>
      
    </div>
  );
};

export default Report;
