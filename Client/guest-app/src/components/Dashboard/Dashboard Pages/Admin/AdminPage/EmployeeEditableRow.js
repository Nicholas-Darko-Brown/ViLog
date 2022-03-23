import React from 'react';

const EmployeeEditableRow = ({
  employeeEditFormData,
  handleEmployeeEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          name="Full_Name"
          placeholder="Enter full name"
          value={employeeEditFormData.Full_Name}
          onChange={handleEmployeeEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          required="required"
          name="Email"
          placeholder="Enter email"
          value={employeeEditFormData.Email}
          onChange={handleEmployeeEditFormChange}
        />
      </td>
      <td>
        <input
          type="tel"
          required="required"
          name="Phone_Number"
          placeholder="Enter phone number"
          value={employeeEditFormData.Phone_Number}
          onChange={handleEmployeeEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="Position"
          placeholder="Enter position"
          value={employeeEditFormData.Position}
          onChange={handleEmployeeEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Update</button>
        <button type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EmployeeEditableRow;
