import React from 'react';
import PropTypes from 'prop-types';

/* MAKING API CALLS BASED ON THE SEARCH PANEL ITEM CLICK */
const SearchPanel = ({
    showMenuHandler,
    dropDownHandler,
    updateQuery,
    showCalender,
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
                          <button className="dropDownBtn" onClick={() => updateQuery("all")}>All</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("stories")}>Stories</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("comments")}>Comments</button>
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
                          <button className="dropDownBtn" onClick={() => updateQuery("popularity")}>Popularity</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("date")}>Date</button>
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
                          <button className="dropDownBtn" onClick={() => updateQuery("all-time")}>All Time</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("last-24-hours")}>Last 24h</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("past-week")}>Past Week</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("past-month")}>Past Month</button>
                          <button className="dropDownBtn" onClick={() => updateQuery("past-year")}>Past Year</button>
                          

                          {/*

                             <button className="dropDownbtn" onClick={() => showCalender}/>
                             ** Calender JSX
                          
                          */}
                          
                          {/* 

                             ** On Submiting Dates
                             ** Get The Values Of Inputs
                             ** Pass those values to updateQuery handler
                             <button onClick={() => customDateRange(input1, input2)}>Custom Range</button>                           
                           */}

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
