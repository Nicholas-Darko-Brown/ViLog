import Navbar from '../../Dashboard Components/Navbar/Navbar';
import Sidebar from '../../Dashboard Components/Sidebar/Sidebar';
import './Edit.css';
import User from '../../../../assets/user.png';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons';

const Edit = () => {
  return (
    <div className="edit_container">
      <Navbar />
      <div className="edit_sidebar">
        <Sidebar />
        <div className="edit_content">
          <div className="edit_content_title_container">
            <span className="edit_content_title">Edit User</span>
            <button className="edit_add_btn">Create</button>
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
            <div className="edit_update"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
