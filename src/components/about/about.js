import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>A propos de moi</h2>
                            <p>
                                Je suis étudiant à EPITECH en 4ème année. Au delà de l'école je suis aussi passionné par le code.
                                C'est pour cela que j'ai choisis de faire du freelance en plus de mes études.
                                Je m'investis beaucoup dans l'école où j'ai eu l'honneur d'encadrer les premières années pendant un an.
                                <br></br>
                                <br></br>
                                A côté de cela j'aime beaucoup la photographie et le cinéma. Lorsque j'ai le temps,
                                j'essaye de me former sur de nouvelles technologies.
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Mon contact</h2>
                                    <p className="address">
                                        <span>Aurélien FOUCAULT</span><br />
                                        <span>13005 Marseille
                                        </span><br />
                                        <span>0678339942</span><br />
                                        <span>aurelien.foucault@epitech.eu</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-download" />Téléchager mon CV</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}