import React from 'react';

const VisitorReadOnlyRow = ({ visitor, handleEditVisitorClick }) => {
  return (
    <tr>
      <td>{visitor.Full_name}</td>
      <td>{visitor.Email}</td>
      <td>{visitor.Phone_Number}</td>
      <td>{visitor.Company}</td>
      <td>{visitor.Status}</td>
      <td>
        <button type='button' onClick={(e) => handleEditVisitorClick(e, visitor)}>Edit</button>
      </td>
    </tr>
  );
};

export default VisitorReadOnlyRow;
