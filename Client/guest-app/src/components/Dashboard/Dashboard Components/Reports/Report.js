import { useEffect, useState } from 'react';
import GeneratePDF from './GenerateReport';
import GenerateVisitorPDF from './GenerateVisitorReport';
import GenerateGraphPDF from './GraphReport'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import ReportsComponent from './ReportsComponent';
import VisitorsComponent from './VisitorsComponent';
import GraphComponent from './GraphComponent';

const Report = () => {
  const [reports, setReports] = useState([]);
  const [visitors, setVisitors] = useState([])
  const [charts, setCharts] = useState([])

  useEffect(() => {
    const getAllReports = async () => {
      try {
        const response = await axios.get('/adminPage/employeeList');
        setReports(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllReports();
  }, []);

  useEffect(() => {
    const getVisitorsReport = async () => {
      try {
        const response = await axios.get('/adminPage/visitorsLog');
        setVisitors(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVisitorsReport();
  }, []);

  useEffect(() => {
    const getChartReport = async () => {
      try {
        const response = await axios.get('/dashboardPage/graph');
        setCharts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChartReport();
  }, []);

  const employeesReport = reports.filter(report => report);

  const visitorsReport = visitors.filter(visitor => visitor)

  const graphReport = charts.filter(chart => chart)

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="">
          <button
            className="btn btn-primary"
            onClick={() => GeneratePDF(employeesReport)}
          >
            Generate Employee Report
          </button>
          <button className='btn btn-success'><a href='mailto:someone@example.com'>Share through Email</a> </button>

          <ReportsComponent reports={reports} />
        </div>

        <div className="">
          <button className="btn btn-primary"
            onClick={() => GenerateVisitorPDF(visitorsReport)}>Generate Visitors Report</button>

            <VisitorsComponent visitors={visitors} />
        </div>

        <div className="">
          <button className="btn btn-primary"
            onClick={() => GenerateGraphPDF(graphReport)}>Generate Graph Report</button>

            <GraphComponent charts={charts} />
        </div>
      </div>
      
    </div>
  );
};

export default Report;
