import React from 'react'
import Menu from '../components/menu'
import '../styles/people-list.less'

function PeopleList() {
    return (
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
                <div className="container team-container">
                    <div className="grid">
                    <div className="column">
                        <a href="javascript:void(0)">
                        <div className="image-wrapper">
                            <img src="https://expertschoice.in/ara/team1.jpg" alt="name"/>
                        </div>
                        <div className="details-section">
                            <h2>Lorem Ipsum</h2>
                            <p>DESIGNATION</p>
                        </div>
                        </a>
                    </div>
                    <div className="column">
                        <a href="javascript:void(0)">
                        <div className="image-wrapper">
                            <img src="https://expertschoice.in/ara/team1.jpg" alt="name"/>
                        </div>
                        <div className="details-section">
                            <h2>Lorem Ipsum</h2>
                            <p>DESIGNATION</p>
                        </div>
                        </a>
                    </div>
                    <div className="column">
                        <a href="javascript:void(0)">
                        <div className="image-wrapper">
                            <img src="https://expertschoice.in/ara/team1.jpg" alt="name"/>
                        </div>
                        <div className="details-section">
                            <h2>Lorem Ipsum</h2>
                            <p>DESIGNATION</p>
                        </div>
                        </a>
                    </div>
                    <div className="column">
                        <a href="javascript:void(0)">
                        <div className="image-wrapper">
                            <img src="https://expertschoice.in/ara/team1.jpg" alt="name"/>
                        </div>
                        <div className="details-section">
                            <h2>Lorem Ipsum</h2>
                            <p>DESIGNATION</p>
                        </div>
                        </a>
                    </div>
                    <div className="column">
                        <a href="javascript:void(0)">
                        <div className="image-wrapper">
                            <img src="https://expertschoice.in/ara/team1.jpg" alt="name"/>
                        </div>
                        <div className="details-section">
                            <h2>Lorem Ipsum</h2>
                            <p>DESIGNATION</p>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleList