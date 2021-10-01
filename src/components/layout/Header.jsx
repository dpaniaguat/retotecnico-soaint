import React from "react";
import { Link } from "react-router-dom";
import { IconMenu } from "../../assets/icons";
import "./sass/Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header--menu">
        {/* <IconMenu /> */}
      </div>
      <Link to="/">
        <figure className="header__logo">
          <img src={process.env.REACT_APP_LOGO_APP} alt="logo principal" />
        </figure>
      </Link>
    </header>
  );
};
