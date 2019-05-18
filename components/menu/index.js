import React, { Fragment, useState } from 'react'
import { triangleImage } from '../../constants/variables'
import './style.less'

const Menu = () => {
    const [active, setActive] = useState(false)
    const toggleActive = (e) => {
        setActive(!active)
    }
    const linkList = [
        {
            text: 'HOME',
            url: ''
        },{
            text: 'OUR PEOPLE',
            url: ''
        },{
            text: 'PROJECTS',
            url: ''
        },{
            text: 'CONTACT',
            url: ''
        }
    ]

    const listItem = () => {
        return (
            <Fragment>
                {linkList.map((item, index) => (
                    <div key={index} className="menu">
                        <span className="icon"><img src={triangleImage} /></span>
                        <div className="name">{item.text}</div>
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <div>
            <a href="javascript:void(0);" className="menu" onClick={toggleActive}>
                <img src={triangleImage} />
            </a>
            <div className={`menu-wrapper ${active ? 'show' : 'hide'}`}>
                <div className="close" onClick={toggleActive}><span>CLOSE</span></div>
                <div className="nav">
                    {listItem()}
                </div>
                <div className="close bottom"><span>MENU</span></div>
            </div>
        </div>
    )
}

export default Menu