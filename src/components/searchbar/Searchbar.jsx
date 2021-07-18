import React from 'react'
import "./searchbar.css"
import SearchIcon from '@material-ui/icons/Search'

function Searchbar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInput">
                <input type = "text" placeholder={placeholder}></input>
                <div className = "searchIcon"><SearchIcon/></div>
            </div>
            {/* <div className="searchResult">
                {data.map((value, key) => {
                    return (
                        <div className="resultItems"> <p>{value.title} </p></div>

                );
            })}
            </div> */}
        </div>
    )
}

export default Searchbar
