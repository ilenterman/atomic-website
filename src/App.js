import './App.css';
import logo from './logo.svg';
import plusElement from './plusElement.svg';

function App() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="branding">
            <img className="brandingLogo" src={logo} alt="logo" />
            <h4 className="brandingTxt">Atomic Search</h4>
          </div>
          <div className="navLinks">
            <a className="navLink" href="">Twitter</a>
            <a className="navLink" href="">Contact</a>
          </div>
          <hr/>
        </nav>
        <div className="body">
          <div className="plusElement">
            <img id="plusElement" src={plusElement}></img>
          </div>
          <div className="rightElements">
            <div id="us" className="">
              <h2>Who we are</h2>

            </div>
            <div id="join">
              <h2>Join us</h2>

            </div>
          </div>
        </div>
      </div>
      <div className="bottomBar"></div>
    </>
  );
}

export default App;
