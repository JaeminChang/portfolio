import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          {/* <Cell col={6}>
            <h2 style={{ color: "white", textShadow: "2px 2px black" }}>
              Michael Chang
            </h2>
            <img
              src="https://i.postimg.cc/R0pXSsw2/IMG-7970.jpg"
              alt="avatar"
              style={{ height: "350px" }}
            />
            <h5 style={{ color: "white", textShadow: "2px 2px black" }}>
              Feel free to contact me on any of these platforms!
            </h5>
          </Cell> */}
          <Cell col={6} style={{ background: "white", opacity: "0.9" }}>
            <h2
              style={{
                color: "black",
                textShadow: "2px 2px white",
                fontFamily: "Lucina Sans Unicode"
              }}
            >
              Contact Me
            </h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Lucina Sans Unicode",
                      color: "black",
                      textShadow: "2px 2px white"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (213) 373-4840
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Lucina Sans Unicode",
                      color: "black",
                      textShadow: "2px 2px white"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    jaeminchang620@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Lucida Sans Unicode",
                      color: "black",
                      textShadow: "2px 2px white"
                    }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    michaelchang620@hotmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Lucina Sans Unicode",
                      color: "black",
                      textShadow: "2px 2px white"
                    }}
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    michaeljaeminchang
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
