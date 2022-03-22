import { useState, useEffect } from 'react';
import Navbar from '../../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../../Dashboard Components/Sidebar/Sidebar';
import './AdminPage.css';
import axios from 'axios'

const AdminPage = () => {
  const [visitors, setVisitors] = useState([])
  const [employees, setEmployees] = useState([])

  const fetchVisitors = async () => {
    const { data } = await axios.get("/adminPage/visitorsLog")
    setVisitors(data)
  }

  const fetchEmployees = async () => {
    const { data } = await axios.get("/adminPage/employeeList")
    setEmployees(data)
  }

  useEffect(() => {
    fetchVisitors()
  }, [])

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <div className="admin_container">
      <Navbar />
      <div className="admin_sidebar">
        <Sidebar />
        <div className="admin_content">
        <span className='table_title'>Admin Visitor Data</span>
          <table>
            <thead>
              <tr>
                <th>Visitor Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Position</th>
                <th>Host</th>
                <th>Time in</th>
                <th>Time out</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {visitors.map((visitor) => (
              <tr>
                <td>{ visitor.Full_name }</td>
                <td>{ visitor.Email }</td>
                <td>{ visitor.Phone_Number }</td>
                <td>{ visitor.Company }</td>
                <td>{ visitor.Position }</td>
                <td>{ visitor.Host }</td>
                <td>{ visitor.Time_In }</td>
                <td>{ visitor.Tiem_Out }</td>
              </tr>
              ))}
            </tbody>
          </table>

          <span>Employee Data</span>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
            {employees.map((employee) => (
              <tr>
                <td>{ employee.Full_Name }</td>
                <td>{ employee.Email }</td>
                <td>{ employee.Phone_Number }</td>
                <td>{ employee.Position }</td>
              </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
