import './Nav.css';
import logo from './logo.svg';

function Nav() {
    return (
      <>
        <nav className="nav">
          <div className="navElements">
            <div className="branding">
                <img className="brandingLogo" src={logo} alt="logo" />
                <h3 className="brandingTxt">Atomic Search</h3>
            </div>
            <div className="navLinks">
                <a id="twtrLink" className="navLink" href="https://twitter.com/atomicsearchinc">Twitter</a>
                <a id="contactLink" className="navLink" href="mailto:igor@atomicsearchinc.com">Contact</a>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Nav;