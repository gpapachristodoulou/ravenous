import React from "react";


function SearchBar() {
    return (
        <div className="SearchBar">
            <input placeholder="Search Businesses" />
            <input placeholder="Where?" />
            <button>Search</button>
            <div className="SearchBar-sort-options">
                <ul>
                    <li>Best Match</li>
                    <li>Highest Rated</li>
                    <li>Most Reviewed</li>
                </ul>
            </div>
        </div>
    )
}


export default SearchBar;