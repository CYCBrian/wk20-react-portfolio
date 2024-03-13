import './app.css';
import PortfolioHeader from './components/header/header';
import PortfolioFooter from './components/footer/footer';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <PortfolioHeader/>
      <main>
        <Outlet/>
      </main>
      <PortfolioFooter/>
    </div>
  );
}

export default App
