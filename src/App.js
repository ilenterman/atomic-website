import './App.css';
import logo from './logo.svg';
import plusElement from './plusElement.svg';

function App() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div>
            <img src={logo} alt="logo" />
            <h4>Atomic Search</h4>
          </div>
          <div>
            <a href="">Twitter</a>
            <a href="">Contact</a>
          </div>
          <hr/>
        </nav>
        <div className="body">
          <div className="plusElement">
            <img id="plusElement" src={plusElement}></img>
          </div>
          <div className="right elements">
            <div id="us">
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
