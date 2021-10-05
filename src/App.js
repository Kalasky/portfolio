import React from "react";
import { Col, Row, Card, CardDeck, Container } from "react-bootstrap";
import "./index.css";
// images imports
// import docs from "./images/docs.svg";
// import collab from "./images/collab.svg";
// import music from "./images/music.svg";
import contact from "./images/contact_me.svg";
import blip from "./images/blip.svg";
import warzonebot from "./images/warzonebot.svg";
// import amazon from "./images/amazon_cli.svg";
import supplymenow from "./images/delivery.svg";
// import liri from "./images/liri.svg";
import kolor from "./images/kolor_logo.jpg";
import flutter from "./images/flutter.svg";
import waveOne from "./images/curved-bg.svg";
// import waveTwo from "./images/curved-bg.svg";
import ReadMoreReact from "read-more-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  return (
    <div className="App">
      <img
        className="wave"
        style={{
          top: "-10%",
          position: "absolute",
          zIndex: "-1",
        }}
        src={waveOne}
        alt="coolness"
      />

      <Container>
        <Row>
          <div className="landingHeader">
            <h1 style={{ marginTop: "40px", fontWeight: "600" }}>
              Hello, I'm Robert Kalasky!
            </h1>
            <p style={{ fontSize: "18px", maxWidth: "45rem" }}>
              Check out my projects listed below as well as my socials listed in
              the footer. This site is powered by Heroku and created using
              React.js and React-Bootstrap.
            </p>
          </div>

          <CardDeck
            className="deckptop"
            style={{ paddingBottom: "100px", margin: "0 auto", width: "100%" }}
          >
            <Col lg={4} md={6} sm={12}>
              <div className="ptop" style={{ height: "100%" }}>
                <Card className="shadow cardHome hvr-float">
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ fontWeight: "600", textAlign: "center" }}>
                        Add A Blip!
                      </h2>
                    </Card.Title>
                    <div style={{ textAlign: "center", padding: "40px" }}>
                      <Card.Img
                        variant="top"
                        src={blip}
                        style={{
                          height: "130px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      />

                      {/* <FontAwesomeIcon icon={faBalanceScaleLeft} size="3x" /> */}
                    </div>
                    <Card.Text style={{ textAlign: "center" }}>
                      Using geolocation provided by Google Maps API. Repository: https://github.com/Kalasky/google-map-marker-insert -- A user can
                      add a blip on the map for everyone to see. Locations
                      submitted by users are stored in a json object.
                    </Card.Text>

                    <div style={{ textAlign: "center", padding: "30px" }}>
                      <a
                        role="button"
                        href="https://add-a-blip.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="ptop" style={{ height: "100%" }}>
                <Card className="shadow cardHome hvr-float">
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ fontWeight: "600", textAlign: "center" }}>
                        Warzone Tracker
                      </h2>
                    </Card.Title>
                    <div style={{ textAlign: "center", padding: "40px" }}>
                      {/* <FontAwesomeIcon icon={faBalanceScale} size="6x" /> */}
                      <Card.Img
                        variant="top"
                        src={warzonebot}
                        style={{
                          height: "130px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <Card.Text style={{ textAlign: "center" }}>
                      <ReadMoreReact
                        text={
                          "(MongoDB, JavaScript, Heroku, Git, Discord API) Users can track their Call of Duty account under full authentication, the bot will automatically assign a Discord role based off of their kill death ratio and win loss ratio. All user data will be scanned every 8 hours, if a users stats change the roles will be updated accordingly."
                        }
                        min={100}
                        ideal={200}
                        max={400}
                        readMoreText={"Click here to read more"}
                      />
                    </Card.Text>
                    <div style={{ textAlign: "center", padding: "30px" }}>
                      <a
                        role="button"
                        href="https://github.com/Kalasky/trackme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="ptop" style={{ height: "100%" }}>
                <Card className="shadow cardHome hvr-float">
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ fontWeight: "600", textAlign: "center" }}>
                        Supply Me Now
                      </h2>
                    </Card.Title>
                    <div style={{ textAlign: "center", padding: "40px" }}>
                      {/* <FontAwesomeIcon icon={faBalanceScale} size="6x" /> */}
                      <Card.Img
                        variant="top"
                        src={supplymenow}
                        style={{
                          height: "130px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <Card.Text style={{ textAlign: "center" }}>
                      <ReadMoreReact
                        text={"(React, React-Bootstrap) Frontend website showcasing a construction delivery company. Repository: https://github.com/Kalasky/construction-delivery/tree/master/src"}
                        min={100}
                        ideal={200}
                        max={400}
                        readMoreText={"Click here to read more"}
                      />
                    </Card.Text>
                    <div style={{ textAlign: "center", padding: "30px" }}>
                      <a
                        role="button"
                        href="https://supplymenow.com/#/premium"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="ptop" style={{ height: "100%" }}>
                <Card className="shadow cardHome hvr-float">
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ fontWeight: "600", textAlign: "center" }}>
                        Kolor
                      </h2>
                    </Card.Title>
                    <div style={{ textAlign: "center", padding: "40px" }}>
                      {/* <FontAwesomeIcon icon={faBalanceScale} size="6x" /> */}
                      <Card.Img
                        variant="top"
                        src={kolor}
                        style={{
                          height: "130px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <Card.Text style={{ textAlign: "center" }}>
                      <ReadMoreReact
                        text={"(Mongo Atlas, Mongoose, Node.js, Discord.js, Twitch API) Color hierarchy system integrated with Twitch and Discord. Made a user experience that was manual and monotonous for hundreds of members in a community, automatic and easy to use. Kolor Bot showcase here: Feel free to skim through the video. https://www.youtube.com/watch?v=sWOD6XEQCPg"}
                        min={100}
                        ideal={200}
                        max={400}
                        readMoreText={"Click here to read more"}
                      />
                    </Card.Text>
                    <div style={{ textAlign: "center", padding: "30px" }}>
                      <a
                        role="button"
                        href="https://github.com/Kalasky/gregbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="ptop" style={{ height: "100%" }}>
                <Card className="shadow cardHome hvr-float">
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ fontWeight: "600", textAlign: "center" }}>
                        Ski Lodge Mobile App
                      </h2>
                    </Card.Title>
                    <div style={{ textAlign: "center", padding: "40px" }}>
                      {/* <FontAwesomeIcon icon={faBalanceScale} size="6x" /> */}
                      <Card.Img
                        variant="top"
                        src={flutter}
                        style={{
                          height: "130px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <Card.Text style={{ textAlign: "center" }}>
                      <ReadMoreReact
                        text={
                          "Mobile application for Ski China Peak. Handles payments like events, cabins, and a lot more. With a wide array of information scraped from their desktop website, making the info easy to access. Mobile application for Ski China Peak. Handles payments like events, cabins, and a lot more. With a wide array of information scraped from their desktop website, making the info easy to access."
                        }
                        min={100}
                        ideal={200}
                        max={400}
                        readMoreText={"Click here to read more"}
                      />
                    </Card.Text>
                    <div style={{ textAlign: "center", padding: "30px" }}>
                      <a
                        role="button"
                        href="https://github.com/Kalasky/ski-china-peak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col
              className="music3"
              lg={{ span: 4, offset: 0 }}
              md={{ span: 6, offset: 3 }}
            >
              <div className="ptop" style={{ height: "100%" }}>
                <Card className="shadow cardHome music hvr-float">
                  <Card.Body>
                    <Card.Title>
                      <h2 style={{ fontWeight: "600", textAlign: "center" }}>
                        Contact Me
                      </h2>
                    </Card.Title>
                    <div style={{ textAlign: "center", padding: "40px" }}>
                      {/* <FontAwesomeIcon icon={faBalanceScaleRight} size="3x" /> */}
                      <Card.Img
                        variant="top"
                        src={contact}
                        style={{
                          height: "130px",
                          width: "auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <Card.Text style={{ textAlign: "center" }}>
                      Contact me through my email to get in touch! Click the
                      button below to copy my email to your clipboard.
                    </Card.Text>

                    <div style={{ textAlign: "center", padding: "30px" }}>
                      <CopyToClipboard text={"kalaskyr@gmail.com"}>
                        <button type="button" className="btn btn-primary">
                          Copy Email
                        </button>
                      </CopyToClipboard>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default App;
