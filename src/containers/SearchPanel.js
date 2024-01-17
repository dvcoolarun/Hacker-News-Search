import React from "react";
import Select from "react-select";

import { useAppState } from "../app-context";

import {
  tagFilterOption,
  sortFilterOption,
  numericFilterOption,
} from "./tagFilterOption";

/* MAKING API CALLS BASED ON THE SEARCH PANEL ITEM CLICK */
const SearchPanel = () => {
  const [tagFilter, setTagFilter] = React.useState("");
  const [sortFilter, setSortFilter] = React.useState("");
  const [numericFilter, setNumericFilter] = React.useState("");

  const { state, dispatch } = useAppState();
  const { nbHits, processingTimeMS, page } = state;

  React.useEffect(() => {
    if (tagFilter) {
      dispatch({
        type: "UPDATE_TAG_FILTER",
        payload: {
          tagFilter: tagFilter,
        },
      });
    } else if (sortFilter) {
      dispatch({
        type: "UPDATE_SORT_FILTER",
        payload: {
          sortFilter: sortFilter,
        },
      });
    } else if (numericFilter) {
      dispatch({
        type: "UPDATE_NUM_FILTER",
        payload: {
          numericFilter: numericFilter,
        },
      });
    }
  }, [tagFilter, sortFilter, numericFilter]);

  return (
    <div className="search">
      <div className="search-panel">
        <div className="search-panel-select">
          <span>Search</span>
          <Select
            options={tagFilterOption}
            onChange={setTagFilter}
            defaultValue={tagFilter}
          />
        </div>
        <div className="search-panel-select">
          <span>by</span>
          <Select
            options={sortFilterOption}
            onChange={setSortFilter}
            defaultValue={sortFilter}
          />
        </div>
        <div className="search-panel-select">
          <span>for</span>
          <Select
            options={numericFilterOption}
            onChange={setNumericFilter}
            defaultValue={numericFilter}
          />
        </div>
      </div>
      <div className="search-panel-result">
        {page !== 0 ? (
          <span>
            Page{" "}
            {page} of {" "}
            {nbHits}{" "}results ({processingTimeMS / 1000}{" "}seconds)
          </span>
        ) : (
          <span>
            {nbHits}{" "}results ({processingTimeMS / 1000}{" "}seconds)
          </span>
        )}
      </div>
    </div>
  );
};

SearchPanel.propTypes = {};

export default SearchPanel;
