import React from 'react';
import InputSearch from 'InputSearch';

/* STATELESS HEADER TO SHOWCASE HEADER ITEMS. */
const Header = ({ }) => {
    return (
        <div className="header">
          <div className="logo-wrapper">
            <img alt="" src="https://hn.algolia.com/assets/logo-hn-search.png"/>
            <div className="logo-name">
              Search
              <br/>
              Hacker News
            </div>
          </div>
          <InputSearch/>
          <div className="powered-by">
            <img alt="" src="https://d3nb9u6x572n0.cloudfront.net/assets/algolia-logo-white-65086ed3930483340981cc7aaab1be051e38bc091406fd806d0ad05640c1bc28.svg"/>
          </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;
