import GitHubLogo from "../../assets/github-142-svgrepo-com.svg";
import LinkedInLogo from '../../assets/linkedin-svgrepo-com.svg'
import "./footer.css"

function PortfolioFooter() {
  return (
    <footer>
      <section className="footer-links">
        <a
          className="footer-link"
          href={"https://github.com/CYCBrian"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon" src={GitHubLogo} alt="GitHub Logo" />
        </a>
        <a
          className="footer-link"
          href={"https://www.linkedin.com/in/cycbrian/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-icon" src={LinkedInLogo} alt="LinkedIn Logo" />
        </a>
      </section>
      <p className="footer-message">
      {
        "Frantically designed and barely held together by Brian Cheung \u00A9 2024"
      }
      </p>
    </footer>
  );
}

export default PortfolioFooter;
