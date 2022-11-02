import React from 'react';
import { FaShoppingBasket} from 'react-icons/fa'
const CartButton = () => {
    return (
        <div>
         <button className=" hover:text-primar duration-500 a " >
     <FaShoppingBasket className='text-primary'/> 
  
  </button>   
        </div>
    );
};

export default CartButton;