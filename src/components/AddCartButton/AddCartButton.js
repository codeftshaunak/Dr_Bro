import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa'
const AddCartButton = () => {
    return (
        <div>
            <button className="home22_addCard_btn add_to_cart flex border-0 items-center" >
                <div className="circle_icon">
                    <FaShoppingBasket />
                </div>
                <h5 className="text-sm font-bold text-uppercase m-0">
                    ADD TO CART
                </h5>
            </button> 
            
        </div>
    );
};

export default AddCartButton;