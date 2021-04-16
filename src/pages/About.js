import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import profile from "../components/Images/profilepic.png"

function About() {
    return (
        <div>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="about" id="about">About me</h1>
                    </Col>

                </Row>
                <br></br>
                <Row>
                    <Col size="md-8">
                        <p>
                            My name is Roseanne Nguyen, and I'm currently a full stack student at the University of Arizona! I'm new to the coding realm, but I'm enjoying these new experiences! My passion is in Public Health and personal well-being. <br></br> <br></br>Fun Fact: My Animal Crossing island has peaches.
            </p>

                    </Col>
                    <Col size="md-4">
                        <p>
                            <img className="profile" src={profile} alt="Profile Pic" />;

                    </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
