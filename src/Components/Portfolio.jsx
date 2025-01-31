import { useState } from "react";
import { motion } from "framer-motion";
import krisapp from "../assets/krisapp.png";
import protapp from "../assets/web-developer-portfolio.png";
import student from "../assets/student.png";
import "./portfolio.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A stylish personal portfolio built using React and animations with responsive to Desktop,Tablet,Mobile.Here,I mainly concentrated on Framer Motion-is a React library for animations and gestures",
    link:"https://www.protofolio.com",
    image:protapp,
  },
  {
    title: "Student Table",
    description:"A Student Table with Add,Delete,Edit,View functionalities built using TypeScript and Firestore Database(here just concentarted on functionalities only).Valid Credential email:admin@123.com ,password:admin@123",
    link:"https://assignment-two-inky.vercel.app/",
    image: student,
  },
  {
    title: "E-Commerce Website (Kris)",
    description: "Kris App is built using Nextjs(File-Based Routing) and TailwindCss.Kris-App have Admin and Employee sections,with Employee's Employeemanagement,LeaveManagement,PerformanceManagement.",
    link:"https://www.kri.com",
    image:krisapp,
  },
];

function Portfolio() {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div className="portfolio-container">
      <div><h1>Portfolio</h1></div>

    <div className="portdiv">
      <motion.div
        className="project-image"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        key={projects[index].image}
      >
        <img src={projects[index].image} alt={projects[index].title} />
      </motion.div>
      
      <motion.div
        className="project-info"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2}}
        key={projects[index].title}
      >
        <h2>{projects[index].title}</h2>
        <p>{projects[index].description}</p>
        <div className="btndiv"><a href={`${projects[index].link}`} className="view">View project</a>
        <button onClick={nextProject} className="next-btn">Next</button></div>
      </motion.div>
    </div>
    </div>
  );
}

export default Portfolio;
