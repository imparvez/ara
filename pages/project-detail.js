import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'
import Scramble from 'react-scramble'
import axios from 'axios'
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
        const { images } = this.props
        return (
            <div className="sliderWrapper" onMouseEnter={this.play} onMouseLeave={this.pause}>
                <Slider {...settings} ref={slider => (this.slider = slider)}>
                    {images && images.map((item, index) => (
                        <div key={index}>
                            <img src={item} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

class PeopleDetail extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/1e740r')
            .then(res => this.setState({ data: res.data }))
            .catch(error => console.log('Err: ', error))
    }

    renderProjectDetail = (data) => {
        return (
            <>
                <div className="column column-left">
                    <div className="slider-section">
                        <SimpleSlider images={data.projectImages} />
                    </div>
                </div>
                <div className="column column-right">
                    <div className="detail-content">
                        <h2>{data.name}</h2>
                        <div className="tags">
                            <span>
                            <Scramble
                                autoStart
                                text={`JAIPUR, ${data.location.toUpperCase()} |`}
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
                                    text={`${data.type.toUpperCase()} |`}
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
                                    text={`${data.status.toUpperCase()} |`}
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
                                    text={`${data.size.toUpperCase()} |`}
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
                        <p>{data.details}</p>
                    </div>
                </div>
            </>
        )
    }
    render() {
        const { data } = this.state
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
                            <div className='grid'>
                                {data.length > 0 && this.renderProjectDetail(data[0])}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default PeopleDetail
