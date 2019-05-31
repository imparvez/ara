import React, { Fragment, Component } from 'react'
import Slider from "react-slick"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import './style.less'

const peopleList = [
    {
        name: 'Ankita Kuriakose',
        designation: 'Associate',
        imageUrl: 'https://expertschoice.in/ara/team/solo_01.jpg',
    },{
        name: 'Pankaj Panwar',
        designation: 'Associate',
        imageUrl: 'https://expertschoice.in/ara/team/solo_02.jpg',
    },{
        name: 'Raunak Shah',
        designation: 'Associate',
        imageUrl: 'https://expertschoice.in/ara/team/solo_03.jpg',
    },{
        name: 'Rajdeep Modak',
        designation: 'Senior Architect',
        imageUrl: 'https://expertschoice.in/ara/team/solo_04.jpg',
    },{
        name: 'Twinkle Kataria',
        designation: 'Design & Communication',
        imageUrl: 'https://expertschoice.in/ara/team/solo_10.jpg',
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
          <div className="row people-list">
            <div className="container team-container">
                <div className="grid">
                    <ReactScrollWheelHandler
                    upHandler={() => this.slider.slickPrev()}
                    downHandler={() => this.slider.slickNext()}>
                        <Slider {...settings} ref={slider => (this.slider = slider)}>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/team/solo_01.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Ankita Kuriakose</h2>
                                    <p>Associate</p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/team/solo_02.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Pankaj Panwar</h2>
                                    <p>Associate</p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/team/solo_03.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Raunak Shah</h2>
                                    <p>Associate</p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/team/solo_04.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Rajdeep Modak</h2>
                                    <p>Senior Architect</p>
                                </div>
                            </div>
                            <div className="column" style={peopleCard}>
                                <div className="image-wrapper">
                                    <img src="https://expertschoice.in/ara/team/solo_010.jpg" />
                                </div>
                                <div className="details-section">
                                    <h2>Twinkle Kataria</h2>
                                    <p>Design & Communication</p>
                                </div>
                            </div>
                        </Slider>
                    </ReactScrollWheelHandler>
                </div>
            </div>
          </div>
      );
    }
}

function PeopleList() {

    return (
        <ReactSlickDemo />
    )
}

export default PeopleList
