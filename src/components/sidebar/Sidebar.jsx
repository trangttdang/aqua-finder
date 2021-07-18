import React  from 'react'
import "./sidebar.css"
import Searchbar from '../searchbar/Searchbar';
import ResultList from '../resultlist/ResultList'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <div className="logo">Logo</div>
                <div className="sidebarSearch">
                    <Searchbar placeholder="Enter your location"/>
                </div>
                <div className="sidebarResult">
                    <ResultList />
                </div>
            </div>
        </div>
    )
}

