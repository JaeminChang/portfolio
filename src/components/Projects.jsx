import React from "react";
import { Grid, Cell } from "react-mdl";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="project-body">
        <Grid className="project-grid">
          <Cell col={8}>
            <h2 style={{ color: "white", textShadow: "2px 2px black" }}>
              Projects
            </h2>
            <Carousel
              dynamicHeight="true"
              useKeyboardArrows="true"
              infiniteLoop="true"
            >
              <div className="images">
                <img src="https://i.postimg.cc/W10xBVK1/Chat.png" alt="chat" />
                <div className="overlay">
                  <div className="text">
                    Designed and developed the SignalR based chat instant
                    message communication features that allowed for
                    communication between merchants and influencers. Enhanced
                    the experience by notifying any currently logged in user of
                    pending message via on screen notification, message
                    indicator and optional audio tone.
                  </div>
                </div>
              </div>
              <div className="images">
                <img
                  src="https://i.postimg.cc/Vv3HhZWt/dashboard.png"
                  alt="dashboard"
                />
                <div className="overlay">
                  <div className="text">
                    Designed and developed the dashboard, displaying information
                    such as your profile picture, your status, your email, and
                    your birthday. Also had your account summary which shows the
                    status of your current orders displaying either processing,
                    shipping, or delivered. A quick log of your most recent
                    messages and also displaying the most recent message you
                    sent or received.
                  </div>
                </div>
              </div>
              <div className="images">
                <img
                  src="https://i.postimg.cc/Bb9HYNZ8/instagram.png"
                  alt="instagram"
                />
                <div className="overlay">
                  <div className="text">
                    Integrated the instagram feature onto the websiteApi for
                    Influencers which enables the onsite rendering of an account
                    feed and displays account statistics for Merchant review.
                    Also on hover of an image it will show information such as
                    number of likes that photo has, the description of the photo
                    and the hashtags that the user used on the post. Also
                    designing it in a way to resemble an Instagram profile.
                  </div>
                </div>
              </div>
              <div className="images">
                <img
                  src="https://i.postimg.cc/jC0ZcwRQ/influencers.png"
                  alt="influencers"
                />
                <div className="overlay">
                  <div className="text">
                    The Influencer Marketplace was a place for merchants to look
                    up all the registered influencers on the website. They would
                    be able to see information such as the influencer's name,
                    bio, the amount of followers they had and the influencer's
                    FAQs. Clicking on their username would also redirect them to
                    their instagram feed. The invite button allows for the
                    merchant to invite an influencer to promote their buisness.
                  </div>
                </div>
              </div>

              <div className="images">
                <img
                  src="https://i.postimg.cc/7YzQZQJR/Capture.png"
                  alt="myInfluencers"
                />
                <div className="overlay">
                  <div className="text">
                    Outlayr is a Social Commerce Influencer Exchange
                    application. Where Social Commerce Merchants can search for
                    Social Media Influencers to recruit for their social
                    media-based sales campaigns. OutlayR provides these Social
                    Media Influencers with the tools and support necessary to
                    post to/search for specific campaigns within their
                    specialties. OutlayR simplifies the introduction of an
                    infinite number of Influencers that Merchants can use as a
                    virtual sales force, including reporting and ranking
                    metrics.{" "}
                  </div>
                </div>
              </div>
            </Carousel>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
