import React, {Component} from 'react';
import portrait from '../images/Portrait.jpg';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import resume from '../asset/Resume_Kevin_Vuong.pdf';

class About extends Component {

    render() {
        return (
            <div>
                <Grid className="about">
                    <Row>
                        <Col xs={4} md={2}>
                            <Image src={portrait} circle responsive />
                        </Col>
                        <Col xs={8} md={10}>
                            <p>Hi! I'm a recent graduate seeking a web developer position.
                                I like to code in my free time, building apps that solve problems.
                                Outside of coding, I enjoy fencing and playing the guitar.
                                I am proficient in the MERN stack (MongoDB, Express, React, Node).
                                Please see my resume for more information.
                                <br/><br/>Download link for <a href={resume} download>Resume</a>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default About;