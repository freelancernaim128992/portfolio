import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutAll from "./components/AboutPage/AboutAll/AboutAll";
import AllBlogs from "./components/BlogPage/AllBlogs/AllBlogs";
import Home from './components/HomePage/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import AllProjects from "./components/ProjectPage/AllProjects/AllProjects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutAll />
        </Route>
        <Route path="/projects">
          <AllProjects />
        </Route>
        <Route path="/blogs">
          <AllBlogs />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
