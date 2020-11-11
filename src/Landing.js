import Nav from './Nav';

import './App.css';
import logo from './logo.svg';
import plusElement from './plusElement.svg';

function App() {
  return (
    <>
      <div className="container">
        <Nav/>
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
