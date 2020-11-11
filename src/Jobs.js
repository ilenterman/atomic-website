import React from 'react';
import Nav from './Nav';
import './App.css';
import downArrow from './downArrow.svg';

function App() {
  return (
    <>
      <div className="container">
        <Nav/>
        <a className="jobsBackBtn" href="/">Back</a>
        <div className="jobsDesc">
            <h1>Founding Graph ML Engineer</h1>
            <h2>WHO WE ARE</h2>
            <p>We are on a mission to reinvent the way information is structured and served online, to make it easier than it ever has been for individuals to search, discover and learn.</p>
            <h2>WHO WE NEED</h2>
            <div className="arrowPoint">
                <div className="arrowAndTxt">
                    <div className="arrowContainer">
                        <img className="downArrow" src={downArrow} alt="down arrow"></img>
                    </div>
                    <p className="arrowTxt">We believe that the current paradigm of search (Google) is quite terrible and outdated - namely:
                        <br/>
                        + It doesn't answer your questions, rather, it points you to a list which you       
                        have to select from, and that list...
                        <br/>
                        + Surfaces resources that are rarely useful (SEO'd to hell)
                    </p>
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
            <h2>SKILLS</h2>
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
            <h2>WHAT YOU'LL BE DOING</h2>
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
            <h2>INTERESTED?</h2>
            <p>Contact <a href="mailto:igor@atomicsearchinc.com">igor@atomicsearchinc.com</a> with:</p>
            <p>&nbsp;&nbsp;+ Resume</p>
            <p>&nbsp;&nbsp;+ What excites you about Atomic?</p>
            <p>&nbsp;&nbsp;+ Why do you think you are the right person for this role?</p>
            <p>&nbsp;&nbsp;+ What personal and professional accomplishments are you most proud of?</p>
        </div>
      </div>
      <div className="bottomBar"></div>
    </>
  );
}

export default App;
