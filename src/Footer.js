import React from "react";
import "./index.css";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div style={{ background: "#23272a", color: "white" }}>
      <Container style={{ padding: "80px" }}>
        <Row className="footer">
          <Col style={{ marginBottom: "10px" }} xs={12} sm={12} md={12} lg={6}>
            <h5>
              <strong>ABOUT ME</strong>
            </h5>
            <p style={{ color: "gray" }}>
              Hey there! I'm Robert Kalasky and I am an aspiring developer
              craving to hit the workforce. I am currenly working on a mobile
              application for a small startup mainly using Flutter and Firebase.
              I am passionate to begin working to further enhance my
              understanding of Git, working with like minded individuals, and to
              further devlop my programming skills as a whole.
            </p>

            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#080808" }}
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a
              href="https://discordapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#080808", marginLeft: "8px" }}
            >
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#080808", marginLeft: "8px" }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a> */}
          </Col>
          <Col className="footerCommunity" xs={12} sm={6} md={6} lg={3}>
            <h5>
              <strong>RESUME</strong>
            </h5>

            <a
              style={{ color: "#1f9bde" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1nBgX1MCbpi1Z-Dh-5IXIUIvhlJOUEETW/view?usp=sharing"
            >
              <p style={{ marginBottom: "0.2rem" }}>My Resume</p>
            </a>

            {/* <a
              style={{ color: "#1f9bde" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/"
            >
              <p style={{ marginBottom: "0.2rem" }}>Instagram</p>
            </a>

            <a
              style={{ color: "#1f9bde" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/"
            >
              <p style={{ marginBottom: "0.2rem" }}>Twitter</p>
            </a> */}
          </Col>
          <Col className="footerServer" xs={12} sm={6} md={6} lg={3}>
            <h5>
              <strong>GITHUB</strong>
            </h5>
            <a
              href="https://github.com/Kalasky"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#080808", marginLeft: "0px" }}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>

            {/* <a style={{ color: "#1f9bde" }} href="/">
              <p style={{ marginBottom: "0.2rem" }}>Contact Us</p>
            </a>

            <a style={{ color: "#1f9bde" }} href="/">
              <p style={{ marginBottom: "0.2rem" }}>Merch</p>
            </a>

            <a style={{ color: "#1f9bde" }} href="/">
              <p style={{ marginBottom: "0.2rem" }}>Forums</p>
            </a> */}
          </Col>
          <Col md={12}>
            <p
              style={{
                color: "gray",
                marginTop: "30px",
              }}
            >
              Copyright © 2020
            </p>
          </Col>
          <Col md={12}>
            <p
              style={{
                color: "gray",
                marginTop: "30px",
              }}
            >
              Website made with&nbsp;
              <FontAwesomeIcon icon={faHeart} color="red" size="1x" />
              &nbsp;by Kalasky
              <a
                href="https://github.com/Kalasky"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#080808", marginLeft: "8px" }}
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
