import React, { Fragment } from 'react'
import Menu from '../components/menu'
import '../styles/index.less'

function Home() {
    return (
        <Fragment>
            <div className="main-container">
                <div className="row">
                    <div className="container">
                        <div className="header-section">
                            <div className="grid">
                                <div className="column">
                                    <a href="javascript:void(0)" className="logo">
                                        <img src="https://expertschoice.in/ara/ara-logo.png" alt="Ara" />
                                    </a>
                                </div>
                                <div className="column column-right">
                                    <Menu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="super-container">
                    <div className="row">
                        <div className="container">
                            <div className="grid">
                                <div className="column">
                                    <div className="left-content">
                                        <h2>We join the dots</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tortor purus. Proin ornare tellus a pretium consectetur. Etiam finibus purus ex, a aliquet metus .</p>
                                    </div>
                                </div>
                                <div className="column column-right">
                                    <div className="slider-section">
                                        <img src="https://expertschoice.in/ara/slider-showcse1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home