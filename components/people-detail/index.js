import React from 'react'
import './style.less'

function PeopleDetail() {
    return (
        <div className="super-container">
            <div className="row">
                <div className="container">
                    <div className="grid">
                        <div className="column text-content">
                            <div className="left-content">
                                <h2>Our People</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Proin ornare tellus a pretium consectetur. Etiam finibus purus ex, a aliquet metus .</p>
                            </div>
                        </div>
                        <div className="column column-right">
                            <div className="slider-section">
                                <img src="https://expertschoice.in/ara/ara-abt-slider.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleDetail