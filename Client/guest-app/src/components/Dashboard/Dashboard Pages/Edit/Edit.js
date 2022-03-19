import Navbar from '../../Dashboard Components/Navbar/Navbar'
import Sidebar from '../../Dashboard Components/Sidebar/Sidebar'
import './Edit.css'
import User from '../../../../assets/user.png'

const Edit = () => {
  return (
    <div className='edit_container'>
      <Navbar />
      <div className="edit_sidebar">
        <Sidebar />
        <div className="edit_content">
          <div className="edit_content_title_container">
            <span>Edit User</span>
            <button className="edit_add_btn">
              Create
            </button>
          </div>
          <div className="edit_widget_container">
            <div className="edit_display">
              <div className="edit_display_top">
                <img src={User} alt="" className="edit_display_img" />
                <div className="edit_display_top_title">
                  <span className="edit_display_username">Anna Becker</span>
                  <span className="edit_display_position">Software Engineer</span>
                </div>
              </div>
              <div className="edit_display_bottom"></div>
            </div>
            <div className="edit_update"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit