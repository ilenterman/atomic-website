import '../styles/Nav.css';
import logo from '../assets/logo.svg';

function Nav() {
    return (
      <>
        <nav className="nav">
            <div className="branding">
                <img className="brandingLogo" src={logo} alt="logo" />
                <p className="brandingTxt">ATOMIC SEARCH</p>
            </div>
            <div/>
            <div className="navLinks">
                <a id="twtrLink" className="navLink" href="https://twitter.com/atomicsearchinc">Twitter</a>
                <a id="contactLink" className="navLink" href="mailto:igor@atomicsearchinc.com">Contact</a>
            </div>
            <hr/>
        </nav>
      </>
    );
};

export default Nav;