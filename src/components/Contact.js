import React, {Component} from 'react';

class Contact extends Component {

    render() {
        return (
            <address className="contact-para">
                <p>Feel free to contact me! =)</p>
                <p>Email: <a href="mailto:vuongkevin1@gmail.com">vuongkevin1@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/kevin-vuong1">https://www.linkedin.com/in/kevin-vuong1</a></p>
                <p>GitHub: <a href="https://github.com/kevinvuong1">https://github.com/kevinvuong1</a></p>
            </address>
        );
    }
}

export default Contact;