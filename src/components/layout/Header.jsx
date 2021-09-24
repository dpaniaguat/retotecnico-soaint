import React from "react";
import { Link } from "react-router-dom";
import "./sass/Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link exact to="/home">
        <figure className="header__logo">
          <img
            src="https://soaint.com/wp-content/uploads/2021/04/Logo-Soaint.svg"
            alt=""
          />
        </figure>
      </Link>
    </header>
  );
};
