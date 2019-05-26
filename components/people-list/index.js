import React, { Fragment, Component } from 'react'
import Slider from "react-slick"
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
class ReactSlickDemo extends Component {
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

    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows : false,
      };
      return (
        <div className="container" onMouseEnter={this.play} onMouseLeave={this.pause}>
          <Slider {...settings} ref={slider => (this.slider = slider)}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
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