import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './Landing';
import Jobs from './Jobs';
import Error from './Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/jobs" exact>
            <Jobs />
        </Route>
        <Route>
            <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
