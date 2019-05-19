import React, { Component, Fragment } from 'react'
import Slider from "react-slick"
import Menu from '../components/menu'
import { triangleImage } from '../constants/variables'
import '../styles/index.less'

class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play = () => {
        this.slider.slickPlay()
    }
    
    pause = () => {
        this.slider.slickPause()
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000
        }
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                <div>
                    <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                </div>
                </Slider>
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-container">
                    <div className="row">
                        <div className="container">
                            <div className="header-section">
                                <div className="grid">
                                    <div className="column">
                                        <a href="javascript:void(0)" className="logo">
                                            <img src="https://expertschoice.in/ara/ara-logo.png" alt="Ara" />
                                        </a>
                                    </div>
                                    <div className="column column-right">
                                        <Menu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="super-container">
                        <div className="row">
                            <div className="container">
                                <div className="grid">
                                    <div className="column">
                                        <div className="left-content">
                                            <h2>We join the dots</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Proin ornare tellus a pretium consectetur. Etiam finibus purus ex, a aliquet metus .</p>
                                            <h4>HOME</h4>
                                        </div>
                                    </div>
                                    <div className="column column-right">
                                        <div className="project-sliders">
                                            <div className="slider-section" id="slider2">
                                                <SimpleSlider />
                                            </div>
                                            <div className="slider-section" id="slider3">
                                                <SimpleSlider />
                                            </div>
                                        </div>
                                        <div className="bullets">
                                            <div className="list">
                                                <span id="bullet1"><img src={triangleImage} /></span>
                                                <span id="bullet2"><img src={triangleImage} /></span>
                                                <span id="bullet3"><img src={triangleImage} /></span>
                                            </div>
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

export default Home
