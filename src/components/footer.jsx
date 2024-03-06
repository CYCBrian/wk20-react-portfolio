import GitHubLogo from "../assets/github-142-svgrepo-com.svg";
import LinkedInLogo from '../assets/linkedin-svgrepo-com.svg'

function PortfolioFooter() {
  return (
    <footer>
      <section>
        <a
          href={"https://github.com/CYCBrian"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub Logo" />
        </a>
        <a
          href={"https://www.linkedin.com/in/cycbrian/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn Logo" />
        </a>
      </section>
      {
        "Frantically designed and barely held together by Brian Cheung \u00A9 2024"
      }
    </footer>
  );
}

export default PortfolioFooter;
