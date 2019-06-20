import React from "react";
import { Route, withRouter } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import HomePage from "../src/components/HomePage";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import Projects from "../src/components/Projects";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <NavBar />
        <div>
          {/* <Route
            render={({ location }) => (
              <div>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/homePage" />}
                />
                <div>
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={1000}
                    >
                  <Switch location={location}>
                  
                  </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              </div>
            )}
          /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contactMe" component={Contact} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
