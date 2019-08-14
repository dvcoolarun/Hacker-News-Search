import React from 'react';
import PropTypes from 'prop-types';

/* MAKING API CALLS BASED ON THE SEARCH PANEL ITEM CLICK */
const SearchPanel = ({
    showMenuHandler,
    dropDownHandler,
    updateTagFilter,
    updateNumFilter,
    updateSortFilter,
    showCalender,
    menu1,
    menu2,
    menu3,
    searchDropDownValue,
    byDropDownValue,
    forDropDownValue,
}) => {
    
    return(
        <div className="search-panel">
          <div>
            <span>Search</span>
            <button className="mainButton"
                    onClick={() => showMenuHandler("menu1")}>
              {searchDropDownValue}
            </button>
            {
                menu1
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button className="dropDownBtn"
                                  name="searchDropDownValue"
                                  value="All"
                                  onClick={(event) =>
                                           updateTagFilter(event, "(story,comment,poll)")}>
                            All
                          </button>
                          <button className="dropDownBtn"
                                  name="searchDropDownValue"
                                  value="Stories"
                                  onClick={(event) =>
                                           updateTagFilter(event, "story")}>
                            Stories
                          </button>
                          <button className="dropDownBtn"
                                  name="searchDropDownValue"
                                  value="Comments" onClick={(event) =>
                                                            updateTagFilter(event, "comment")}>
                            Comments
                          </button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <span>by</span>
            <button
              className="mainButton"
              onClick={() =>
                       showMenuHandler("menu2")}>
              {byDropDownValue}
            </button>
            {
                menu2
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                        }}>
                          <button
                            className="dropDownBtn"
                            name="byDropDownValue"
                            value="Popularity"
                            onClick={(event) => updateSortFilter(event, "popularity")}>
                            Popularity
                          </button>
                          <button
                            className="dropDownBtn"
                            name="byDropDownValue"
                            value="Date"
                            onClick={(event) =>
                                     updateSortFilter(event, "date")}>
                            Date
                          </button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
          </div>
          <div>
            <span>for</span>
            <button
              className="mainButton"
              onClick={() => showMenuHandler("menu3")}>
              {forDropDownValue}
            </button>
            {
                menu3 
                    ? (
                        <div className="menu"
                             ref={(element) => {
                                 dropDownHandler(element);
                             }}>
                          <button
                            className="dropDownBtn"
                            name="forDropDownValue"
                            value="All-time"
                            onClick={(event) => updateNumFilter(event, "all-time")}>
                            All-Time
                          </button>
                          <button
                            className="dropDownBtn"
                            name="forDropDownValue"
                            value="Last 24h"
                            onClick={(event) => updateNumFilter(event, "last-24-hours")}>
                            Last 24h
                          </button>
                          <button
                            className="dropDownBtn"
                            name="forDropDownValue"
                            value="Past Week"
                            onClick={(event) => updateNumFilter(event, "past-week")}>
                            Past Week
                          </button>
                          <button
                            className="dropDownBtn"
                            name="forDropDownValue"
                            value="Past Month"
                            onClick={(event) => updateNumFilter(event, "past-month")}>
                            Past Month
                          </button>
                          <button
                            className="dropDownBtn"
                            name="forDropDownValue"
                            value="Past Year"
                            onClick={(event) => updateNumFilter(event, "past-year")}>
                            Past Year
                          </button>
                          
                          {/*
                             
                             <button className="dropDownbtn" onClick={() => customDateRange("custom-range")}/>

                             ** Calender JSX
                          
                          */}
                          
                          {/* 

                             ** On Submiting Dates
                             ** Get The Values Of Inputs
                             ** Pass those values to updateTagFilter handler
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
