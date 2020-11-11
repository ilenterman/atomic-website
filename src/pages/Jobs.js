import React from 'react';
import Nav from '../components/Nav';
import '../styles/App.css';
import backArrow from '../assets/arrowBack.svg';
import downArrow from '../assets/downArrow.svg';

function App() {
  return (
    <>
      <div className="container">
        <Nav/>
        <a className="jobsBackBtn" href="/"><img src={backArrow}></img>&nbsp;Back</a>
        <div className="jobsDesc">
            <h1 id="jobsTitle">Founding Graph ML Engineer</h1>
            <h2 className="jobsSubTitles">WHO WE ARE</h2>
            <p>We are on a mission to reinvent the way information is structured and served online, to make it easier than it ever has been for individuals to search, discover and learn.</p>
            <h2 className="jobsSubTitles">WHO WE NEED</h2>

            <div className="arrowPoint">
              <div className="arrowImg">
                <img className="downArrow" src={downArrow} alt="down arrow"></img>
              </div>
              <div className="arrowAndTxt">
                <p className="arrowTxt">We believe that the current paradigm of search (Google) is quite terrible and outdated - namely:</p>
                <br></br>
                <p>&nbsp;&nbsp;+ It doesn't answer your questions, rather, it points you to a list which you have to select from, and that list...</p>
                <br></br>
                <p>&nbsp;&nbsp;+ Surfaces resources that are rarely useful (SEO'd to hell)</p>
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

            <h2 className="jobsSubTitles">SKILLS</h2>

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
                <p className="arrowTxt">Our mission is to usher in the next paradigm of general purpose search - to realize the dream of the Semantic Web.</p>
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

            <h2 className="jobsSubTitles">WHAT YOU'LL BE DOING</h2>

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
                <p className="arrowTxt">Our mission is to usher in the next paradigm of general purpose search - to realize the dream of the Semantic Web.</p>
              </div>
            </div>
            <hr className="arrowPointHr"/>

            <h2 className="jobsSubTitles">INTERESTED?</h2>
            <p>Contact <a href="mailto:igor@atomicsearchinc.com">igor@atomicsearchinc.com</a> with:</p>
            <br></br>
            <p>&nbsp;&nbsp;+ Resume</p>
            <br></br>
            <p>&nbsp;&nbsp;+ What excites you about Atomic?</p>
            <br></br>
            <p>&nbsp;&nbsp;+ Why do you think you are the right person for this role?</p>
            <br></br>
            <p>&nbsp;&nbsp;+ What personal and professional accomplishments are you most proud of?</p>
        </div>
      </div>
      <div className="bottomBar"></div>
    </>
  );
}

export default App;
