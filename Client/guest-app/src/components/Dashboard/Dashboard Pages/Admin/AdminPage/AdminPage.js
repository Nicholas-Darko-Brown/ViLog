import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import Navbar from '../../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../../Dashboard Components/Sidebar/Sidebar';
import './AdminPage.css';
import { hostRows } from '../../../../../DummyData';
import { useNavigate } from 'react-router-dom';
import { columnRows } from '../../../../../DummyData';

const AdminPage = () => {
  let navigate = useNavigate();

  const [data, setData] = useState(hostRows);
  const [employee, setEmployee] = useState(columnRows)

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const handleDeleteEmployee = id => {
    setEmployee(employee.filter(item => item.id !== id))
  }

  const visitorColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Visitor', width: 130 },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'company',
      headerName: 'Company',
      width: 150,
    },
    {
      field: 'host',
      headerName: 'Host',
      sortable: true,
      width: 150,
    },
    {
      field: 'sign_in',
      headerName: 'Sign In',
      sortable: true,
      width: 150,
    },
    {
      field: 'sign_out',
      headerName: 'Sign Out',
      sortable: true,
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <div className="admin_action_container">
            {/* <Link to={"/edit/"+params.row.id}> */}
            <button
              className="admin_edit"
              onClick={() => {
                navigate('/edit/' + params.row.id);
              }}
            >
              Edit
            </button>
            {/* </Link> */}
            <DeleteOutline
              className="admin_delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const employeeColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'phone', headerName: 'Phone', width: 120 },
    { field: 'position', headerName: 'Position', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <div className="admin_action_container">
            {/* <Link to={"/edit/"+params.row.id}> */}
            <button
              className="admin_edit"
              onClick={() => {
                navigate('/employeeEdit/' + params.row.id);
              }}
            >
              Edit
            </button>
            {/* </Link> */}
            <DeleteOutline
              className="admin_delete"
              onClick={() => handleDeleteEmployee(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="admin_container">
      <Navbar />
      <div className="admin_sidebar">
        <Sidebar />
        <div className="admin_content">
          <span className="admin_content_title">Admin Visitor Records</span>
          <DataGrid
            rows={data}
            columns={visitorColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            className='visitor_records'
          />
          
          <span className="employee_content_title">Employee Records</span>
          <DataGrid
            rows={employee}
            columns={employeeColumns}
            pageSize={10}
            // rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick
            className='employee_records'
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
