import './AdminPage.css'

const VisitorReadOnlyRow = ({ visitor, handleVisitorEditClick, handleVisitorDeleteClick }) => {
  return (
    <tr>
      <td>{visitor.Full_name}</td>
      <td>{visitor.Email}</td>
      <td>{visitor.Password}</td>
      <td>{visitor.Time_In}</td>
      <td>{visitor.Time_Out}</td>
      <td>{visitor.Phone_Number}</td>
      <td>{visitor.Company}</td>
      <td>{visitor.Position}</td>
      <td>{visitor.Full_Name}</td>
      <td>
          <button className='edit_btn' type='button' onClick={(e) => handleVisitorEditClick(e, visitor)}>Edit</button>
          <button className='delete_btn' type='button' onClick={() => handleVisitorDeleteClick(visitor.Id)} >Delete</button>
      </td>
    </tr>
  );
};

export default VisitorReadOnlyRow;
