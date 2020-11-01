import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="portfolio">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Mes projets</h1>
                            {/* portfolio-wrapper */}
                            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01" title>
                                            <img alt="" src="images/portfolio/coffee.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>API GraphQL RUST</h5>
                                                    <p>A GraphQL API built in Rust</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-02" title>
                                            <img alt="" src="images/portfolio/console.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Twitter television schedule</h5>
                                                    <p>A twitter bot to have the television schedule</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-03" title>
                                            <img alt="" src="images/portfolio/judah.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Workshop Rust</h5>
                                                    <p>A serie of 3 workshop to learn Rust.</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-04" title>
                                            <img alt="" src="images/portfolio/into-the-light.jpg" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Odysee (Still in development)</h5>
                                                    <p>A travel planner and companion</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div> {/* item end */}
                            </div> {/* portfolio-wrapper end */}
                        </div> {/* twelve columns end */}
                        {/* Modal Popup
	      --------------------------------------------------------------- */}
                        <div id="modal-01" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
                            <div className="description-box">
                                <h4>API GraphQL RUST</h4>
                                <p>During 2 years at Aerys I built an API in GraphQL using MongoDB and async-graphql.<br></br>This API have keys features such has permissions at each level of the API. It was my first project in Rust and with proc_macros.</p>
                                <span className="categories"><i className="fa fa-tag" />Rust, R&D</span>
                            </div>
                            <div className="link-box">
                                <a href="https://www.aurelienfoucault.fr">Details(WIP)</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-01 End */}
                        <div id="modal-02" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
                            <div className="description-box">
                                <h4>Twitter television schedule</h4>
                                <p>I wanted to learn how to deal with Twitter API. I searched for an idea and I found out this. Code available on my Github.</p>
                                <span className="categories"><i className="fa fa-tag" />API, Learning</span>
                            </div>
                            <div className="link-box">
                                <a href="https://www.aurelienfoucault.fr">Details(WIP)</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-02 End */}
                        <div id="modal-03" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
                            <div className="description-box">
                                <h4>Workshop Rust</h4>
                                <p>In my school I made a serie of 3 workshop to learn Rust to the other students. They are available on Github.</p>
                                <span className="categories"><i className="fa fa-tag" />Teaching, Rust</span>
                            </div>
                            <div className="link-box">
                                <a href="https://aurelienfoucault.fr">Details(WIP)</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-03 End */}
                        <div id="modal-04" className="popup-modal mfp-hide">
                            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
                            <div className="description-box">
                                <h4>Odysee (Still in development)</h4>
                                <p>It's a huge project of 3 years in my school wherei'm project manager. We are 8 in the group and the goal is to make a easy-to-use planner and companion travel</p>
                                <span className="categories"><i className="fa fa-tag" />Project management, Website</span>
                            </div>
                            <div className="link-box">
                                <a href="http://www.behance.net">Details</a>
                                <a className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>{/* modal-04 End */}
                    </div> {/* row End */}
                </section>
            </React.Fragment>
        );
    }
}