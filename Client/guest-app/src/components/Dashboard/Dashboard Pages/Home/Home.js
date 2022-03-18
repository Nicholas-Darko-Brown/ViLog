import FeaturedInfo from '../../Dashboard Components/Featured Info/FeaturedInfo'
import Chart from '../../Dashboard Components/Chart/Chart'
import './Home.css'
import { userData } from '../../../../DummyData'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title="Visitor Analytics" grid dataKey="numberOfVisitors" />
    </div>
  )
}

export default Home