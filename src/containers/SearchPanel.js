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
            <button onClick={() => showMenuHandler("menu1")}>Search</button>
            {
                menu1
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button>All</button>
                          <button>Stories</button>
                          <button>Comments</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <button onClick={() => showMenuHandler("menu2")}>Popularity</button>
            {
                menu2
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button>Popularity</button>
                          <button>Date</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <button onClick={() => showMenuHandler("menu3")}>All Time</button>
            {
                menu3
                
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                             }}>
                          <button>All Time</button>
                          <button>Last 24h</button>
                          <button>Past Week</button>
                          <button>Past Month</button>
                          <button>Past Year</button>
                          <button>Custom Range</button>
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
