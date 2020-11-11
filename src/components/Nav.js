import '../styles/Nav.css';
import logo from '../assets/logo.svg';

function Nav() {
    return (
      <>
        <nav className="nav">
          <div className="brandAndLinks">
            <div className="branding">
              <img className="brandingLogo" src={logo} alt="logo" />
              <h1 className="brandingTxt">ATOMIC SEARCH</h1>
              <div className="navLinks">
                <a id="twtrLink" className="navLink" href="https://twitter.com/atomicsearchinc">Twitter</a>
                <a id="contactLink" className="navLink" href="mailto:igor@atomicsearchinc.com">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <hr/>
      </>
    );
};

export default Nav;