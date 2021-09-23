import React from "react";

function Modal(props: any) {
  return (
    <div className="modal-overlay" onClick={props.action}>
      <div className="modal-box">
        <h3 className="modal-text">{props.message}</h3>
        <button onClick={props.action} className="modal-button">
          OK
        </button>
      </div>
    </div>
  );
}

export default Modal;
