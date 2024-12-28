import React, { useState } from 'react';

const Toast = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'text-green-400 bg-green-100 dark:bg-green-600 dark:text-green-200';
      case 'danger':
        return 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200';
      case 'warning':
        return 'text-yellow-400 bg-yellow-100 dark:bg-yellow-500 dark:text-yellow-200';
      default:
        return '';
    }
  };

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        );
      case 'danger':
        return (
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10l-2.293-2.293a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2h-.001a1,1,0,0,1,0,2Zm-.001-4V6a1,1,0,0,1,2,0v5Z" />
          </svg>
        );
      default:
        return null;
    }
    };

    if (!isVisible) return null;

    return (
      <div className="fixed top-4 left-50 transform -translate-x-50 z-50 flex justify-center items-center w-full">
        <div className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${getToastStyles()}`} role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
            {renderIcon()}
          </div>
          <div className="ms-3 text-sm font-normal">{message}</div>
          <button
            type="button"
            className="ms-auto -mx-1 -my-1 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
            onClick={() => setIsVisible(false)}
          >
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -2 -14 -14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 -14 -6 -6m6 -6 -6 -6m6 -6 -6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6M7 -7l6 -6"/>
            </svg>
          </button>
        </div>
      </div>
    );
};

export default Toast;
