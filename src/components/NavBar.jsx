import { NavLink } from "react-router-dom";
import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header
            transparent
            title="Michael Chang's Portfolio"
            style={{ color: "white", textShadow: "2px 2px black" }}
          >
            <Navigation>
              <NavLink to="/">Home Page</NavLink>
              <NavLink to="./projects">Projects</NavLink>
              <NavLink to="./contactMe">Contact Me</NavLink>
              <NavLink to="./resume">My Resume</NavLink>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <NavLink to="/">Home Page</NavLink>
              <NavLink to="./projects">Projects</NavLink>
              <NavLink to="./contactMe">Contact Me</NavLink>
              <NavLink to="./resume">My Resume</NavLink>
            </Navigation>
          </Drawer>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
