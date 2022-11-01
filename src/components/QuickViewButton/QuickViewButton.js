import React from 'react';

import { FaRegEye } from 'react-icons/fa'
const QuickViewButton = () => {
    return (
        <label for="quick-view" className=" hover:text-primary duration-500 a">
    <FaRegEye /> 
  </label>
    );
};

export default QuickViewButton;