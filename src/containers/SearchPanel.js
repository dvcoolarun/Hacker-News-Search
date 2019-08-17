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
    showCalenderHandler,
    menu1,
    menu2,
    menu3,
    searchDropDownValue,
    byDropDownValue,
    forDropDownValue,
    customDateRange,
    fromDate,
    toDate,
    onChange,
    nbHits,
    processingTimeMS,
    page
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
                          
                          <button
                            className="dropDownBtn"
                            name="forDropDownValue"
                            value="Custom Range"
                            onClick={(event) => showCalenderHandler(event)}>
                            Custom Range
                          </button>
                        </div>          
                    )
                    : (
                        null
                    )
            }
            {
                showCalender
                    ?(
                        <div className="custom-form">
                          <input name="fromDate"
                                 type="text"
                                 value={fromDate}
                                 onChange={onChange}
                          />
                          <input name="toDate"
                                 type="text"
                                 value={toDate}
                                 onChange={onChange}
                          />
                          <button onClick={() =>
                                           customDateRange()}>
                            Submit
                          </button>
                        </div>
                    )
                    : (
                        null
                    )
            }
          </div>
          <div className="search-panel-result">
            {
                page !== 0
                    ?
                    <span>
                      Page&nbsp;
                      {page} of &nbsp;
                      {nbHits}&nbsp;results
                      ({processingTimeMS/1000}&nbsp;seconds)
                    </span>
                :
                    <span>
                      {nbHits}&nbsp;results
                      ({processingTimeMS/1000}&nbsp;seconds)
                    </span>
            }
          </div>
        </div>
    );
};

SearchPanel.propTypes = {
    showMenuHandler: PropTypes.func.isRequired,
    dropMenuHandler: PropTypes.func,
    updateTagFilter: PropTypes.func.isRequired,
    updateSortFilter: PropTypes.func.isRequired,
    showCalender: PropTypes.bool.isRequired,
    menu1: PropTypes.bool.isRequired,
    menu2: PropTypes.bool.isRequired,
    menu3: PropTypes.bool.isRequired,
    searchDropDownValue: PropTypes.string.isRequired,
    byDropDownValue: PropTypes.string.isRequired,
    forDropDownValue: PropTypes.string.isRequired,
    customDateRange: PropTypes.func.isRequired,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    showCalenderHandler: PropTypes.func.isRequired
};

export default SearchPanel;
