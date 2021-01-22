import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Trial from './components/Trial';
import Game from "./components/Game";
import AboutUs from "./components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormDetails from "./components/Form";
const App = () => {
    return (
        <Router>
            <div className="container-fluid">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav list">
                <li className="nav-item li1 active">
                <Link to="/Game">Game</Link>
                </li>
                <li className="nav-item li2">
                <Link to="/Trial">Trial</Link>
                </li>
                <li className="nav-item li3">
                <Link to="/About">About</Link>
                </li>
                <li className="nav-item li4">
                <Link to="/Form">Form</Link>
                </li>
            </ul>
            </nav>
            </div>
            
            {/* <div className= "container-fluid">
                <nav className="navbar">
                    <ul>
                        <li id="gamelink">
                            <Link to="/Game">Game</Link>
                        </li>
                        <li id="triallink">
                            <Link to="/Trial">Trial</Link>
                        </li>
                        <li id="aboutlink">
                            <Link to="/About">About</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
            <Switch>
                <Route path="/Game" component={Game}/>
                <Route path="/Trial" component={Trial}/>
                <Route path="/About" component={AboutUs}/>
                <Route path="/Form" component={FormDetails}/>
            </Switch>
            
        </Router>
      );
}
export default App;