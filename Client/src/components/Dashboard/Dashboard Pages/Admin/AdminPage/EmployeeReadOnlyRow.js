const EmployeeReadOnlyRow = ({ employee, handleEmployeeEditClick, handleEmployeeDeleteClick }) => {

  return (
    <tr>
      <td>{employee.Full_Name}</td>
      <td>{employee.Email}</td>
      <td>{employee.Password}</td>
      <td>{employee.Phone_Number}</td>
      <td>{employee.Position}</td>
      <td className='action_btn'>
          <button className='edit_btn' type='button' onClick={(e) => handleEmployeeEditClick(e, employee)}>Edit</button>
          <button className='delete_btn' type='button' onClick={() => handleEmployeeDeleteClick(employee.Id)} >Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeReadOnlyRow;
