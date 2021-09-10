import {lazy, Suspense} from "react";
import {BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import "./css/bootstrap.css";
import './css/app.css';
import Navbar from "./components/navbar";
const Home = lazy(_=>import('./pages/home'))
const About = lazy(_=>import('./pages/about'))
function App() {
if (false)
  return (
    <>
      <h1>hi1</h1>
      <h2>hi2</h2>
      <h3>hi3</h3>
      <h4>hi4</h4>
      <h5>hi5</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, velit? Cumque voluptatum beatae, saepe ducimus pariatur laboriosam recusandae exercitationem corporis!
      </p>
    </>)
  return(
    <Router>
      <Navbar/>
      <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/services" exact component={About}/>
              <Route component={Home}/>
            </Switch>
          </Suspense>
    </Router>
  )
}

export default App;
