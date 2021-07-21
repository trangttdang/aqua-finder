import React  from 'react'
import "./sidebar.css"
import Searchbar from '../searchbar/Searchbar';
import ResultList from '../resultlist/ResultList'
import logo from '../../image/logo.jpg'
import location from '../../data/location.json'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <div className="img_logo"><img src={logo} alt="logo" className="logo"/></div>
                <div className="sidebarSearch">
                    <Searchbar placeholder="Enter your location" data={location}/>
                </div>
                <div className="sidebarResult">
                    <ResultList />
                </div>
            </div>
        </div>
    )
}

