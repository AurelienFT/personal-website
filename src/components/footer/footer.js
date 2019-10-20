import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                            <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AurelienFCLT"><i className="fa fa-twitter" /></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aurelien-foucault/"><i className="fa fa-linkedin" /></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AurelienFT"><i className="fa fa-github" /></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/foucaultaurelien/"><i className="fa fa-instagram" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2019 Aurélien FOUCAULT</li>
                                <li>Crée par <a title="Styleshout" href="http://www.styleshout.com/"> Aurélien FOUCAULT (aussi)</a></li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}