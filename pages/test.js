import React, { Component, Fragment } from 'react'
import Slider from "react-slick"
import '../styles/test.less'

class ReactSlickDemo extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows : true,
      };
      return (
        <div className="container">
          <Slider {...settings}>
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

class Test extends Component {
    render(){
        return (
            <div>
                <ReactSlickDemo />
            </div>
        )
    }
}

export default Test
