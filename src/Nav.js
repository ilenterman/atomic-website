import './Nav.css';
import logo from './logo.svg';

function Nav() {
    return (
      <>
        <nav className="nav">
          <div className="branding">
            <img className="brandingLogo" src={logo} alt="logo" />
            <h4 className="brandingTxt">Atomic Search</h4>
          </div>
          <div className="navLinks">
            <a className="navLink" href="">Twitter</a>
            <a className="navLink" href="">Contact</a>
          </div>
          <hr/>
        </nav>
      </>
    );
};

export default Nav;