import './Host.css';
import Navbar from '../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../Dashboard Components/Sidebar/Sidebar';

import { DataGrid } from '@material-ui/data-grid';

const Host = () => {
  const columns = [
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
  ];

  const rows = [
    {
      id: 1,
      name: 'Jon Snow',
      email: 'jonsnow@gmail.com',
      company: 'Eagles Consult',
      host: 'Kevin Keagan',
      sign_in: 'Feb 24, 22 | 09:05',
      sign_out: 'Feb 24, 22 | 10:45',
      status: 'checked in'
    },
    {
        id: 2,
        name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        company: 'Eagles Consult',
        host: 'Kevin Keagan',
        sign_in: 'Feb 24, 22 | 09:05',
        sign_out: 'Feb 24, 22 | 10:45',
        status: 'checked in'
      },
      {
        id: 3,
        name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        company: 'Eagles Consult',
        host: 'Kevin Keagan',
        sign_in: 'Feb 24, 22 | 09:05',
        sign_out: 'Feb 24, 22 | 10:45',
        status: 'checked out'
      },
      {
        id: 4,
        name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        company: 'Eagles Consult',
        host: 'Kevin Keagan',
        sign_in: 'Feb 24, 22 | 09:05',
        sign_out: 'Feb 24, 22 | 10:45',
        status: 'checked in'
      },
      {
        id: 5,
        name: 'Jon Snow',
        email: 'jonsnow@gmail.com',
        company: 'Eagles Consult',
        host: 'Kevin Keagan',
        sign_in: 'Feb 24, 22 | 09:05',
        sign_out: 'Feb 24, 22 | 10:45',
        status: 'checked out'
      },
  ];

  return (
    <div className="host_container">
      <Navbar />
      <div className="host_wrapper">
        <Sidebar />
        <div className="host_content">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            // rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Host;
