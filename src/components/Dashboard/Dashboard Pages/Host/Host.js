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
                      <div className="visitor_name">{visitor.Full_name}, <span className="visitor_company" style={{marginLeft: '5px'}}>{visitor.Company}</span> </div>
                      <div className="visitor_position">
                        {visitor.Position}, <span className='visitor_number' style={{marginLeft: '5px'}}> {visitor.Phone_Number} </span>
                      </div>
                      <div className="visitor_email">
                        {visitor.Email}
                      </div>
                    </td>
                    <td>{visitor.Full_Name}</td>
                    <td>{visitor.Time_In}</td>
                    <td className='signOut_container'>{visitor.Time_Out}</td>
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
