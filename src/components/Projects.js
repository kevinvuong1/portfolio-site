import React, {Component} from 'react';
import {PageHeader, Glyphicon, Button, Grid, Row, Col} from 'react-bootstrap';
import ChatHome from '../images/Chat_home.JPG'
import ChatRoom from '../images/Chat_room.JPG';
import HEMA from '../images/HEMA_Glossary.png';

class Projects extends Component {

    render(){
        const CHAT_APP_DEPLOY = "https://chat-app-k.herokuapp.com/";
        const CHAT_APP_GIT = "https://github.com/kevinvuong1/chat-app";

        const GLOSS_APP_DEPLOY = "https://hema-glossary.herokuapp.com/";
        const GLOSS_APP_GIT = "https://github.com/kevinvuong1/hema-glossary";

        return(
            <Grid className="projects-grid">
                <PageHeader className="page-header">Projects</PageHeader>
                <Row className="project">
                    <Col xs={12} md={8} lg={9}>
                            <img  className="image" src={ChatHome} alt="chat room home" />
                            <img  className="image"  src={ChatRoom} alt="chat room" />
                    </Col>
                    <Col className="media-body" xs={12} md={4} lg={3}>
                        <h1 className="project-header">Chat Application</h1>
                        <p className="app-description">
                            A Chat application created using the React, Express, SocketIO, and the Geolocation web API.
                            This application supports real-time communication between multiple users in the same chat room.
                            A user can join a room and chat to anyone who is also in the same room.
                            A dropdown shows the list of rooms that currently have user(s)  in it.
                            A user can also tell other users their location by clicking on the "send location" button.
                            The styling was done using SASS following the BEM methodology. Flexbox was used for layout.
                            <br/><br/>
                            No text messages are stored in the server for this app, so feel free to test it!
                        </p>
                        <div className="button-container">
                            <Button
                                className="btn btn-primary"
                                href={CHAT_APP_DEPLOY}
                                target="_blank">View Deployed Project <Glyphicon glyph="chevron-right" /></Button>
                            <br/>
                            <Button
                                className="btn btn-primary"
                                href={CHAT_APP_GIT}
                                target="_blank"
                            >View Source Code <Glyphicon glyph="chevron-right" /></Button>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row className="project">
                    <Col xs={12} md={8} lg={9}>
                        <img className="image" src={HEMA} alt="hema" />
                    </Col>
                    <Col className="media-body" xs={12} md={4} lg={3}>
                        <h1 className="project-header">Glossary Application</h1>
                        <p className="app-description">
                            A glossary application created using the React, Express, MongoDB, Mongoose, and Bootstrap.
                            A user can search for terms and filter by language.
                            A REST API was developed inside Express for the backend to add terms to the glossary.
                            A Mongoose Schema and model was used to define the data to be stored inside MongoDB.
                            The refresh button will retrieve a JSON list of all the terms from the glossary.
                            The submit button will add a term to the database. Form validation is in place for both the
                            server and client side of the application.
                            <br/><br/>
                            Feel free to test out the glossary by adding a term of your own!
                        </p>
                        <div className="button-container">
                            <Button
                                className="btn btn-primary"
                                href={GLOSS_APP_DEPLOY}
                                target="_blank">View Deployed Project <Glyphicon glyph="chevron-right" /></Button>
                            <br/>
                            <Button
                                className="btn btn-primary"
                                href={GLOSS_APP_GIT}
                                target="_blank"
                            >View Source Code <Glyphicon glyph="chevron-right" /></Button>
                        </div>
                    </Col>
                    <hr/>
                </Row>
            </Grid>
        );
    }

}

export default Projects;