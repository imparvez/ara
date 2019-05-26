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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        arrows : false,
      };
      return (
        <div className="container" onMouseEnter={this.play} onMouseLeave={this.pause}>
          <Slider {...settings} ref={slider => (this.slider = slider)}>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="https://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
            </div>
            <div style={peopleCard}>
              <img src="hhttps://expertschoice.in/ara/team1.jpg" />
              <div style={name}>Lorem Ipsum</div>
              <div>Designation</div>
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