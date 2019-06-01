import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import Header from '../components/header'
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

        const { images } = this.props
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    {images && images.map((item, index) => (
                        <div className="image-wrapper" key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
class ProjectList extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/jtc8z')
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log(`error => ${error}`))
    }

    renderProjectList = (item, index) => (
        <div className='column'>
            <div className='project-list'>
                <div className='gray-img'>
                    <div className="image-wrapper">
                        <img src={item.showCase} alt="name" />
                    </div>
                </div>
                <div className="project-slider">
                    <SimpleSlider images={item.projectImages} />
                </div>
                <div className="project-overlay">
                    <div className="details-section">
                        <h2>{item.name} | {item.location}</h2>
                    </div>
                </div>
            </div>
        </div>
    )

    render() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <div className="super-container">
                    <div className="row">
                        <div className="container project-container">
                            <div className='grid'>
                                {this.state.data.map((item, index) => (
                                    <>
                                        {this.renderProjectList(item, index)}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectList
