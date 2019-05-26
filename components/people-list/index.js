import React, { Fragment, Component } from 'react'
import Slider from "react-slick"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import './style.less'

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

const peopleCard = {
    textAlign: 'center'
}

const name = {
    fontSize: '16px',
    color: '#fff',
    fontWeight: '800',
}
class ReactSlickDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        arrows : false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows : true,
              }
            },
            {
                breakpoint: 559,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows : true,
                }
              },
        ]
      };
      return (
        <div className="container team-container">
            <div className="grid">
                <ReactScrollWheelHandler
                upHandler={() => this.slider.slickPrev()}
                downHandler={() => this.slider.slickNext()}>
                    <Slider {...settings} ref={slider => (this.slider = slider)}>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                        <div className="column" style={peopleCard}>
                            <div className="image-wrapper">
                                <img src="https://expertschoice.in/ara/team1.jpg" />
                            </div>
                            <div className="details-section">
                                <h2>Lorem Ipsum</h2>
                                <p>Designation</p>
                            </div>
                        </div>
                    </Slider>
                </ReactScrollWheelHandler>
            </div>
        </div>
      );
    }
}

function PeopleList() {

    return (
        <div className="super-container">
            <div className="row">
                <div className="container team-container">
                    <div className="grid">
                        <ReactSlickDemo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleList
