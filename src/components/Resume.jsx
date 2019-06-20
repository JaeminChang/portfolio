import React from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume-body">
        <Grid>
          <Cell
            col={4}
            style={{
              color: "white",
              textShadow: "3px 3px black",
              paddingLeft: "70px"
            }}
          >
            <div>
              <img
                src="https://i.postimg.cc/Y0RJxN57/teatessre.png"
                alt="avatar"
                style={{ height: "300px", paddingTop: "50px" }}
              />
            </div>

            <h2>Michael Chang</h2>
            <h3>Programmer</h3>
            <hr style={{ borderTop: "3px solid white", width: "50%" }} />
            <h4>Address</h4>
            <h5>Los Angeles, 90006</h5>
            <h4>Phone</h4>
            <h5>(213) 373-4840</h5>
            <h4>Email</h4>
            <h5>jaeminchang620@gmail.com</h5>
            <h4>Web</h4>
            <h5>https://github.com/JaeminChang</h5>
            <hr style={{ borderTop: "3px solid white", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>
            <Education
              startYear={2012}
              endYear={2015}
              schoolName="California Baptist University"
              diploma="Christian Studies"
            />
            <hr style={{ borderTop: "3px solid white" }} />
            <h3>Experience</h3>
            <Experience
              startYear={2014}
              endYear={2018}
              jobName="Golden Gate Steel Inc."
              jobDescription="Maintained the deadlines and the integrity of the company’s goals for each and every single project, according to the guidelines for every project.
              Managed and executed strategic planning, scheduling, and budgeting of many different construction projects.
              Implementing skills in reaching out to multiple companies and finding the best subcontractor for each aspect of a project for the best price and efficiency of each subcontractor.
              Obtained new guidelines and construction plans for each project showcasing a skill to learn and adapt very quickly according to what is necessary.
              Main architect in the planning and execution of the main website for the company.
              "
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="OutlayR"
              jobDescription="Designed and developed the SignalR based chat instant message communication features
              that allowed for communication between merchants and influencers. Enhanced the
              experience by notifying any currently logged in user of pending message via on screen
              notification, message indicator and optional audio tone.
              Integrated the Instagram feature onto the websiteApi for Influencers which enables
              the onsite rendering of an account feed and displays account statistics for Merchant review
              Application was developed using C#, ASP.NET, .Net Core 2.x,TFS, Visual Studio 2017, Instagram API, SignalR, Reactjs, Axios, JavaScript, Git, jQuery, AJAX, Bootstrap 4.x, CSS3, HTML5, Google Maps, T-SQL,  SQL Server 2016, SSMS 2017, Postman, Agile/Scrum Methodologies
              "
            />
            <hr style={{ borderTop: "3px solid white" }} />
            <h3>Skills</h3>
            <Skills skill="React.js" progress={80} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="C#" progress={60} />
            <Skills skill="Node.js" progress={70} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
