/* eslint-disable react/no-unescaped-entities */
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// Import PDF worker script
// import { pdfjs } from 'pdfjs-dist/build/pdf';

//commented out code is for a functionality to view the resume on the site.
//have not been able to implement properly so shelved for now
// but want to keep for future attempts
import { useState } from "react";
import { useEffect } from "react";
import ResumeFile from "../../assets/resume/Resume_BrianChakYinCheung.pdf";
import Css3Logo from "../../assets/logos/css-3-svgrepo-com.svg";
import Html5Logo from "../../assets/logos/html-5-logo-svgrepo-com.svg";
import JavascriptLogo from "../../assets/logos/javascript-svgrepo-com.svg";
import JQueryLogo from "../../assets/logos/jquery-svgrepo-com (1).svg";
import ExpressLogo from "../../assets/logos/express-svgrepo-com.svg";
import GraphqlLogo from "../../assets/logos/graphql-svgrepo-com.svg";
import MongoDbLogo from "../../assets/logos/mongo-svgrepo-com.svg";
import MySqlLogo from "../../assets/logos/mysql-svgrepo-com.svg";
import NodeJsLogo from "../../assets/logos/nodejs-icon-svgrepo-com.svg";
import SequelizeLogo from "../../assets/logos/sequelize-svgrepo-com.svg";
import GitLogo from "../../assets/logos/git-svgrepo-com.svg";
import HandleBarLogo from "../../assets/logos/handlebars-svgrepo-com.svg";
import ReactLogo from "../../assets/logos/react-svgrepo-com.svg";
import "./resume.css";

const Resume = () => {
  //   // Set workerSrc property of GlobalWorkerOptions
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  const [isVisible, setIsVisable] = useState(false)
  useEffect(() =>{
      setIsVisable(true)
    }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeFile;
    link.download = "Resume_BrianChakYinCheung.pdf";
    link.click();
  };
  return (
    <section className={`resume-container ${isVisible ? 'visible' : ''}`}>
      <section className="title-container">
        <h2 className="competency-title">Things I'm sort of competent at:</h2>
      </section>
      <section className="competency-container">
        <section className="logo-container">
          <img className="competency-logo" src={Css3Logo} alt="Css 3 Logo" />
          <img className="competency-logo" src={Html5Logo} alt="Html 5 Logo" />
          <img className="competency-logo" src={JavascriptLogo} alt="Javascript Logo" />
          <img className="competency-logo" src={JQueryLogo} alt="JQuery Logo" />
          <img className="competency-logo" src={NodeJsLogo} alt="NodeJs Logo" />
        </section>
        <section className="logo-container">
          <img className="competency-logo" src={ExpressLogo} alt="Express Logo" />
          <img className="competency-logo" src={SequelizeLogo} alt="Sequelize logo" />
          <img className="competency-logo" src={GraphqlLogo} alt="Graphql Logo" />
          <img className="competency-logo" src={MongoDbLogo} alt="MongoDb Logo" />
        </section>
        <section className="logo-container">
          <img className="competency-logo" src={MySqlLogo} alt="MySql Logo" />
          <img className="competency-logo" src={GitLogo} alt="Git Logo" />
          <img className="competency-logo" src={HandleBarLogo} alt="Handlebar Logo" />
          <img className="competency-logo" src={ReactLogo} alt="React Logo" />
        </section>
      </section>
      <section className="download-container">
        <button className="download-resume" onClick={handleDownload}>
          {" "}
          Download my Resume Here!
        </button>
      </section>
    </section>
  );

  // return (
  //   <div>
  //     <h2>Download My Resume</h2>
  //     {/* <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
  //       <div style={{ height: '500px' }}>
  //         <Viewer file='/Resume-BrianCheung.pdf' />
  //       </div>
  //     </Worker> */}
  //     <button href='../assets/Resume-BrianCheung.pdf' download>Download Resume</button>
  //   </div>
  // );
};

export default Resume;
