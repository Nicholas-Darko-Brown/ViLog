import Navbar from '../../../Dashboard Components/Navbar/Navbar'
import Sidebar from '../../../Dashboard Components/Sidebar/Sidebar'
import './NewEmployeeUser.css'

const NewEmployeeUser = () => {
    const handleSubmit = e => {
        e.preventDefault()
      }

  return (
    <div className='new_employee_user_container'>
        <Navbar />
        <div className="new_employee_sidebar">
            <Sidebar />
            <div className="new_employee_content">
            <span className="new_employee_title">Add New Employee/Host</span>
          <form action="" className="new_employee_form">
          <div className="new_employee_form_wrapper">
            <div className="new_employee_item">
              <label htmlFor="">Username</label>
              <input type="text" name="text" id="text" placeholder='jon'/>
            </div>

            <div className="new_employee_item">
              <label htmlFor="">Full Name</label>
              <input type="text" name="text" id="text" placeholder='Jon Smith'/>
            </div>

            <div className="new_employee_item">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="email" placeholder='jon87@gmail.com'/>
            </div>

            <div className="new_employee_item">
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="password" placeholder='password'/>
            </div>

            <div className="new_employee_item">
              <label htmlFor="">Phone</label>
              <input type="tel" name="tel" id="tel" placeholder='+1 234 567 89'/>
            </div>

            <div className="new_employee_item">
              <label htmlFor="">Position</label>
              <input type="text" name="text" id="text" placeholder='Enter position'/>
            </div>
            </div>
            <button className="new_employee_btn" onClick={(e) => handleSubmit(e)}>Create</button>
          </form>
            </div>
        </div>
    </div>
  )
}

export default NewEmployeeUser