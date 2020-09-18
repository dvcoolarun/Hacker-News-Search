import React from 'react';
import PropTypes from 'prop-types';
import InputSearch from '../containers/InputSearch';
import { AppContext } from '../containers/App.js';

/* STATELESS HEADER TO SHOWCASE HEADER ITEMS. */
const Header = () => (
    <AppContext.Consumer>
      {({
          onChange,
          value
      }) => (
           <div className="header">
             <div className="logo-wrapper">
               <img alt="" src="https://hn.algolia.com/assets/logo-hn-search.png"/>
               <span className="logo-name">
                 Search
                 <br/>
                 Hacker News
               </span>
             </div>
             <InputSearch onChange={onChange} value={value}/>
           </div>
      )}
    </AppContext.Consumer>
);

Header.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Header;
