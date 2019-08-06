import React from 'react';
import PropTypes from 'prop-types';

/* MAKING API CALLS BASED ON THE SEARCH PANEL ITEM CLICK */
const SearchPanel = ({
    showMenuHandler,
    dropDownHandler,
    menu1,
    menu2,
    menu3
}) => {
    
    return(
        <div className="search-panel">
          <div>
            <span>Search</span>
            <button className="mainButton" onClick={() => showMenuHandler("menu1")}>Stories</button>
            {
                menu1
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button className="dropDownBtn">All</button>
                          <button className="dropDownBtn">Stories</button>
                          <button className="dropDownBtn">Comments</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <span>by</span>
            <button className="mainButton" onClick={() => showMenuHandler("menu2")}>Popularity</button>
            {
                menu2
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button className="dropDownBtn">Popularity</button>
                          <button className="dropDownBtn">Date</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <span>for</span>
            <button className="mainButton" onClick={() => showMenuHandler("menu3")}>All Time</button>
            {
                menu3 
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                             }}>
                          <button className="dropDownBtn">All Time</button>
                          <button className="dropDownBtn">Last 24h</button>
                          <button className="dropDownBtn">Past Week</button>
                          <button className="dropDownBtn">Past Month</button>
                          <button className="dropDownBtn">Past Year</button>
                          <button className="dropDownBtn">Custom Range</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
        </div>
    );
};

SearchPanel.propTypes = {
    
};

export default SearchPanel;
