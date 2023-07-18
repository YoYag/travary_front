import React from "react";
import { Link } from "react-router-dom";

const Modal = ({
  modalId,
  modalTitle,
  modalContent,
  buttonContent,
  postData,
  linkTo,
}) => {
  return (
    <dialog id={modalId} className="modal">
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg">{modalTitle}</h3>
        <p className="py-4">{modalContent}</p>
        <Link to={linkTo}>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={postData}>
              {buttonContent}
            </button>
          </div>
        </Link>
      </form>
    </dialog>
  );
};

export default Modal;
