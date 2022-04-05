import { useEffect, useState } from 'react';
import './LargeWidget.css';
import axios from 'axios';

// Table for Signed In Visitors
const LargeWidget = () => {
  const [visitors, setVisitors] = useState([]);

  const fetchVisitors = async () => {
    const { data } = await axios.get('https://viilogg.herokuapp.com/adminPage/visitorsLog');
    setVisitors(data);
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <div className="large_widget_container">
      <span className="large_widget_title">Visitors</span>
      <table className="large_widget_table">
        <thead>
          <tr>
            <th>Signed In</th>
            <th>Visitor</th>
            <th>Host</th>
            <th>Signed Out</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(visitor => (
            <tr>
              <td>{visitor.Time_In}</td>
              <td className="visitor_column">
                <div className="">{visitor.Full_name}</div>
                <div className="visitor_company">{visitor.Company}</div>
              </td>
              <td>{visitor.Full_Name}</td>
              <td>{visitor.Time_Out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LargeWidget;
