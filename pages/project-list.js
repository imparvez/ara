import React, { Component, Fragment } from 'react'
import Menu from '../components/menu'
import Slider from "react-slick"
import '../styles/project-list.less'
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
            arrows: false,
            autoplaySpeed: 2000
        }
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                <div className="image-wrapper">
                    <img src="https://expertschoice.in/ara/project-color.jpg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="https://expertschoice.in/ara/project-color.jpg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="https://expertschoice.in/ara/project-color.jpg" alt="" />
                </div>
                <div className="image-wrapper">
                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="" />
                </div>
                </Slider>
            </div>
        );
    }
}
const ProjectList = () => (
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
            <div className="container team-container">
                <div className="grid">
                    <div className="column">
                        <div className="project-list">
                            <div className="gray-img">
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-slider">
                                <SimpleSlider />
                            </div>
                            <div className="project-overlay">
                                <div className="details-section">
                                    <h2>DESIGNATION | DESIGNATION</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-list">
                            <div className="gray-img">
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-slider">
                                <SimpleSlider />
                            </div>
                            <div className="project-overlay">
                                <div className="details-section">
                                    <h2>DESIGNATION | DESIGNATION</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-list">
                            <div className="gray-img">
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-slider">
                                <SimpleSlider />
                            </div>
                            <div className="project-overlay">
                                <div className="details-section">
                                    <h2>DESIGNATION | DESIGNATION</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-list">
                            <div className="gray-img">
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-slider">
                                <SimpleSlider />
                            </div>
                            <div className="project-overlay">
                                <div className="details-section">
                                    <h2>DESIGNATION | DESIGNATION</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-list">
                            <div className="gray-img">
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/project-disable.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-slider">
                                <SimpleSlider />
                            </div>
                            <div className="project-overlay">
                                <div className="details-section">
                                    <h2>DESIGNATION | DESIGNATION</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="project-list">
                            <div className="gray-img">
                                <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/project-disable.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-slider">
                                <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/project-color.jpg" alt="name" />
                                </div>
                            </div>
                            <div className="project-overlay">
                                <div className="details-section">
                                <h2>DESIGNATION | DESIGNATION</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
)

export default ProjectList
