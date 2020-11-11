import '../styles/App.css';
import icon from '../assets/errorPageIcon.svg';

function App() {
  return (
    <>
      <div className="container">
        <div id="errorElements">
          <img id="errorIcon" src={icon}></img>
          <h1>Error 404</h1>
          <p>Sorry, but the page you were looking for could not be found.</p>
        </div>
      </div>
    </>
  );
}

export default App;