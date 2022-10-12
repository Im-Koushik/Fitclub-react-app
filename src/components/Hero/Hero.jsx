import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero' id='home'>
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header />

        {/* Hero Ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>shape </span>
            <span>your</span>
          </div>

          <div>
            <span>ideal body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter
                start={100}
                end={140}
                delay='4'
                preFix='+'></NumberCounter>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter
                start={800}
                end={978}
                delay='4'
                preFix='+'></NumberCounter>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter
                start={0}
                end={50}
                delay='4'
                preFix='+'></NumberCounter>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button>
          <button className='btn'>
            <Link to='programs' spy={true} smooth={true}>
              Learn More
            </Link>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className='right-h'>
        <button className='btn'>
          <Link to='join-us' spy={true} smooth={true}>
            Join Now
          </Link>
        </button>

        <motion.div
          className='heart-rate'
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}>
          <img src={Heart} alt='' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} alt='' className='hero-image' />
        <motion.img
          src={hero_image_back}
          alt=''
          className='hero-image-back'
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* Calorires */}
        <motion.div
          className='calories'
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}>
          <img src={Calories} alt='' />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
