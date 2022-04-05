import { useEffect, useState } from 'react';
import './Host.css';
import Navbar from '../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../Dashboard Components/Sidebar/Sidebar';
import axios from 'axios';

// Host Module 
const Host = () => {

  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const { data } = await axios.get('/adminPage/visitorsLog');
    setVisitors(data);
    console.log(data)
  };


  return (
    <div className="host_container">
      <Navbar />
      <div className="host_wrapper">
        <Sidebar />
        <div className="host_content">
          <span className="host_content_title">Host Visitor Records</span>

          <form action="">
            <table>
              <thead>
                <tr>
                  <th>Visitor</th>
                  <th>Host</th>
                  <th>Sign In</th>
                  <th>Sign Out</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map(visitor => (
                  <tr>
                    <td className="visitor_column">
                      <div className="visitor_name">{visitor.Full_name}</div>
                      {/* <div className="visitor_company">{visitor.Company}</div> */}
                      {/* <div className="visitor_position">
                        {visitor.Position}
                      </div> */}
                      {/* <div className="visitor_phone">
                        {visitor.Phone_Number}
                      </div> */}
                      {/* <div className="visitor_email">
                        {visitor.Email}
                      </div> */}
                    </td>
                    <td>{visitor.Full_Name}</td>
                    <td>{visitor.Time_In}</td>
                    <td>{visitor.Time_Out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Host;
