import React from "react";
// import { Link } from "react-router-dom";

const ReportsComponent = ({ reports }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the ticket
  const assignColorToTicketStatus = report => {
    if (report.status === "completed") {
      return "p-3 mb-2 bg-success text-white";
    } else if (report.status === "in_progress") {
      return "p-3 mb-2 bg-warning text-dark";
    } else if (report.status === "opened") {
      return "p-3 mb-2 bg-light text-dark";
    }
  };
  return (
    <div className="container">
      {reports.length === 0 ? (
        "You currently have no tickets created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Position</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.Id}>
                <td>{report.Full_Name}</td>
                <td>{report.Email}</td>
                <td>{report.Position}</td>
                <td>{report.Phone_Number}</td>
                <td className={assignColorToTicketStatus(report)}>
                  {report.status}
                </td>
                {/* <td>
                  <Link to={`/ticket/${report.id}`}>See comments</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReportsComponent;