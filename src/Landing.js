import Nav from './Nav';

import './App.css';
import logo from './logo.svg';
import plusElement from './plusElement.svg';
import downArrow from './downArrow.svg';

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

              <div className="arrowPoint">
                <img className="downArrow" src={downArrow}></img>
                <p className="arrowTxt">Atomic transforms unstructured text into searchable knowledge graphs.</p>
              </div>

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
