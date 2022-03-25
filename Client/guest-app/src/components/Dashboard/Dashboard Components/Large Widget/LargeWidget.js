import { useEffect, useState } from 'react';
import './LargeWidget.css';
import axios from 'axios';

const LargeWidget = () => {
  const [visitors, setVisitors] = useState([]);

  const fetchVisitors = async () => {
    const { data } = await axios.get('/adminPage/visitorsLog');
    setVisitors(data);
    console.log(data);
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <div className="large_widget_container">
      <span className="large_widget_title">Signed In Visitors</span>
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
              <td>{visitor.Host}</td>
              <td>{visitor.Time_Out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LargeWidget;
