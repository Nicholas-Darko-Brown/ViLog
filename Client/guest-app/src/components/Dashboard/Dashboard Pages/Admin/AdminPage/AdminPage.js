import Navbar from '../../../Dashboard Components/Navbar/Navbar'
import Sidebar from '../../../Dashboard Components/Sidebar/Sidebar'
import './AdminPage.css'

const AdminPage = () => {
  return (
    <div className='admin_container'>
        <Navbar />
        <div className="admin_sidebar">
            <Sidebar />
            <div className="admin_content">
                Hello World
            </div>
        </div>
    </div>
  )
}

export default AdminPage