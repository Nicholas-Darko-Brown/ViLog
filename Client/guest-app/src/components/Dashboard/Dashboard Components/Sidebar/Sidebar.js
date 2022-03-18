import React from 'react'
import './Sidebar.css'
import { Home,BarChart, TrendingUp, MoreHoriz, AccountCircle, People, Save, Share, ExitToApp } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <div className='sidebar_wrapper'>
            <div className="sidebar_menu">
                <h3 className="sidebar_title">Dashboard</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item active">
                        <Home className='sidebar_icon'/>
                        Home
                    </li>
                    <li className="sidebar_list_item">
                        <BarChart className='sidebar_icon'/>
                        Statistics
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUp className='sidebar_icon'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebar_menu">
                <h3 className="sidebar_title">Quick Menu</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item">
                        <People className='sidebar_icon'/>
                        Visitors
                    </li>
                    <li className="sidebar_list_item">
                        <AccountCircle className='sidebar_icon'/>
                        Hosts
                    </li>
                    <li className="sidebar_list_item">
                        <MoreHoriz className='sidebar_icon'/>
                        More
                    </li>
                </ul>
            </div>

            <div className="sidebar_menu">
                <h3 className="sidebar_title">File Transfer</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item">
                        <Save className='sidebar_icon'/>
                        Reports
                    </li>
                    <li className="sidebar_list_item">
                        <ExitToApp className='sidebar_icon'/>
                        Export
                    </li>
                    <li className="sidebar_list_item">
                        <Share className='sidebar_icon'/>
                        Share
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar