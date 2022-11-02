import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

// banner images 
import img1 from "../../src/assets/home_slide_three_bg_2.jpg"
import img3 from "../../src/assets/slider1.webp"
import img2 from "../../src/assets/home_slide_2_bg.jpg"

// import swiper 
import {Swiper, SwiperSlide} from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import  { Autoplay, Pagination, Navigation } from "swiper";

// slider data
const data = [
  {
    image: img1,
    subtitle: "New Collection",
    title: "Fashionable clothes",
    month: "for trendsetters.",
  },
  {
    image: img2,
    subtitle: "New Arrivals",
    title: "Be Stylish",
    month: "be our customer.",
  },
  {
    image: img3,
    subtitle: "Simply Elegant",
    title: "Choose the best.",
    month: "Choose us.",
  },
];
const HeroSection = () => {
  // const { welcome_msg, title, image, description, button } = data.Mydata;
  return (
    // <Wrapper style={{ backgroundColor: "aliceblue" }}>
    // </Wrapper>

    <div className="hero_Banner">
        <Swiper
        navigation={false}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-auto"
        style={{ "--swiper-theme-color": "#CF2202" }}
        >

        {data.map((bnrData) => 
        <SwiperSlide>
          <div className="banner_single" 
          style={{backgroundImage: `url(${bnrData.image})`,
                backgroundSize: "content",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",}}>
            <div className="container mx-auto">
              <div className="grid">
                <div className="banner_text">
                    <span className="subtitle"
                      data-aos="fade-left"
                      data-aos-delay="100"
                      data-aos-duration="500"
                    >
                      {bnrData.subtitle}
                    </span>
                    <h3 className="slideTitle"
                      data-aos="fade-left"
                      data-aos-delay="150"
                      data-aos-duration="700"
                    >
                      {bnrData.title} <br></br> {bnrData.month}
                    </h3>
                    <h5 
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      className="text-[16px]"
                    >
                      This is perfect to start your shopping shop!
                    </h5>
                    <a
                      href="#"
                      class="theme_btn_white"
                      data-aos="fade-left"
                      data-aos-delay="250"
                      data-aos-duration="1200"
                    >
                      Explore now
                    </a>
                </div>

              </div>
            </div>

          </div>
        </SwiperSlide>
        )}
        </Swiper>
    </div>


  );
};

// const Wrapper = styled.section`
//   padding: 12rem 0;
//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }
//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }
//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;
//     }
//     .intro-data {
//       margin-bottom: 0;
//     }
//   }
//   .hero-section-image {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   figure {
//     position: relative;
//     &::after {
//       content: "";
//       width: 60%;
//       height: 80%;
//       background-color: rgba(81, 56, 238, 0.4);
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//     }
//   }
//   .img-style {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 10rem;
//       display: flex;
//       flex-wrap: wrap;
//       padding: 10px;
//       text-align: center;
//     }
//     figure::after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       /* bottom: 10%; */
//       background-color: rgba(81, 56, 238, 0.4);
//     }
//   }
// `;


export default HeroSection;
