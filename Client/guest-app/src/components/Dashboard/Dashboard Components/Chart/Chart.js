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

const Chart = ({ title, data, dataKey, grid }) => {


  return (
    <div className="chart_container">
      <h3 className="chart_title">{ title }</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray='5 5'/>}
        </LineChart>
        
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
