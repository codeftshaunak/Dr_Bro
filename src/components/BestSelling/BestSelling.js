import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddCartButton from '../AddCartButton/AddCartButton';
import { FaHeart, FaEye, FaShoppingCart, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { BsArrowLeftShort , BsArrowRightShort } from "react-icons/bs";
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
                        <BsArrowLeftShort></BsArrowLeftShort>
                        </div>
                        <div className="swiper_button swiper_button_next" ref={nextRef}>
                        <BsArrowRightShort></BsArrowRightShort>
                            {/* <i class="fa-solid fa-angle-right"></i> */}
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
                                           <WishListButton></WishListButton>
                                           <QuickViewButton></QuickViewButton>
                                           <CartButton className=''></CartButton>
                                        </div>
                                    </div>
                                    <div className='product_meta pl-8'>
                                        <Link to={`/`}> <h4 className='product_name'>{product.product_name}</h4></Link>

                                        <div className="stars">
                                            {product?.average_rating >= 1 ? <AiFillStar className="text-[#ffc107]" /> : <BsStar />}
                                            {product?.average_rating >= 2 ? <AiFillStar className="text-[#ffc107]" /> : <BsStar />}
                                            {product?.average_rating >= 3 ? <AiFillStar className="text-[#ffc107]" /> : <BsStar />}
                                            {product?.average_rating >= 4 ? <AiFillStar className="text-[#ffc107]" /> : <BsStar />}
                                            {product?.average_rating === 5 ? <AiFillStar className="text-[#ffc107]" /> : <BsStar />}
                                            {/* <span className="text-sm font-medium">
                                                ({product.product_reviews.length})
                                            </span> */}
                                        </div>
                                        <div className="product_prise flex items-center gap-2">
                                            {/* <span className="line-through">
                                                {product.discount > 0 &&
                                                    `₹${product.discount + product.book_price}.00`}
                                            </span> */}
                                            <p >₹{product.price}.00</p>
                                        </div>
                                        <AddCartButton />
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