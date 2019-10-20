import React, { Component } from 'react';
export default class Testimonials extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>Temoignages</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <blockquote>
                                                <p>Aurélien est un excellent partenaire pour vous accompagner dans vos projet,
                                                    il s'adapte très rapidement à votre contexte, en particulier celui que je lui avait confié dans une tâche de réingénierie de code.
                                                    Force de proposition, je suis entièrement satisfait de cette mission Python, d'ailleurs à ce propos je prépare la prochaine étape ...
                      </p>
                                                <cite>Stephane Moreau / Slaash.co</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                        <li>
                                            <blockquote>
                                                <p>Exceptional intern. Very talented and motivated.
                                                    Integrated very well in the company. I wish I could hire him right away.
                                                    And I hope he'll come back for his next internship.
                      </p>
                                                <cite>Jean Marc Leroux / Aerys</cite>
                                            </blockquote>
                                        </li> {/* slide ends */}
                                    </ul>
                                </div> {/* div.flexslider ends */}
                            </div> {/* div.flex-container ends */}
                        </div> {/* row ends */}
                    </div>  {/* text-container ends */}
                </section>
            </React.Fragment>
        );
    }
}