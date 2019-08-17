import React from 'react';
import PropTypes from 'prop-types';

/* MAKING the API Call to Rest API From Input Box */
const InputSearch = ({ onChange, value }) => {
    return (
        <div className="input-search-box">
          <input name="query" onChange={onChange} type="text" value={value}/>
        </div>
    );
};

InputSearch.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default InputSearch;

