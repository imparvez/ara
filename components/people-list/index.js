import React, { Fragment } from 'react'
import './style.less'

function PeopleList() {
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
    return (
        <div className="super-container">
            <div className="row">
                <div className="container team-container">
                    <div className="grid">
                        {renderPeopleList()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleList