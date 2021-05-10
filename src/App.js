import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import Intro from './pages/Intro';
import Home from './pages';


function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Intro} exact /> */}
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
