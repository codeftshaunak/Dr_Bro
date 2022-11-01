import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddCartButton from '../AddCartButton/AddCartButton';
import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import CartButton from '../CartButton/CartButton';
import WishListButton from '../WishListButton/WishListButton';
import QuickViewButton from '../QuickViewButton/QuickViewButton';

import { useRef } from 'react';
import { Link } from 'react-router-dom';


const BestSelling = () => {
    const [products, SetProducts] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => SetProducts(data))
    }, [])

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='bg-white section_pacing'>
            <div className='container mx-auto relative'>
                <div className=' flex justify-between items-center'>
                    <h1 className="text-[30px] lg:text-[40px] font-bold text-[#000] section_title">
                        Best Selling
                    </h1>
                    {/* swiper slider */}
                    <div className="swiperSlide_button_group">
                        <div className="swiper_button swiper_button_prev" ref={prevRef}>
                            <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="swiper_button swiper_button_next" ref={nextRef}>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <Swiper breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1500: {
                            slidesPerView: 4,
                        },
                    }}
                        spaceBetween={24}
                        loop={true}
                        navigation={{
                            prevEl: "#prev_slide",
                            nextEl: "#next_slide",
                        }}
                        modules={[Autoplay, Navigation]}
                        autoplay={true}
                        className="mySwiper"
                        style={{ "--swiper-theme-color": "#27AE61" }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        {products?.map((product) =>
                            <SwiperSlide key={product._id}>
                                <div className='product_widget26 mb_30'>
                                    <div className='product_thumb_upper position-relative'>
                                        {product.discount > 0 && <span className='offer_badge'>-{product.discount}% </span>}
                                        <Link
                                            to={`/.... /${product?._id}`}
                                            className="thumb text-center"

                                        >
                                            <img src={product.image} alt="" />
                                        </Link>
                                        <div className="product_action">
                                            <WishListButton _id={product._id} />
                                            <QuickViewButton _id={product._id} />
                                            <CartButton _id={product._id} />
                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>
                        )}

                    </Swiper>

                </div>

            </div>



        </div>
    );
};

export default BestSelling;