import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
  return (
    <div className='featuredInfo_container'>
        <div className="featuredInfo_item">
            <span className="featuredInfo_title">Revenue</span>
            <div className="featuredInfo_money_container">
                <span className="featuredInfo_money">$2,415</span>
                <span className="featuredInfo_money_rate negative">-11.4 <ArrowDownward /></span>
            </div>
            <span className="featuredInfo_subtitle">Compared to last month</span>
        </div>

        <div className="featuredInfo_item">
            <span className="featuredInfo_title">Sales</span>
            <div className="featuredInfo_money_container">
                <span className="featuredInfo_money">$3,415</span>
                <span className="featuredInfo_money_rate negative">-1.4 <ArrowDownward /></span>
            </div>
            <span className="featuredInfo_subtitle">Compared to last month</span>
        </div>

        <div className="featuredInfo_item">
            <span className="featuredInfo_title">Cost</span>
            <div className="featuredInfo_money_container">
                <span className="featuredInfo_money">$2,615</span>
                <span className="featuredInfo_money_rate positive">+1.4 <ArrowUpward /></span>
            </div>
            <span className="featuredInfo_subtitle">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo