import React, { Component, Fragment } from 'react'
import Header from '../components/header'
import { triangleImage } from '../constants/variables'
import '../styles/contact.less'


class Contact extends Component {
    renderSliderContent = (number) => {
        if (typeof window !== 'undefined') {
            document.querySelector('.slider-section').style["display"] = "none";
            document.querySelector(`.slider${number}`).style["display"] = "block";
        }
    }

    clearSliderContent = (number) => {
        if (typeof window !== 'undefined') {
            document.querySelector(`.slider${number}`).style["display"] = "none";
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main-container">
                    <div className="row">
                        <div className="container">
                            <Header />
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container contact-container">
                                <div className="map-section">
                                    <img src="https://expertschoice.in/ara/team/ara-map.png" alt="" usemap="#planetmap"/>
                                    <map name="planetmap">
                                        <area shape="rect" coords="841,308" href="sun.htm" alt="Sun" />
                                    </map>
                                 </div>
                                <div className="grid">
                                    <div className="column">
                                        <div className="left-content">
                                            <div className="title-text">
                                                <h2 className="rw-sentence">
                                                    <span>A part of us everywhere</span>
                                                </h2>
                                            </div>
                                            <p><span>Georgia</span> | <span>Dubai</span> | <span>Abu Dhabi</span> |   <span>UK</span>  | <span>Qatar</span> |
                                            <span>Mumbai</span> |  <span>Delhi</span> | <span>Bengaluru</span> | <span>Chennai</span> | <span>Hyderabad</span> |   <span>Kolkata</span> | </p>
                                            <h4>
                                                CONTACT FOR MORE INFORMATION TEL. <a href="tel:91-2226482236">91-2226482236</a>, <a href="tel:91-2226482237">91-2226482237</a> MOBILE<a href="91-9820143289">91-9820143289</a> EMAIL: <a href="contact@aradesign.in ">contact@aradesign.in </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Contact
