import React from "react";
import { Grid, Cell } from "react-mdl";

class Education extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <p style={{ fontSize: "large", paddingLeft: "1em" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={9}>
          <h4 style={{ marginTop: "0px", textAlign: "center" }}>
            {this.props.schoolName}
          </h4>
          <p style={{ fontSize: "large", textAlign: "center" }}>
            {this.props.diploma}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
