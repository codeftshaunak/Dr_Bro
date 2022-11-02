import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
const WishListButton = () => {
    return (
        <div>
            <button className="hover:text-primary duration-500 a">
        <FaRegHeart className='text-primary '/> 
      
    </button>
        </div>
    );
};

export default WishListButton;