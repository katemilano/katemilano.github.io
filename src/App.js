import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import Intro from './pages/Intro';
import Home from './pages';
import NightsIn from './pages/NightsIn';
import LocationHub from './pages/LocationHub';
import Dumbbells from './pages/Dumbbells';
import Burger from './pages/Burger';
import CodeQuiz from './pages/CodeQuiz';
import Weather from './pages/Weather';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Intro} exact /> */}
        <Route path="/" component={Home} exact />
        <Route path="/nightsin" component={NightsIn} exact />
        <Route path="/locationhub" component={LocationHub} exact />
        <Route path="/dumbellsfordummies" component={Dumbbells} exact />
        <Route path="/burger" component={Burger} exact />
        <Route path="/codequiz" component={CodeQuiz} exact />
        <Route path="/weatherdashboard" component={Weather} exact />

      </Switch>
    </Router>
  );
}

export default App;
