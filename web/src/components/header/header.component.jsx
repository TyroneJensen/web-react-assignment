import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/users/current-user.context";

import "./header.styles.scss";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        &CruBrew
      </Link>
      <div className="options">
        <Link className="option" to="/brewersrecipes">
          Recipes
        </Link>
        {currentUser.id ? (
          <Link className="option" to="/createrecipe">
            Create Recipe
          </Link>
        ) : (
          <Link className="option" to="/createbrewer">
            Create Brewer
          </Link>
        )}
        {currentUser.id && (
          <Link className="option" to="/brewersrecipes/:profileId">
            My Profile
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
