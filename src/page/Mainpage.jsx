import "./mainpage.css"
import React from 'react'
import Info from "../components/info/Info";
import Map from "../components/map/Map";
import ContamTable from "../components/contamtable/ContamTable"

function Mainpage() {
    return (
        <div className="mainpage">
            <Info />
            <Info />
            <ContamTable />
            
        </div>
    )
}

export default Mainpage;
