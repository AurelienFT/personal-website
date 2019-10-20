import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
                            <li><a className="smoothscroll" href="#about">Me decouvrir</a></li>
                            <li><a className="smoothscroll" href="#resume">Mon CV</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Mes projets</a></li>
                            <li><a className="smoothscroll" href="#testimonials">Témoignages</a></li>
                            <li><a className="smoothscroll" href="#contact">Contactez-moi</a></li>
                        </ul> {/* end #nav */}
                    </nav> {/* end #nav-wrap */}
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">Salut, je m'appelle Aurélien Foucault.</h1>
                            <h3>Je suis actuellement en 3eme année à <span>EPITECH</span>. Je suis un développeur spécialisé <span>backend</span> et <span>software</span>.
                            Sur ce site, vous pouvez <a className="smoothscroll" href="#about">me découvrir</a>, <a className="smoothscroll" href="#resume">mes compétences</a> et <a className="smoothscroll" href="#portfolio">mes projets</a>.
                            </h3>
                            <hr />
                            <ul className="social">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AurelienFCLT"><i className="fa fa-twitter" /></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aurelien-foucault/"><i className="fa fa-linkedin" /></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/AurelienFT"><i className="fa fa-github" /></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/foucaultaurelien/"><i className="fa fa-instagram" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}