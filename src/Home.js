import React from "react";
import HeroSection from "./components/HeroSection";
import HeroImg from "./assets/hero-img.png";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";

const Home = () => {
  const data = {
    welcome_msg: `Welcome to`,
    title: "DR.BRO SHOP",
    image: <img src={HeroImg} alt="heroimg" className="img-style" />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quisquam quos autem accusamus exercitationem neque sapiente.Unde eos reprehenderit nemo.",
    button: "Shop Now",
  };

  return (
    <>
      <HeroSection Mydata={data} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;