import React, { Component, Fragment } from 'react'
import Slider from "react-slick"
import Menu from '../components/menu'
import '../styles/project-detail.less'

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
                <div>
                    <img src="https://expertschoice.in/ara/details-img.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/details-img.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/details-img.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/details-img.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/details-img.jpg" alt="" />
                </div>
                <div>
                    <img src="https://expertschoice.in/ara/details-img.jpg" alt="" />
                </div>
                </Slider>
            </div>
        );
    }
}

function PeopleDetail() {
    return (
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
                            <div className="column column-left">
                                <div className="slider-section">
                                    <SimpleSlider />
                                </div>
                            </div>
                            <div className="column column-right">
                                <div className="detail-content">
                                    <h2>Our People</h2>
                                    <div className="tags">
                                        <span>JAIPUR, RAJASTHAN |</span>
                                        <span>COMMERCIAL  |</span>
                                        <span>COMPLETED   |</span>
                                        <span>12,000 SQ. FT.   |</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Proin ornare tellus a pretium consectetur. Etiam finibus purus ex, a aliquet metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Proin ornare tellus a pretium consectetur. Etiam finibus purus ex, a aliquet metus .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default PeopleDetail
