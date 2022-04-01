import Navbar from '../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../Dashboard Components/Sidebar/Sidebar';
import './Edit.css';
import User from '../../../../assets/user.png';
import { Add, CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish, SystemUpdateAlt } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  let navigate = useNavigate()

  const handleUpdate = e => {
    e.preventDefault()
  }

  return (
    <div className="edit_container">
      <Navbar />
      <div className="edit_sidebar">
        <Sidebar />
        <div className="edit_content">
          <div className="edit_content_title_container">
            <span className="edit_content_title">Edit Visitor Data</span>
            <button className="edit_add_btn" onClick={() => {
              navigate('/newUser')
            }}>Create  <Add /> </button>
          </div>
          <div className="edit_widget_container">
            <div className="edit_display">
              <div className="edit_display_top">
                <img src={User} alt="" className="edit_display_img" />
                <div className="edit_display_top_title">
                  <span className="edit_display_username">Anna Becker</span>
                  <span className="edit_display_position">
                    Software Engineer
                  </span>
                </div>
              </div>
              <div className="edit_display_bottom">
                <span className="edit_display_title">Account Details</span>
                <div className="edit_display_info">
                  <PermIdentity className="edit_display_icon" />
                  <span className="edit_display_info_title">annabeck99</span>
                </div>
                <div className="edit_display_info">
                  <CalendarToday className="edit_display_icon" />
                  <span className="edit_display_info_title">10.12.1996</span>
                </div>
                <span className="edit_display_title">Contact Details</span>
                <div className="edit_display_info">
                  <PhoneAndroid className="edit_display_icon" />
                  <span className="edit_display_info_title">+1 234 567 89</span>
                </div>
                <div className="edit_display_info">
                  <MailOutline className="edit_display_icon" />
                  <span className="edit_display_info_title">annabeck99@gmail.com</span>
                </div>
                <div className="edit_display_info">
                  <LocationSearching className="edit_display_icon" />
                  <span className="edit_display_info_title">New York | USA</span>
                </div>
              </div>
            </div>
            <div className="edit_update">
              <span className="edit_update_title">Edit</span>
              <form action="" className="edit_update_form">
                <div className="edit_update_left">
                  <div className="edit_update_item">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" placeholder='annabeck99' className='edit_update_input'/>
                  </div>
                  <div className="edit_update_item">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" placeholder='Anna Becker' className='edit_update_input'/>
                  </div>
                  <div className="edit_update_item">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder='annabeck99@gmail.com' className='edit_update_input'/>
                  </div>
                  <div className="edit_update_item">
                    <label htmlFor="">Phone</label>
                    <input type="tel" name="" id="" placeholder='+1 234 567 89' className='edit_update_input'/>
                  </div>
                  <div className="edit_update_item">
                    <label htmlFor="">Address</label>
                    <input type="text" name="" id="" placeholder='New York | USA' className='edit_update_input'/>
                  </div>
                </div>

                <div className="edit_update_right">
                  <div className="edit_update_upload">
                    <img src={User} alt="" className='edit_update_img'/>
                    <label htmlFor="file">
                      <Publish />
                    </label>
                    <input type="file" name="file" id="file" style={{display: "none"}} />
                  </div>
                  <button className="edit_update_btn" onClick={(e) => handleUpdate(e)}>Update <SystemUpdateAlt /> </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
