import React from 'react';
import banner from "../../assets/mb1.webp"
const Banner = () => {
    return (
        <div className='container bg-[#C85A50] shadow-lg  rounded-lg
        ' >
            <div className='flex items-center justify-around  my-28'>  
            <div >
                <h2 className='text-white'>GetExtra</h2>
                <h1 className='text-white'>Sale -25%</h1>
                <h2 className='text-white'>ON ORDER OVER</h2>
            </div>
            <div className=''>
                <img src={banner} width="450" alt="banner"/>
            </div>
            </div>  
        </div>
    );
};

export default Banner;