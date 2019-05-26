import React, { Fragment, Component } from 'react'
import Slider from "react-slick"
import './style.less'

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
            autoplaySpeed: 2000,
            arrows : false,
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

function PeopleList() {
    const peopleList = [
        {
            name: 'Lorem Ipsum',
            designation: 'Designation',
            imageUrl: 'https://expertschoice.in/ara/team1.jpg',
        },{
            name: 'Lorem Ipsum',
            designation: 'Designation',
            imageUrl: 'https://expertschoice.in/ara/team1.jpg',
        },{
            name: 'Lorem Ipsum',
            designation: 'Designation',
            imageUrl: 'https://expertschoice.in/ara/team1.jpg',
        },{
            name: 'Lorem Ipsum',
            designation: 'Designation',
            imageUrl: 'https://expertschoice.in/ara/team1.jpg',
        },{
            name: 'Lorem Ipsum',
            designation: 'Designation',
            imageUrl: 'https://expertschoice.in/ara/team1.jpg',
        },{
            name: 'Lorem Ipsum',
            designation: 'Designation',
            imageUrl: 'https://expertschoice.in/ara/team1.jpg',
        }
    ]

    const renderPeopleList = () => {
        return (
            <Fragment>
            {peopleList.map((people, index) => (
                <div key={index} className="column">
                    <a href="javascript:void(0)">
                    <div className="image-wrapper">
                        <img src={people.imageUrl} alt={people.name}/>
                    </div>
                    <div className="details-section">
                        <h2>{people.name}</h2>
                        <p>{people.designation}</p>
                    </div>
                    </a>
                </div>
            ))}
            </Fragment>
        )
    }
    return (
        <div className="super-container">
            <div className="row">
                <div className="container team-container">
                    <div className="grid">
                        {renderPeopleList()}
                    </div>
                    <div className="grid">
                        <div className="column slider-column">
                            <SimpleSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleList