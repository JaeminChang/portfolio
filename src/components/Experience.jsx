import React from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <p style={{ fontSize: "large" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={9}>
          <h4 style={{ marginTop: "0px", textAlign: "center" }}>
            {this.props.jobName}
          </h4>
          <p style={{ fontSize: "medium", textAlign: "center" }}>
            {this.props.jobDescription}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
