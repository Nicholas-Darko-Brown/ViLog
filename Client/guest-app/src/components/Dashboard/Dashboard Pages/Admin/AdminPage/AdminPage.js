import { useState, useEffect, Fragment } from 'react';
import './AdminPage.css';
import Navbar from '../../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../../Dashboard Components/Sidebar/Sidebar';
import axios from 'axios';
import VisitorReadOnlyRow from './VisitorReadOnlyRow';
import EmployeeReadOnlyRow from './EmployeeReadOnlyRow';
import VisitorEditableRow from './VisitorEditableRow';
import EmployeeEditableRow from './EmployeeEditableRow';

const AdminPage = () => {
  const [visitors, setVisitors] = useState([]);
  const [employees, setEmployees] = useState([]);

  //state of edit button
  const [editVisitorId, setEditVisitorId] = useState(null);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  // Initial form state
  const [addVisitorFormData, setAddFormVisitorData] = useState({
    Full_name: '',
    Email: '',
    Status: '',
    Time_In: '',
    Time_Out: '',
    Phone_Number: '',
    Company: '',
    Position: '',
    Host: '',
  });

  const [addEmployeeFormData, setAddFormEmployeeData] = useState({
    Full_Name: '',
    Email: '',
    Phone_Number: '',
    Position: '',
  });

  const [visitorEditFormData, setVisitorEditFormData] = useState({
    Full_name: '',
    Email: '',
    Status: '',
    Time_In: '',
    Time_Out: '',
    Phone_Number: '',
    Company: '',
    Position: '',
    Host: '',
  })

  const [employeeEditFormData, setEmployeeEditFormData] = useState({
    Full_Name: '',
    Email: '',
    Phone_Number: '',
    Position: '',
  })

  //fetching data from endpoint
  const fetchVisitorsData = async () => {
    const { data } = await axios.get('/adminPage/visitorsLog');
    setVisitors(data);
    console.log(data);
  };

  useEffect(() => {
    fetchVisitorsData();
  }, []);

  const fetchEmployeesData = async () => {
    const { data } = await axios.get('/adminPage/employeeList');
    setEmployees(data);
    console.log(data)
  };

  useEffect(() => {
    fetchEmployeesData();
  }, []);

  //add form change
  const handleAddVisitorFormChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fielValue = e.target.value;

    const newFormData = { ...addVisitorFormData };
    newFormData[fieldName] = fielValue;

    setAddFormVisitorData(newFormData);
  };

  const handleAddEmployeeFormChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fielValue = e.target.value;

    const newFormData = { ...addEmployeeFormData };
    newFormData[fieldName] = fielValue;

    setAddFormEmployeeData(newFormData);
  };

  const handleVisitorEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name');
    const fielValue = e.target.value;

    const newFormData = { ...visitorEditFormData };
    newFormData[fieldName] = fielValue;

    setVisitorEditFormData(newFormData)
  }

  const handleEmployeeEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name');
    const fielValue = e.target.value;

    const newFormData = { ...employeeEditFormData };
    newFormData[fieldName] = fielValue;

    setEmployeeEditFormData(newFormData)
  }

  // add form submit
  const handleAddVisitorFormSubmit = e => {
    e.preventDefault();

    const newVisitor = {
      Full_name: addVisitorFormData.Full_name,
      Email: addVisitorFormData.Email,
      Status: addVisitorFormData.Status,
      Time_In: addVisitorFormData.Time_In,
      Time_Out: addVisitorFormData.Time_Out,
      Phone_Number: addVisitorFormData.Phone_Number,
      Company: addVisitorFormData.Company,
      Position: addVisitorFormData.Position,
      Host: addVisitorFormData.Host,
    };

    const newVisitors = [...visitors, newVisitor];
    setVisitors(newVisitors);
    setAddFormVisitorData({
      Full_name: '',
      Email: '',
      Status: '',
      Time_In: '',
      Time_Out: '',
      Phone_Number: '',
      Company: '',
      Position: '',
      Host: '',
    });

    axios.post(`/`, newVisitor)
  };

  const handleAddEmployeeFormSubmit = e => {
    e.preventDefault();

    const newEmployee = {
      Full_Name: addEmployeeFormData.Full_Name,
      Email: addEmployeeFormData.Email,
      Phone_Number: addEmployeeFormData.Phone_Number,
      Position: addEmployeeFormData.Position,
    };

    const newEmployees = [...employees, newEmployee];
    console.log(newEmployees)
    setEmployees(newEmployees);
    setAddFormEmployeeData({
      Full_Name: '',
      Email: '',
      Phone_Number: '',
      Position: '',
    });

    axios.post(`adminPage/addEmployee`, newEmployee)
  };

  const handleVisitorEditFormSubmit = (e) => {
    e.preventDefault();

    const editedVisitor = {
      Id: editVisitorId,
      Full_name: visitorEditFormData.Full_name,
      Email: visitorEditFormData.Email,
      Status: visitorEditFormData.Status,
      Time_In: visitorEditFormData.Time_In,
      Time_Out: visitorEditFormData.Time_Out,
      Phone_Number: visitorEditFormData.Phone_Number,
      Company: visitorEditFormData.Company,
      Position: visitorEditFormData.Position,
      Host: visitorEditFormData.Host,
    }

    const newVisitors = [...visitors]
    const index = visitors.findIndex((visitor) =>  visitor.Id === editVisitorId)

    newVisitors[index] = editedVisitor
    setVisitors(newVisitors)
    setEditVisitorId(null)
  }

  const handleEmployeeEditFormSubmit = (e) => {
    e.preventDefault();

    const editedEmployee = {
      Id: editEmployeeId,
      Full_Name: employeeEditFormData.Full_Name,
      Email: employeeEditFormData.Email,
      Phone_Number: employeeEditFormData.Phone_Number,
      Position: employeeEditFormData.Position,
    }
    console.log(editedEmployee)

    const newEmployees = [...employees]
    console.log(newEmployees)
    const index = employees.findIndex((employee) => employee.Id === editEmployeeId)

    newEmployees[index] = editedEmployee
    setEmployees(newEmployees)
    setEditEmployeeId(null)

    axios.put(`adminPage/updateEmployee/${editEmployeeId}`, editedEmployee)
  }

  //edit click
  const handleVisitorEditClick = (e, visitor) => {
    e.preventDefault();
    setEditVisitorId(visitor.Id);

    const formValues = {
      Full_name: visitor.Full_name,
      Email: visitor.Email,
      Status: visitor.Status,
      Time_In: visitor.Time_In,
      Time_Out: visitor.Time_Out,
      Phone_Number: visitor.Phone_Number,
      Company: visitor.Company,
      Position: visitor.Position,
      Host: visitor.Host,
    };

    setVisitorEditFormData(formValues)
  };

  const handleEmployeeEditClick = (e, employee) => {
    e.preventDefault();
    setEditEmployeeId(employee.Id);

    const formValues = {
      Full_Name: employee.Full_Name,
      Email: employee.Email,
      Phone_Number: employee.Phone_Number,
      Position: employee.Position,
    }

    setEmployeeEditFormData(formValues)
    // console.log(employeeEditFormData)


   
  };

  // cancel button
  const handleVisitorCancelClick = () => {
    setEditVisitorId(null)
  }

  const handleEmployeeCancelClick = () => {
    setEditEmployeeId(null)
  }

  //delete button
  const handleVisitorDeleteClick = (visitorId) => {
    const newVisitors = [...visitors]

    const index = visitors.findIndex((visitor) => visitor.Id === visitorId)

    newVisitors.splice(index, 1)

    setVisitors(newVisitors)

    axios.delete(`/deleteVisit/${visitorId}`)
  }

  const handleEmployeeDeleteClick = (employeeId) => {
    const newEmployees = [...employees]

    console.log(employeeId)

    const index = employees.findIndex((employee) => employee.Id === employeeId)

    newEmployees.splice(index, 1)

    setEmployees(newEmployees)

    axios.delete(`/adminPage/deleteEmployee/${employeeId}`)
  }


  return (
    <div className="admin_container">
      <Navbar />
      <div className="admin_sidebar">
        <Sidebar />
        <div className="admin_content">
          <span className='table_title'>ADMIN VISITOR DATA</span>
          <form onSubmit={handleVisitorEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Visitor Name</th>
                  <th>Email</th>
                  {/* <th>Status</th>
                <th>Time In</th>
                <th>Time Out</th> */}
                  <th>Phone</th>
                  {/* <th>Company</th> */}
                  <th>Position</th>
                  {/* <th>Host</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map(visitor => (
                  <Fragment>
                    {editVisitorId === visitor.Id ? (
                      <VisitorEditableRow visitorEditFormData={visitorEditFormData} handleVisitorEditFormChange={handleVisitorEditFormChange} handleVisitorCancelClick={handleVisitorCancelClick}  />
                    ) : (
                      <VisitorReadOnlyRow
                        visitor={visitor}
                        handleVisitorEditClick={handleVisitorEditClick}
                        handleVisitorDeleteClick={handleVisitorDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <h2>Add a Visitor</h2>
          <form onSubmit={handleAddVisitorFormSubmit}>
            <input
              type="text"
              name="Full_name"
              required="required"
              placeholder="Enter name"
              onChange={handleAddVisitorFormChange}
              value={addVisitorFormData.Full_name}
            />
            <input
              type="email"
              name="Email"
              required="required"
              placeholder="Enter email"
              onChange={handleAddVisitorFormChange}
              value={addVisitorFormData.Email}
            />
            {/* <input type="text" name='Status' required='required' placeholder='Enter status' onChange={handleAddVisitorFormChange} value={addVisitorFormData.Status} />
            <input type="text" name='Time_In' required='required' placeholder='Enter time in' onChange={handleAddVisitorFormChange} value={addVisitorFormData.Time_In} />
            <input type="text" name='Time_Out' required='required' placeholder='Enter time_out' onChange={handleAddVisitorFormChange} value={addVisitorFormData.Time_Out} /> */}
            <input
              type="tel"
              name="Phone_Number"
              required="required"
              placeholder="Enter phone number"
              onChange={handleAddVisitorFormChange}
              value={addVisitorFormData.Phone_Number}
            />
            {/* <input type="text" name='Company' required='required' placeholder='Enter company' onChange={handleAddVisitorFormChange} value={addVisitorFormData.Company} /> */}
            <input
              type="text"
              name="Position"
              required="required"
              placeholder="Enter position"
              onChange={handleAddVisitorFormChange}
              value={addVisitorFormData.Position}
            />
            {/* <input type="text" name='Host' required='required' placeholder='Enter host' onChange={handleAddVisitorFormChange} value={addVisitorFormData.Host} /> */}
            <button type="submit" className="add_btn">
              Add
            </button>
          </form>

          <span className='table_title'>ADMIN EMPLOYEE DATA</span>
          <form onSubmit={handleEmployeeEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Email </th>
                  <th>Phone </th>
                  <th>Position </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <Fragment>
                    {editEmployeeId === employee.Id ? (
                      <EmployeeEditableRow employeeEditFormData={employeeEditFormData} handleEmployeeEditFormChange={handleEmployeeEditFormChange} handleEmployeeCancelClick={handleEmployeeCancelClick} />
                    ) : (
                      <EmployeeReadOnlyRow
                        employee={employee}
                        handleEmployeeEditClick={handleEmployeeEditClick}
                        handleEmployeeDeleteClick={handleEmployeeDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <h2>Add an Employee</h2>
          <form onSubmit={handleAddEmployeeFormSubmit}>
            <input
              type="text"
              name="Full_Name"
              required="required"
              placeholder="Enter name"
              onChange={handleAddEmployeeFormChange}
              value={addEmployeeFormData.Full_Name}
            />
            <input
              type="email"
              name="Email"
              required="required"
              placeholder="Enter email"
              onChange={handleAddEmployeeFormChange}
              value={addEmployeeFormData.Email}
            />
            <input
              type="tel"
              name="Phone_Number"
              required="required"
              placeholder="Enter phone number"
              onChange={handleAddEmployeeFormChange}
              value={addEmployeeFormData.Phone_Number}
            />
            <input
              type="text"
              name="Position"
              required="required"
              placeholder="Enter position"
              onChange={handleAddEmployeeFormChange}
              value={addEmployeeFormData.Position}
            />
            <button type="submit" className="add_btn">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
