import React from 'react';
import Jobs from './Jobs';
import Nav from './Nav';
import Plus from './Plus';
import './App.css';
import downArrow from './downArrow.svg';
import arrowSide from './arrowSide.svg';

function App() {
  return (
    <>
      <div className="container">
        <Nav/>
        <div className="body">
          <div className="plusElement">
            <Plus/>
          </div>
          <div className="rightElements">
            <div className="us">
              <h1>WHO WE ARE</h1>
              <div className="arrowPoint">
                  <div className="arrowAndTxt">
                      <div className="arrowContainer">
                          <img className="downArrow" src={downArrow} alt="down arrow"></img>
                      </div>
                      <p className="arrowTxt">Atomic transforms unstructured text into searchable knowledge graphs.</p>
                  </div>
                  <hr className="arrowPointHr"/>
              </div>
              <div className="arrowPoint">
                  <div className="arrowAndTxt">
                      <div className="arrowContainer">
                          <img className="downArrow" src={downArrow} alt="down arrow"></img>
                      </div>
                      <p className="arrowTxt">We are working at the bleeding edge of machine learning, natural language processing and graph theory.</p>
                  </div>
                  <hr className="arrowPointHr"/>
              </div>
              <div className="arrowPoint">
                  <div className="arrowAndTxt">
                      <div className="arrowContainer">
                          <img className="downArrow" src={downArrow} alt="down arrow"></img>
                      </div>
                      <p className="arrowTxt">Our mission is to usher in the next paradigm of general purpose search - to realize the dream of the Semantic Web.</p>
                  </div>
                  <hr className="arrowPointHr"/>
              </div>
              <div className="arrowPoint">
                  <div className="arrowAndTxt">
                      <div className="arrowContainer">
                          <img className="downArrow" src={downArrow} alt="down arrow"></img>
                      </div>
                      <p className="arrowTxt">We are backed by Josh Buckley, Village Global, & some incredible angels.</p>
                  </div>
                  <hr className="arrowPointHr"/>
              </div>
            </div>
            <div id="join">
                <h1>JOIN US</h1>
                <p>If you are a genius with a background in NLP, ML or knowledge graphs we want to meet you.</p>
                <div className="arrowLinkContainer">
                  <a className="arrowLink" href="./Jobs"><p>Founding NLP Engineer</p><img className="arrowLinkImg" src={arrowSide}></img></a>
                </div>
                <br/>
                <div className="arrowLinkContainer">
                  <a className="arrowLink" href="./Jobs"><p>Founding Graph ML Engineer</p><img className="arrowLinkImg" src={arrowSide}></img></a>
                </div>
            </div>
            <div id="contact">
                <h1>CONTACT</h1>
                <div className="arrowLinkContainer">
                  <a className="arrowLink" href="mailto:igor@atomicsearchinc.com"><p>Email</p><img className="arrowLinkImg" src={arrowSide}></img></a>
                </div>
                <br/>
                <div className="arrowLinkContainer">
                  <a className="arrowLink" href="https://twitter.com/atomicsearchinc"><p>Twitter</p><img className="arrowLinkImg" src={arrowSide}></img></a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomBar"></div>
    </>
  );
}

export default App;
