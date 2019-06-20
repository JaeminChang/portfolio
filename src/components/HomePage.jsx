import React from "react";
import { Grid, Cell } from "react-mdl";

class HomePage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing">
          <Cell col={12}>
            <img
              src="https://i.postimg.cc/wBFqrH5D/2019-02-26-Sabio-3.jpg"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                .Net Core | .Net Framework
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/michael-chang-379556182/">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/michael.chang.52831">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/_mike_chang/?hl=en">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="https://github.com/JaeminChang">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
