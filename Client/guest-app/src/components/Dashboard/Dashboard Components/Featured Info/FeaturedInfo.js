import './FeaturedInfo.css';
// import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedInfo = () => {
  const [charts, setCharts] = useState();

  const fetchChart = async () => {
    const { data } = await axios.get('/dashboardPage/graph');
    setCharts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChart();
  }, []);

  return (
    <div className="featuredInfo_container">
    {charts && charts.map((chart) => (
        <div className="featuredInfo_item">
          <span className="featuredInfo_title">Number of Visits</span>
          <div className="featuredInfo_money_container">
            <span className="featuredInfo_money"> { chart.Months } - </span>
            <span className="featuredInfo_money_rate negative"> {chart.Visit} </span>
          </div>
        </div>
        ))}
    </div>
  );
};

export default FeaturedInfo;
