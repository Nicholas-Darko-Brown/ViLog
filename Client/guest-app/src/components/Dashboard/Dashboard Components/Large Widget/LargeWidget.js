import './LargeWidget.css'
import User from '../../../../assets/user.png'

const LargeWidget = () => {
  const Button = ({ type }) => {
    return <button className={"large_widget_btn " + type}>{type}</button>
  }

  return (
    <div className='large_widget_container'>
      <span className="large_widget_title">Current Visitors</span>
      <table className="large_widget_table">
        <tr className="large_widget_table_row">
          <th className="large_widget_table_head">Visitor</th>
          <th className="large_widget_table_head">Host</th>
          <th className="large_widget_table_head">Sign In</th>
          <th className="large_widget_table_head">Sign Out</th>
          <th className="large_widget_table_head">Status</th>
        </tr>

        <tr className="large_widget_table_row row-child">
          <td className="large_widget_user">
            <img src={User} alt="" className="large_widget_img" />
            <span className="large_widget_name">Susan Carol</span>
          </td>

          <td className="large_widget_host">Kevin Keagan</td>
          <td className="large_widget_sign_in">Feb 24, 22 | 09:04</td>
          <td className="large_widget_sign_out">Feb 24, 22 | 10:15</td>
          <td className="large_widget_button">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="large_widget_table_row row-child">
          <td className="large_widget_user">
            <img src={User} alt="" className="large_widget_img" />
            <span className="large_widget_name">Susan Carol</span>
          </td>

          <td className="large_widget_host">Kevin Keagan</td>
          <td className="large_widget_sign_in">Feb 24, 22 | 09:04</td>
          <td className="large_widget_sign_out">Feb 24, 22 | 10:15</td>
          <td className="large_widget_button">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="large_widget_table_row row-child">
          <td className="large_widget_user">
            <img src={User} alt="" className="large_widget_img" />
            <span className="large_widget_name">Susan Carol</span>
          </td>

          <td className="large_widget_host">Kevin Keagan</td>
          <td className="large_widget_sign_in">Feb 24, 22 | 09:04</td>
          <td className="large_widget_sign_out">Feb 24, 22 | 10:15</td>
          <td className="large_widget_button">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default LargeWidget