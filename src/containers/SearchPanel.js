import React from 'react';
import PropTypes from 'prop-types';

/* MAKING API CALLS BASED ON THE SEARCH PANEL ITEM CLICK */
const SearchPanel = ({
    showMenuHandler,
    dropDownHandler,
    updateTags,
    updateNumFilters,
    showCalender,
    menu1,
    menu2,
    menu3,
    searchDropDownValue,
    byDropDownValue,
    forDropDownValue
}) => {
    
    return(
        <div className="search-panel">
          <div>
            <span>Search</span>
            <button className="mainButton" onClick={() => showMenuHandler("menu1")}>{searchDropDownValue}</button>
            {
                menu1
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button className="dropDownBtn" name="searchDropDownValue" value="All" onClick={() => updateTags("story comment poll job")}>All</button>
                          <button className="dropDownBtn" name="searchDropDownValue" value="Stories" onClick={() => updateTags("story")}>Stories</button>
                          <button className="dropDownBtn" name="searchDropDownValue" value="Comments" onClick={() => updateTags("comment")}>Comments</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <span>by</span>
            <button className="mainButton" onClick={() => showMenuHandler("menu2")}>{byDropDownValue}</button>
            {
                menu2
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button className="dropDownBtn" name="byDropDownValue" value="Popularity" onClick={() => updateNumFilters("points")}>Popularity</button>
                          <button className="dropDownBtn" name="byDropDownValue" value="Date" onClick={() => updateNumFilters("date")}>Date</button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <span>for</span>
            <button className="mainButton" onClick={() => showMenuHandler("menu3")}>{forDropDownValue}</button>
            {
                menu3 
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                             }}>
                          <button className="dropDownBtn" name="fordropdownvalue" value="All-time" onClick={() => updateNumFilters("all-time")}>All-Time</button>
                          <button className="dropDownBtn" name="fordropdownvalue" value="Last 24h" onClick={() => updateNumFilters("last-24-hours")}>Last 24h</button>
                          <button className="dropDownBtn" name="fordropdownvalue" value="Past Week" onClick={() => updateNumFilters("past-week")}>Past Week</button>
                          <button className="dropDownBtn" name="fordropdownvalue" value="Past Month" onClick={() => updateNumFilters("past-month")}>Past Month</button>
                          <button className="dropDownBtn" name="fordropdownvalue" value="Past Year"  onClick={() => updateNumFilters("past-year")}>Past Year</button>
                          
                          {/*
                             
                             <button className="dropDownbtn" onClick={() => customDateRange("custom-range")}/>

                             ** Calender JSX
                          
                          */}
                          
                          {/* 

                             ** On Submiting Dates
                             ** Get The Values Of Inputs
                             ** Pass those values to updateTags handler
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
