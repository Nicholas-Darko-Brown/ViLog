import { useState } from 'react'
import './LargeWidget.css'
import axios from 'axios'

const LargeWidget = () => {
  const [visitors, setVisitors] = useState([])

  const fetchVisitors = async () => {
    const { data } = await axios.get("")
  }

  return (
    <div className='large_widget_container'>
      <span className="large_widget_title">Visitors</span>
      <table className="large_widget_table">
        <thead>
          <tr>
            <th>Visitor</th>
            <th>Host</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default LargeWidget