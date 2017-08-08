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
                        <Col xs={6} md={2}>
                            <Image src={portrait} circle responsive />
                        </Col>
                        <Col xs={6} md={10}>
                            <p>Hi! I'm a recent graduate aspiring to be a full-stack web developer.
                                I like to code in my free time, building apps that solve problems.
                                I am proficient in the MERN stack (MongoDB, Express, React, Node).
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