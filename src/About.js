import React from "react";
import HeroSection from "./components/HeroSection";
import HeroImg from "./assets/travel.jpg";

const About = () => {
  const data = {
    welcome_msg: `Do You Want Explore The World`,
    title: `With DR. BRO?`,
    image: <img src={HeroImg} alt="heroimg" className="img-style" />,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quisquam quos autem accusamus exercitationem neque sapiente.Unde eos reprehenderit nemo.",
    button: "Explore The World",
  };

  return (
    <>
      <HeroSection Mydata={data} />
    </>
  );
};

export default About;
