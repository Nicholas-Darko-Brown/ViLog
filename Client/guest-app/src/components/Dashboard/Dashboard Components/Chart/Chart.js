import { useState, useEffect } from 'react';
import './Chart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

// Graph of Monthly Visitors
const Chart = ({ title, data, dataKey, grid }) => {

  const [chart, setChart] = useState([])

  const fetchChart = async () => {
    const { data } = await axios.get('https://viilogg.herokuapp.com/dashboardPage/graph');
    setChart(data);
    console.log(data)
  }

  useEffect(() => {
    fetchChart()
  }, [])

  return (
    <div className="chart_container">
      <h3 className="chart_title">{ title }</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      
        <LineChart data={chart}>
          <XAxis dataKey="Months" />
          <YAxis />
          <Line type="monotone" dataKey="Visit"/>
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray='5 5'/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
