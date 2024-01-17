import React from 'react';
import PropTypes from 'prop-types';
import { useAppState } from "../app-context";

/* MAKING the API Call to Rest API From Input Box */
const InputSearch = () => {
    const { state, dispatch } = useAppState();

    const handleOnChange = (event) => {
        dispatch({ type: "UPDATE_QUERY", payload: event.target.value });
    };

    return (
        <div className="input-search-box">
          <input name="query" onChange={handleOnChange} type="text" value={state.query} placeholder='Search stories by title, url or author'/>
        </div>
    );
};


export default InputSearch;

