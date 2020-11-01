import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Education
      ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>EPITECH</h3>
                                    <p className="info">Titre d'expert des technologies de l'information<span>•</span> <em className="date">Septembre 2017 - Juillet 2022</em></p>
                                    <p>
                                        Apprentissage du C et du C++.
                                        <br></br>
                                        Durant mes premières années à EPITECH j'ai pu faire des projets très interessants comme une bataille de virus sur une mémoire virutelle (COREWAR) ou encore un RPG.
                                        <br></br>
                                        Découverte de l'IA et de la Sécurite informatique.
                                        <br></br>
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Lycée René Cassin</h3>
                                    <p className="info">Baccalauréat Serie S <span>•</span> <em className="date">Juillet 2017</em></p>
                                    <p>
                                        Apprentissage des bases de Physique, Mathématiques et SVT.
                                        <br></br>
                                        Baccalauréat Mention Assez Bien.
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Expériences</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Aerys</h3>
                                    <p className="info">Developpeur R&D temps partiel<span>•</span> <em className="date">Septembre 2020 - Present</em></p>
                                    <p>
                                        Développement d'une d'API GraphQL en Rust.
                                        <br></br>
                                        Développement d'une crate Rust pour ajouter des permissions à des documents MongoDB.
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Streamwide</h3>
                                    <p className="info">Developpeur moteur VoIP<span>•</span> <em className="date">Mai 2020 - Aout 2020</em></p>
                                    <p>
                                        Ajout de l'IPV6 sur un moteur VoIP
                                    </p>
                                </div>
                            </div>
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Aerys</h3>
                                    <p className="info">Developpeur R&D temps partiel<span>•</span> <em className="date">Octobre 2019 - Avril 2020</em></p>
                                    <p>
                                        Développement d'un prototype d'API GraphQL en Rust.
                                        <br></br>
                                        Développement d'une crate Rust pour améliorer le driver MongoDB
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>EPITECH</h3>
                                    <p className="info">Professeur de language C et assistant pédagogique (ASTEK) <span>•</span> <em className="date">Fevrier 2019 - Octobre 2019</em></p>
                                    <p>
                                        Durant ces mois j'ai encadré les premières années de mon école. Durant leur projet, je leur faisais des suivis et je les notais sur leur rendu.
                                        Cette expérience m'a permis de développement mes compétences en pédagogie et en communication.
                                        Ceci m'a vraiement aidé à explique mon code de manière à ce qu'il soit compréhensible par tout le monde.
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Aerys</h3>
                                    <p className="info">Stagiaire Développeur R&D<span>•</span> <em className="date">Juillet 2018 - Decembre 2018</em></p>
                                    <p>
                                        Durant cette première expérience professionnelle en développement, j'ai du refactor le build system de Premake à Cmake.
                                        J'ai aussi pu travailler sur une base de donnée MongoDB pour un mode hors-ligne en C avec des bindings vers le C++ et le NodeJS.
                                        Cette expérience m'a permis d'apprendre l'organisation dans les projets notammenet avec des outils de CI comme Gitlab.
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Compétences</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand c" /><em>Rust</em></li>
                                    <li><span className="bar-expand c" /><em>C</em></li>
                                    <li><span className="bar-expand cpp" /><em>C++</em></li>
                                    <li><span className="bar-expand nodejs" /><em>NodeJS</em></li>
                                    <li><span className="bar-expand python" /><em>Python</em></li>
                                    <li><span className="bar-expand mongodb" /><em>MongoDB</em></li>
                                    <li><span className="bar-expand react-native" /><em>React-Native</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}