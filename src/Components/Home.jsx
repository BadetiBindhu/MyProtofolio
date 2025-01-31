import React from "react";
import { motion } from "framer-motion";
import {useState} from "react";
import computer1 from "../assets/laptop.png";
import "./home.css";

const Home = (props) => {
  const {name,title}=props;
  
  return (
    <div className="home-container">
      {/* Background Effect */}
    
      {/* Content */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="name"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="role"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
         {title}
        </motion.p>
      </motion.div>
    
      <motion.div
        className="image-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <img src={computer1} alt="Computer" className="computer-img" />
      </motion.div>
    </div>
  );
}

export default Home;
