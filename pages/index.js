import React, { Component, Fragment } from 'react'
import Slider from "react-slick"
import Scramble from 'react-scramble'
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
                                            <div className="title-text">
                                                <h2 className="rw-sentence">
                                                    <span>We join the</span>
                                                    <div className="rw-words rw-words-1">
                                                        <span>dots</span>
                                                        <span>sounds</span>
                                                        <span>magic</span>
                                                        <span>experiences</span>
                                                        <span>feelings</span>
                                                        <span>butterflies</span>
                                                    </div>
                                                </h2>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Proin ornare tellus a pretium consectetur. Etiam finibus purus ex, a aliquet metus .</p>
                                            <h4>
                                                <Scramble
                                                    autoStart
                                                    text="HOME"
                                                    steps={[
                                                    {
                                                        roll: 10,
                                                        action: '+',
                                                        type: 'all',
                                                    },
                                                    {
                                                        action: '-',
                                                        type: 'forward',
                                                    },
                                                    ]}
                                                />
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="column column-right">
                                        <div className="project-sliders">
                                            <div className="slider-section slider1" id="slider1">
                                                <SimpleSlider />
                                            </div>
                                            <div className="slider-section slider2" id="slider2">
                                                <SimpleSlider />
                                            </div>
                                            <div className="slider-section slider3" id="slider3">
                                                <SimpleSlider />
                                            </div>
                                        </div>
                                        <div className="bullets">
                                            <div className="list">
                                                <span
                                                    id="bullet1"
                                                    onMouseEnter={() => this.renderSliderContent(1)}
                                                    onMouseLeave={() => this.clearSliderContent(1)}
                                                >
                                                    <img src={triangleImage} />
                                                </span>
                                                <span
                                                    id="bullet2"
                                                    onMouseEnter={() => this.renderSliderContent(2)}
                                                    onMouseLeave={() => this.clearSliderContent(2)}
                                                >
                                                    <img src={triangleImage} />
                                                </span>
                                                <span
                                                    id="bullet3"
                                                    onMouseEnter={() => this.renderSliderContent(3)}
                                                    onMouseLeave={() => this.clearSliderContent(3)}
                                                >
                                                    <img src={triangleImage} />
                                                </span>
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
