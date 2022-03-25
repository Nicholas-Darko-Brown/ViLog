import { useEffect, useState } from 'react';
import './Host.css';
import Navbar from '../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../Dashboard Components/Sidebar/Sidebar';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

import { hostRows } from '../../../../DummyData';
// import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Host = () => {
  // let navigate = useNavigate()

  // const [data, setData] = useState([])

  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const { data } = await axios.get('/adminPage/visitorsLog');
    setVisitors(data);
    console.log(data)
  };



  // const handleDelete = (id) => {
  //   setData(data.filter(item => item.id !== id))
  // }

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 100 },
  //   { field: 'name', headerName: 'Visitor', width: 130 },
  //   { field: 'email', headerName: 'Email', width: 180 },
  //   {
  //     field: 'company',
  //     headerName: 'Company',
  //     width: 150,
  //   },
  //   {
  //     field: 'host',
  //     headerName: 'Host',
  //     sortable: true,
  //     width: 150,
  //   },
  //   {
  //     field: 'sign_in',
  //     headerName: 'Sign In',
  //     sortable: true,
  //     width: 150,
  //   },
  //   {
  //     field: 'sign_out',
  //     headerName: 'Sign Out',
  //     sortable: true,
  //     width: 150,
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'Status',
  //     sortable: false,
  //     width: 130,
  //   },
  //   {
  //     field: 'action',
  //     headerName: 'Action',
  //     width: 150,
  //     renderCell: params => {
  //       return (
  //         <div className="host_action_container">
  //           {/* <Link to={"/edit/"+params.row.id}> */}
  //             <button className="host_edit" onClick={() => {
  //               navigate('/edit/'+params.row.id)
  //             }}>Edit</button>
  //           {/* </Link> */}
  //           <DeleteOutline className="host_delete" onClick={() => handleDelete(params.row.id)} />
  //         </div>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="host_container">
      <Navbar />
      <div className="host_wrapper">
        <Sidebar />
        <div className="host_content">
          <span className="host_content_title">Host Visitor Records</span>
          {/* <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            // rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick
          /> */}

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
                      <div className="visitor_company">{visitor.Company}</div>
                      <div className="visitor_position">
                        {visitor.Position}
                      </div>
                      <div className="visitor_phone">
                        {'0' + visitor.Phone_Number}
                      </div>
                      <div className="visitor_email">
                        {visitor.Email}
                      </div>
                    </td>
                    <td>{visitor.Host}</td>
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
