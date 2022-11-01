import React from "react";

// Banner Images
import img1 from "../assets/images/slider-1.png";
import img2 from "../assets/images/slider-2.png";
import img3 from "../assets/images/slider-3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "./Button/Button";
import styled from "styled-components";

const data = [
  {
    image: img2,
    subtitle: "Upto 50% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
  {
    image: img1,
    subtitle: "Upto 50% off on BookSelf product",
    title: "BookSelf is your Curious",
    month: "February",
  },
  {
    image: img3,
    subtitle: "Upto 20% off on BookSelf product",
    title: "Featured Book of the ",
    month: "February",
  },
];

const Banner = () => {
  return (
    <Wrapper>
      <div className="hero__Banner">
        <Swiper
          navigation={false}
          loop={true}
          autoplay={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper my-auto"
          style={{ "--swiper-theme-color": "#27AE61" }}
        >
          {data.map((bnrData) => (
            <SwiperSlide>
              <div
                class="banner_single"
                style={{
                  backgroundImage: `url(${bnrData.image})`,
                  backgroundSize: "content",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div class="mx-auto">
                  <div class="banner__all__text">
                    <div class="banner__text">
                      <span
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="500"
                      >
                        {bnrData.subtitle}
                      </span>
                      <h3
                        data-aos="fade-left"
                        data-aos-delay="150"
                        data-aos-duration="700"
                      >
                        {bnrData.title} of {bnrData.month}
                      </h3>
                      <h5
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                      >
                        This is perfect to start your very own bookstore!
                      </h5>
                      <Button data="Explore" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero__Banner {
    .banner_single {
      height: 450px;
    }

    .banner__all__text {
      display: grid;
      align-items: center;
      align-content: center;
      height: 450px;
      padding-left: 20px;
      width: 80%;

      span {
        font-size: 14px;
        color: #fff;
      }

      h3 {
        font-size: 45px;
        color: #fff;
        font-weight: 600;
      }

      h5 {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  @media only screen and (max-width: 768px) {
  }
`;

export default Banner;
