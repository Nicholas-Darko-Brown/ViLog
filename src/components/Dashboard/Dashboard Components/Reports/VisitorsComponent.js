const VisitorsComponent = ({ visitors }) => {

  return (
    <div className="container">
      {visitors.length === 0 ? (
        "No reports yet"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Visitor</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Host</th>
              <th scope="col">Time In</th>
              <th scope="col">Time Out</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map(visitor => (
              <tr key={visitor.Id}>
                <td>{visitor.Full_name}</td>
                <td>{visitor.Company}</td>
                <td>{visitor.Email}</td>
                <td>{visitor.Phone_Number}</td>
                <td>{visitor.Full_Name}</td>
                <td>{visitor.Time_In}</td>
                <td>{visitor.Time_Out}</td>
                <td>{visitor.Position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VisitorsComponent;