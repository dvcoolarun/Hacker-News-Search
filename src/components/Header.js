import React from "react";
import InputSearch from "../containers/InputSearch";

/* STATELESS HEADER TO SHOWCASE HEADER ITEMS. */
const Header = () => (
  <div className="header">
    <div className="logo-wrapper">
      <img
        src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png"
        alt="logo"
      />
      <span className="logo-name">
        Search
        <br />
        Hacker News
      </span>
    </div>
    <InputSearch />
  </div>
);

export default Header;
