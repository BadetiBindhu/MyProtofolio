import React from "react";
import propTypes from "prop-types";
import emaillogo from "../assets/email.jpg";
import githublogo from "../assets/github.webp";
import instalogo from "../assets/instagram.jpg";
import linkedInlogo from "../assets/linkedIn.png";
import twitterlogo from "../assets/twitter.png";
import youtubelogo from "../assets/youtube.png";
import "./contact.css";
const Contact = (props) => {
    const {
        email,
        gitHub,
        instagram,
        linkedIn,
        medium,
        twitter,
        youtube,

    } = props;
    return (
        <>
            <div className="footer">
                <div className="iconsDiv">
                    {email && (
                        <a href={`mailto:${email}`}>
                            <img src={emaillogo} alt="email" className="socialIcons" />
                        </a>
                    )}
                    {gitHub && (
                        <a href={`https://github.com/${gitHub}`} target="_blank">
                            <img src={githublogo} alt="github" className="socialIcons" />
                        </a>
                    )}
                    {instagram && (
                        <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                            <img src={instalogo} alt="Instagram" className="socialIcons" />
                        </a>
                    )}
                    {linkedIn && (
                        <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer">
                            <img src={linkedInlogo} alt="LinkedIn" className="socialIcons" />
                        </a>
                    )}
                    {youtube && (
                        <a href={`https://www.youtube.com/${youtube}`} target="_blank" rel="noopener noreferrer">
                            <img src={youtubelogo} alt="YouTube" className="socialIcons" />
                        </a>
                    )}
                    {twitter && (
                        <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                            <img src={twitterlogo} alt="Twitter" className="socialIcons" />
                        </a>
                    )}
                </div>
            </div>
        </>

    )
}
export default Contact;