import { useState, useEffect, Fragment } from 'react';
import { nanoid } from 'nanoid';
import Navbar from '../../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../../Dashboard Components/Sidebar/Sidebar';
import './AdminPage.css';
import axios from 'axios';
import EmployeeReadOnlyRow from './EmployeeReadOnlyRow';
import VisitorReadOnlyRow from './VisitorReadOnlyRow';
import EmployeeEditableRow from './EmployeeEditableRow';
import VisitorEditableRow from './EmployeeEditableRow';

const AdminPage = () => {
  const [visitors, setVisitors] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [addFormData, setAddFormData] = useState({
    Full_Name: '',
    Email: '',
    Phone_Number: '',
    Position: '',
  });

  const [employeeEditFormData, setEmployeeEditFormData] = useState({
    Full_Name: '',
    Email: '',
    Phone_Number: '',
    Position: '',
  })

  const [visitorEditFormData, setVisitorEditFormData] = useState([])

  const [editVisitor, setEditVisitorId] = useState(null);
  const [editEmployee, setEditEmployeeId] = useState(null);

  const fetchVisitors = async () => {
    const { data } = await axios.get('/adminPage/visitorsLog');
    setVisitors(data);
  };

  const fetchEmployees = async () => {
    const { data } = await axios.get('/adminPage/employeeList');
    setEmployees(data);
  };

  // const handleCreateEmployee = (e) => {
  //   e.preventDefault();

  //   axios.post("/adminPage/employeeList", addFormData)
  // }

  useEffect(() => {
    fetchVisitors();
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddFormChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEmployeeEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...employeeEditFormData };
    newFormData[fieldName] = fieldValue;

    setEmployeeEditFormData(newFormData)
  }

  const handleVisitorEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...visitorEditFormData };
    newFormData[fieldName] = fieldValue;

    setVisitorEditFormData(newFormData)
  }

  const handleAddFormSubmit = e => {
    e.preventDefault();

    const newEmployee = {
      Id: nanoid(),
      Full_Name: addFormData.Full_Name,
      Email: addFormData.Email,
      Phone_Number: addFormData.Phone_Number,
      Position: addFormData.Position,
    };

    const newEmployees = [...employees, newEmployee];
    setEmployees(newEmployees);
    setAddFormData({
      Full_Name: '',
      Email: '',
      Phone_Number: '',
      Position: '',
    });
  };

  const handleEmployeeEditFormSubmit = (e) => {
    e.preventDefault()

    const editedEmployee = {
      Id: editEmployee,
      Full_Name: employeeEditFormData.Full_Name,
      Email: employeeEditFormData.Email,
      Phone_Number: employeeEditFormData.Phone_Number,
      Position: employeeEditFormData.Position,
    }
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.Id === editEmployee )

    newEmployees[index] = editedEmployee

    setEmployees(newEmployees)
    setEditEmployeeId(null)
  }

  const handleEditEmployeeClick = (e, employee) => {
    e.preventDefault()
    setEditEmployeeId(employee.Id) 

    const formValues = {
      Full_Name: employee.Full_Name,
      Email: employee.Email,
      Phone_Number: employee.Phone_Number,
      Position: employee.Position,
    }
    setEmployeeEditFormData(formValues)
  }

  const handleEditVisitorClick = (e, visitor) => {
    e.preventDefault()
    setEditVisitorId(visitor.Id)

    const formValues = {
      Full_name: visitor.Full_Name,
      Email: visitor.Email,
      Phone_Number: visitor.Phone_Number,
      Position: visitor.Position,
      Status: visitor.Status
    }
    setVisitorEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditEmployeeId(null)
  }

  const handleDeleteClick = (employeeID) => {
    const newEmployees = [...employees]

    const index = employees.findIndex((employee) => employee.Id === employeeID )

    newEmployees.splice(index, 1)

    setEmployees(newEmployees)
  }

  return (
    <div className="admin_container">
      <Navbar />
      <div className="admin_sidebar">
        <Sidebar />
        <div className="admin_content">
          <span className="table_title">Admin Visitor Data</span>
          <form action="">
            <table>
              <thead>
                <tr>
                  <th>Visitor Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Actions</th>
                  
                </tr>
              </thead>
              <tbody>
                {visitors.map(visitor => (
                  <Fragment>
                  {editVisitor === visitor.Id ? (
                    <VisitorEditableRow visitorEditFormData={visitorEditFormData} />
                  ) : (
                    <VisitorReadOnlyRow visitor={visitor} handleEditVisitorClick={handleEditVisitorClick} />
                  )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <span className="table_title employee_table">Employee Data</span>
          <form onSubmit={handleEmployeeEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <Fragment>
                  {editEmployee === employee.Id ? (
                    <EmployeeEditableRow employeeEditFormData={employeeEditFormData} handleEmployeeEditFormChange={handleEmployeeEditFormChange} handleCancelClick={handleCancelClick} />
                  ) : (
                    <EmployeeReadOnlyRow employee={employee} handleEditEmployeeClick={handleEditEmployeeClick} handleDeleteClick={handleDeleteClick} />
                  )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <h2 className="employee_title">Add an Employee</h2>
          <form onSubmit={handleAddFormSubmit} className="employee_add_form">
            <div className="form_left">
              <input
                type="text"
                name="Full_Name"
                value={addFormData.Full_Name}
                id=""
                required="required"
                placeholder="Enter a name"
                onChange={handleAddFormChange}
              />

              <input
                type="text"
                name="Email"
                value={addFormData.Email}
                id=""
                required="required"
                placeholder="Enter an email"
                onChange={handleAddFormChange}
                className="email"
              />
            </div>

            <div className="form_right">
              <input
                type="text"
                name="Phone_Number"
                value={addFormData.Phone_Number}
                id=""
                required="required"
                placeholder="Enter a phone number"
                onChange={handleAddFormChange}
              />

              <input
                type="text"
                name="Position"
                value={addFormData.Position}
                id=""
                required="required"
                placeholder="Enter a position"
                onChange={handleAddFormChange}
                className="position"
              />
            </div>
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
