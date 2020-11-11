import React from 'react';
import Jobs from './Jobs';
import Nav from '../components/Nav';
import Plus from '../components/Plus';
import '../styles/App.css';
import downArrow from '../assets/downArrow.svg';
import arrowSide from '../assets/arrowSide.svg';

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
            <h1 id="aboutW">WHO WE ARE</h1>
            <h2 id="aboutM">ABOUT</h2>

            <div className="arrowPoint">
              <div className="arrowImg">
                <img className="downArrow" src={downArrow} alt="down arrow"></img>
              </div>
              <div className="arrowAndTxt">
                <p className="arrowTxt">Atomic transforms unstructured text into searchable knowledge graphs.</p>
              </div>
            </div>
            <hr className="arrowPointHr"/>

            <div className="arrowPoint">
              <div className="arrowImg">
                <img className="downArrow" src={downArrow} alt="down arrow"></img>
              </div>
              <div className="arrowAndTxt">
                <p className="arrowTxt">We are working at the bleeding edge of machine learning, natural language processing and graph theory.</p>
              </div>
            </div>
            <hr className="arrowPointHr"/>

            <div className="arrowPoint">
              <div className="arrowImg">
                <img className="downArrow" src={downArrow} alt="down arrow"></img>
              </div>
              <div className="arrowAndTxt">
                <p className="arrowTxt">Our mission is to usher in the next paradigm of general purpose search - to realize the dream of the Semantic Web.</p>
              </div>
            </div>
            <hr className="arrowPointHr"/>

            <div className="arrowPoint">
              <div className="arrowImg">
                <img className="downArrow" src={downArrow} alt="down arrow"></img>
              </div>
              <div className="arrowAndTxt">
                <p className="arrowTxt">We are backed by Josh Buckley, Village Global, & some incredible angels.</p>
              </div>
            </div>
            <hr className="arrowPointHr"/>

            <div id="join">
                <h1 id="joinTitle">JOIN US</h1>
                <p>If you are a genius with a background in NLP, ML or knowledge graphs we want to meet you.</p>
                <div className="arrowLinkContainer">
                  <a className="arrowLink" href="./Jobs"><p>Founding NLP Engineer</p>&nbsp;&nbsp;<img className="arrowLinkImg" src={arrowSide}></img></a>
                </div>
                <br/>
                <div className="arrowLinkContainer">
                  <a className="arrowLink" href="./Jobs"><p>Founding Graph ML Engineer</p>&nbsp;&nbsp;<img className="arrowLinkImg" src={arrowSide}></img></a>
                </div>
            </div>
            <div id="jobs">
                <h2>JOBS</h2>
                <div className="arrowLinkContainer">
                  <a className="arrowLink inlineContent" href="mailto:igor@atomicsearchinc.com"><p>Founding Data Engineer</p>&nbsp;&nbsp;<img className="arrowLinkImg inlineContent" src={arrowSide}></img></a>
                </div>
                <br/>
                <div className="arrowLinkContainer">
                  <a className="arrowLink inlineContent" href="https://twitter.com/atomicsearchinc"><p>Founding Machine Learning Engineer</p>&nbsp;&nbsp;<img className="arrowLinkImg inlineContent" src={arrowSide}></img></a>
                </div>
            </div>
            <div id="contact">
                <h2>CONTACT</h2>
                <div className="arrowLinkContainer">
                  <a className="arrowLink inlineContent" href="mailto:igor@atomicsearchinc.com"><p>Email</p>&nbsp;&nbsp;<img className="arrowLinkImg inlineContent" src={arrowSide}></img></a>
                </div>
                <br/>
                <div className="arrowLinkContainer">
                  <a className="arrowLink inlineContent" href="https://twitter.com/atomicsearchinc"><p>Twitter</p>&nbsp;&nbsp;<img className="arrowLinkImg inlineContent" src={arrowSide}></img></a>
                </div>
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
