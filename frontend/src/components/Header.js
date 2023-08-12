import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to="/">
      <h2 id="site-name">
        My Budget <span id="pal">पाल</span>
      </h2>
    </Link>
  );
};
export default Header;
