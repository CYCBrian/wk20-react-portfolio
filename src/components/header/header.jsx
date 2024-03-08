import Navigation from "../navigation/navigation";

function PortfolioHeader() {
  return (
    <header>
      <section className="header-container">
        <h2 className="header-h2">Opps! All Errors!</h2>
        <h1 className="header-name">Brian Cheung</h1>
        <h2 className="header-h2">Full Stack Web Developer</h2>
      </section>
      <section className="header-nav">
        <Navigation />
      </section>
    </header>
  );
}

export default PortfolioHeader;
