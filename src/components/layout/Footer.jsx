import React from "react";
import { footerData } from "../../utils/footerData";
import "./sass/Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_elements">
        {footerData.map((item, i) => (
          <div className="footer__element" key={i}>
            <h3>{item.menu}</h3>
            {item.items.map((option,j) => (
              <ul className="footer__element--item" key={j}>
                <i>{option.icono}</i>
                <a href={option.href}>
                  <span>{option.nombre}</span>
                </a>
              </ul>
            ))}
          </div>
        ))}

        <div className="footer__element">
          <figure>
            <img
              src="https://soaint.com/wp-content/uploads/2021/04/Logo-Soaint.svg"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="footer__reserved">
        <span>Darwin Paniagua Tasayco © 2021 - Todos los Derechos Reservados</span>
      </div>
    </footer>
  );
};
