import React from 'react'
import PeopleList from '../components/people-list'
import PeopleDetail from '../components/people-detail'
import Header from '../components/header'

const People = () => (
    <div class="main-container">
        <div className="row">
            <div className="container">
                <Header />
            </div>
        </div>
        <div className="row">
            <PeopleDetail />
        </div>
        <div className="row">
            <PeopleList />
        </div>
    </div>
)

export default People