import React from 'react';

const VisitorEditableRow = () => {
  return (
    <tr>
        <td>
          <input type="text" name='Full_name' required='required' placeholder='Enter full name' />
        </td>

        <td>
          <input type="email" name='Email' required='required' placeholder='Enter email' />
        </td>

        <td>
          <input type="tel" name='Phone_Number' required='required' placeholder='Enter phone number' />
        </td>

        <td>
          <input type="text" name='Company' required='required' placeholder='Enter company name' />
        </td>

        {/* <td>
          <input type="text" name='Position' required='required' placeholder='Enter position' />
        </td>

        <td>
          <input type="text" name='Host' required='required' placeholder='Enter host name' />
        </td>

        <td>
          <input type="text" name='Time_In' required='required' placeholder='Enter time in' />
        </td>

        <td>
          <input type="text" name='Time_Out' required='required' placeholder='Enter time out' />
        </td> */}

        <td>
          <input type="text" name='Status' required='required' placeholder='Enter status' />
        </td>
    </tr>
  );
};

export default VisitorEditableRow;
