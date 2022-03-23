import React from 'react';

const EmployeeReadOnlyRow = ({ employee, handleEditEmployeeClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{employee.Full_Name}</td>
      <td>{employee.Email}</td>
      <td>{employee.Phone_Number}</td>
      <td>{employee.Position}</td>
      <td>
        <button type='button' onClick={(e) => handleEditEmployeeClick(e, employee)}>Edit</button>
        <button type='button'onClick={() => handleDeleteClick(employee.Id)} >Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeReadOnlyRow;
