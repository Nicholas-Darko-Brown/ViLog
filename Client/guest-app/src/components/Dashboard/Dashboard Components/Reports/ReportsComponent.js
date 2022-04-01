import React from "react";

const ReportsComponent = ({ reports }) => {

  return (
    <div className="container">
      {reports.length === 0 ? (
        "You currently have no tickets created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Host</th>
              <th scope="col">Position</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.Id}>
                <td>{report.Full_Name}</td>
                <td>{report.Email}</td>
                <td>{report.Position}</td>
                <td>{report.Phone_Number}</td>
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