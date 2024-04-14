import React from 'react';

const DynamicButton = ({ text, color, onClick }) => {
  const buttonClasses = `bg-${color}-500 hover:bg-${color}-600 text-sm text-gray-700 hover:bg-gray-50 border border-gray-300 px-1 py-[4px]`;

  return (
    <button className={buttonClasses} onClick={onClick } >
      {text}
    </button>
  );
};

export default DynamicButton;
