import React from 'react';

const VisitorEditableRow = ({ visitorEditFormData, handleVisitorEditFormChange, handleVisitorCancelClick }) => {
  return (
    <tr>
      <td>
        {' '}
        <input
          type="text"
          required="required"
          placeholder="Enter name..."
          name="Full_name"
          value={visitorEditFormData.Full_name}
          onChange={handleVisitorEditFormChange}
        />{' '}
      </td>
      <td>
        {' '}
        <input
          type="email"
          required="required"
          placeholder="Enter email..."
          name="Email"
          value={visitorEditFormData.Email}
          onChange={handleVisitorEditFormChange}
        />{' '}
      </td>
      {/* <td> <input type="text" required="required" placeholder='Enter status...' name='Status' /> </td> */}
        <td> <input type="text" required="required" placeholder='Enter time in...' name='Time_In' /> </td>
        <td> <input type="text" required="required" placeholder='Enter time out...' name='Time_Out' /> </td>
      <td>
        {' '}
        <input
          type="tel"
          required="required"
          placeholder="Enter phone number..."
          name="Phone_Number"
          value={visitorEditFormData.Phone_Number}
          onChange={handleVisitorEditFormChange}
        />{' '}
      </td>
      <td> <input type="text" required="required" placeholder='Enter company...' name='Company' /> </td>
      <td>
        {' '}
        <input
          type="text"
          required="required"
          placeholder="Enter position..."
          name="Position"
          value={visitorEditFormData.Position}
          onChange={handleVisitorEditFormChange}
        />{' '}
      </td>
      <td> <input type="text" required="required" placeholder='Enter host...' name='Host' /> </td>
      <td>
          <button className='update_btn' type='submit'>Update</button>
          <button className='cancel_btn' type='button' onClick={handleVisitorCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default VisitorEditableRow;
