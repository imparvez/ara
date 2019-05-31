import React, { Component, Fragment } from 'react'
import Slider from "react-slick"
import Scramble from 'react-scramble'
import Header from '../components/header'
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
            autoplay: true,
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
                    <Header />
                </div>
            </div>
            <div className="super-container">
                <div className="row">
                    <div className="container project-details">
                        <div className="grid">
                            <div className="column column-left">
                                <div className="slider-section">
                                    <SimpleSlider />
                                </div>
                            </div>
                            <div className="column column-right">
                                <div className="detail-content">
                                    <h2>Hermosa</h2>
                                    <div className="tags">
                                        <span>
                                        <Scramble
                                            autoStart
                                            text="JAIPUR, RAJASTHAN |"
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
                                        </span>
                                        <span>
                                            <Scramble
                                                autoStart
                                                text="COMMERCIAL |"
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
                                        </span>
                                        <span>
                                            <Scramble
                                                autoStart
                                                text="COMPLETED |"
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
                                        </span>
                                        <span>
                                            <Scramble
                                                autoStart
                                                text="12,000 SQ. FT. |"
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
                                        </span>
                                    </div>
                                    <p>
                                    The unwinding opposite arches putting together a sense of varied monolithic arches creates a succession of interconnected spaces. 
                                    The 'Chand Bowri' concept in the showroom, provides an experimental space for artists and focusing on rich artisanal traditionals while including everything from furniture to furnishings. 
                                    </p>
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
