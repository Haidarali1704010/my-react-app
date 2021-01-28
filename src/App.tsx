import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Trial from "./components/Trial";
import Game from "./components/Game";
import AboutUs from "./components/About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormDetails from "./components/Form";
import Boots from "./components/BootComp";
import BootsNew from "./components/BootCompNew";
import FormikDemo from "./components/FormikDemo";
import ReduxDemo from "./components/ReduxDemo";
import { Provider } from "react-redux";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
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
              <li className="nav-item li5">
                <Link to="/BootComp">Bootstrap</Link>
              </li>
              <li className="nav-item li6">
                <Link to="/BootCompNew">BootstrapNew</Link>
              </li>
              <li className="nav-item li7">
                <Link to="/FormikDemo">FormikDemo</Link>
              </li>
              <li className="nav-item li8">
                <Link to="/ReduxDemo">ReduxDemo</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/Game" component={Game} />
          <Route path="/Trial" component={Trial} />
          <Route path="/About" component={AboutUs} />
          <Route path="/Form" component={FormDetails} />
          <Route path="/BootComp" component={Boots} />
          <Route path="/BootCompNew" component={BootsNew} />
          <Route path="/FormikDemo" component={FormikDemo} />
          <Route path="/ReduxDemo" component={ReduxDemo} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
