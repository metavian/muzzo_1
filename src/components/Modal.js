import React from "react";

function Modal({ setModalData, modalData }) {
  const closeModel = () => {
    setModalData({ text: "", title: "", toggle: false, Component: null });
  };
  const { Component } = modalData;
  const dataArray = modalData.text.split("\n");
  return (
    <div
      className={`fixed z-50 inset-0 flex justify-center items-${modalData.align} w-full p-2 md:p-4 overflow-x-hidden overflow-y-auto h-full shadow-md`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
      <div
        className={`relative w-full ${
          modalData.details ? "max-w-2xl" : "max-w-md"
        } m-0 md:m-8 h-fit`}
      >
        {/* <div className={`relative w-full max-w-2 m-0 md:m-8`}> */}
        <div
          className={`relative bg-white rounded-lg shadow  ${
            modalData.details ? "h-[811px]" : ""
          }  overflow-y-scroll no-scrollbar`}
        >
          <div className="flex items-center sticky top-0 bg-white justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-black dark:text-black">
              {modalData.title}
            </h3>
            <button
              onClick={closeModel}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="small-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 space-y-4">
            {dataArray.map((data, i) => {
              return (
                <p
                  dangerouslySetInnerHTML={{ __html: data }}
                  key={i}
                  className="text-lg leading-relaxed text-black dark:text-black"
                ></p>
              );
            })}
          </div>

          {Component && <Component />}

          {/* <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className="text-white bg-primary_blue hover:bg-primary_purple focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              I accept
            </button>
            <button
              onClick={closeModel}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            >
              Decline
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
