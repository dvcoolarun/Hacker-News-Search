import React from "react";
import Select from "react-select";

import { getUpdatedNumericFilterValue } from "./numericFilterUtils"
import { useAppState } from "../app-context";

import {
  tagFilterOption,
  sortFilterOption,
  numericFilterOption,
} from "./tagFilterOption";

const SearchPanel = () => {
  const [tagFilter, setTagFilter] = React.useState(tagFilterOption[0]);
  const [sortFilter, setSortFilter] = React.useState(sortFilterOption[0]);
  const [numericFilter, setNumericFilter] = React.useState(numericFilterOption[0]);

  const { state, dispatch } = useAppState();
  const { nbHits, processingTimeMS, page } = state;

  React.useEffect(() => {
    if (tagFilter !== undefined && tagFilter !== null) {
      dispatch({
        type: "UPDATE_TAG_FILTER",
        payload: {
          tagFilter: tagFilter.value,
        },
      });
    }
    if (sortFilter !== undefined && sortFilter !== null) {
      dispatch({
        type: "UPDATE_SORT_FILTER",
        payload: {
          sortFilter: sortFilter.value
        },
      });
    }
    if (numericFilter !== undefined && numericFilter !== null) {
      const updatedNumericFilter = getUpdatedNumericFilterValue(numericFilter.value);

      dispatch({
        type: "UPDATE_NUM_FILTER",
        payload: {
          numericFilter: updatedNumericFilter
        },
      });
    }
  }, [tagFilter, sortFilter, numericFilter]);

  return (
    <div className="search">
      <div className="search-panel">
        <div className="search-panel-select">
          <span> Search </span>{" "}
          <Select
            options={tagFilterOption}
            onChange={setTagFilter}
            defaultValue={tagFilter}
          />{" "}
        </div>{" "}
        <div className="search-panel-select">
          <span> by </span>{" "}
          <Select
            options={sortFilterOption}
            onChange={setSortFilter}
            defaultValue={sortFilter}
          />{" "}
        </div>{" "}
        <div className="search-panel-select">
          <span>for </span>{" "}
          <Select
            options={numericFilterOption}
            onChange={setNumericFilter}
            defaultValue={numericFilter}
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="search-panel-result">
        {" "}
        {page !== 0 ? (
          <span>
            Page {page}{" "}
            of {nbHits} results({processingTimeMS / 1000} seconds){" "}
          </span>
        ) : (
          <span>
            {" "}
            {nbHits} results({processingTimeMS / 1000} seconds){" "}
          </span>
        )}{" "}
      </div>{" "}
    </div>
  );
};

SearchPanel.propTypes = {};

export default SearchPanel;
