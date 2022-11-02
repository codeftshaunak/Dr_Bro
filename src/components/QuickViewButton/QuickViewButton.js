import React from 'react';

import { FaRegEye } from 'react-icons/fa'
const QuickViewButton = () => {
    return (
        <button for="quick-view" className=" hover:text-primary duration-500 ">
    <FaRegEye /> 
  </button>
    );
};

export default QuickViewButton;