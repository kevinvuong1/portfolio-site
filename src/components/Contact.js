import React, {Component} from 'react';
import resume from '../asset/Resume_Kevin_Vuong.pdf';

class Contact extends Component {

    render() {
        return (
            <address className="contact-para">
                <p>Feel free to contact me! =)</p>
                <p>Email: <a href="mailto:vuongkevin1@gmail.com">vuongkevin1@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/kevin-vuong1">LinkedIn</a> | <a href="https://github.com/kevinvuong1">GitHub</a></p>
                <p>Download link for <a href={resume} download>Resume</a></p>
            </address>
        );
    }
}

export default Contact;