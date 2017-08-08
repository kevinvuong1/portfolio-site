import React, {Component} from 'react';

class Footer extends Component {

    render() {
        const year = new Date().getFullYear();
        const gitLink = "https://github.com/kevinvuong1/portfolio-site";
        return (
            <div className="footer">
                <p>Copyright © Kevin Vuong {year}</p>
                <p>Source code for this website: <a href={gitLink}>GitHub</a></p>
            </div>
        );
    }
}

export default Footer;