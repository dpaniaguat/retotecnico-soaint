import React from "react";
import { IconClose } from "../../assets/icons";
import "./sass/Modal.scss";

export const Modal = ({ show = false, size = "small" }) => {
  return (
    <div className={`modal-main ${show ? "show" : ""}`}>
      <div className={`modal-main__content ${show ? "show" : ""} ${size}`}>
        <div className="modal-header">
          <span>Título modal</span>
          <IconClose />
        </div>
        <div className="modal-body">modal-body!</div>
        <div className="modal-footer">modal-footer</div>
      </div>
    </div>
  );
};
