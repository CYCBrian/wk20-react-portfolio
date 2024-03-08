/* eslint-disable react/no-unescaped-entities */
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// Import PDF worker script
// import { pdfjs } from 'pdfjs-dist/build/pdf';

import ResumeFile from "../assets/Resume-BrianCheung.pdf";
import Css3Logo from '../assets/css3-01-svgrepo-com.svg'
import Html5Logo from '../assets/html-5-logo-svgrepo-com.svg'
import JavascriptLogo from '../assets/javascript-155-svgrepo-com.svg'


const Resume = () => {
  //   // Set workerSrc property of GlobalWorkerOptions
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumeFile;
    link.download = "Resume-BrianCheung.pdf";
    link.click();
  };
  return (
    <section>
      <section>
        <section>
          <p>Things I'm sort of competent at:</p>
        </section>
        <section>
          <img className="competency-logos" src={Css3Logo} alt="Css 3 Logo" />
          <img className="competency-logos" src={Html5Logo} alt="Html 5 Logo" />
          <img className="competency-logos" src={JavascriptLogo} alt="Jacascript Logo" />
        </section>
        <section>{/* Backend */}</section>
        <section>{/* Other */}</section>
      </section>
      <section>
        <button onClick={handleDownload}> Download my Resume Here!</button>
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
