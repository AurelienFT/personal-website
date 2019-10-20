import React, { Component } from 'react';
export default class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                                <div className="columns contact-details">
                                    <h2>Mon contact</h2>
                                    <p className="address">
                                        <span>Aurélien FOUCAULT</span><br />
                                        <span>94800 Villejuif
                                        </span><br />
                                        <span>0678339942</span><br />
                                        <span>aurelien.foucault@epitech.eu</span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="#" className="button"><i className="fa fa-download" />M'envoyer un mail</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                </section>
            </React.Fragment>
        );
    }
}