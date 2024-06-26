import React from 'react';

const Modal = ({ isOpen, onClose,data, children }) => {
  
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-2xl shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{data}</p>
            <button
              className=" color-gray-200"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="modal-body overflow-y-scrol ">{children}</div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;