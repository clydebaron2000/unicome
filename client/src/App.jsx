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

  return (

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
  );
}

export default App;
