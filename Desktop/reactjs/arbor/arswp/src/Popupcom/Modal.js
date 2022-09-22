import React from "react";
import styles from "./modalstyle.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <button onClick={onClose} className="btn-close" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
