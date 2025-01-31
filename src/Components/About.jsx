import { motion } from "framer-motion";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a passionate <span>Web Developer</span> eager to create dynamic and responsive websites. With a strong foundation in <span>HTML, CSS, JavaScript, and React.js</span>, I strive to build engaging and efficient web applications. I love learning new technologies and improving my skills to develop high-quality digital experiences.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
