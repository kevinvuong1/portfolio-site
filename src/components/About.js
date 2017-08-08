import React, {Component} from 'react';
import portrait from '../images/Portrait.JPG';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class About extends Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={2}>
                        <Image src={portrait} circle responsive />
                    </Col>
                    <Col xs={6} md={10}>
                        <p className="about-para">I'm</p>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default About;