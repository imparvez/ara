import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { triangleImage } from '../../constants/variables'
import Scramble from 'react-scramble'
import './style.less'

const Menu = () => {
    const [active, setActive] = useState(false)
    const toggleActive = (e) => {
        setActive(!active)
        !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('active') : document.getElementById('menu-triangle').classList.remove('active')
          setTimeout(function(){
            !active && document.getElementById('menu-close') ? document.getElementById('menu-close').classList.add('active') : document.getElementById('menu-close').classList.remove('active')
          }, 200);
    }   
    const linkList = [
        {
            text: 'HOME',
            url: '/'
        },{
            text: 'OUR PEOPLE',
            url: '/people'
        },{
            text: 'PROJECTS',
            url: '/project-list'
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
                        <Link href={item.url}>
                            <div className="name">
                                <Scramble
                                    autoStart
                                    text={item.text}
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
                            </div>
                        </Link>
                    </div>
                ))}
            </Fragment>
        )
    }

    return (
        <div>
            <a href="javascript:void(0);" className="menu" id="menu-triangle" onClick={toggleActive}>
                <img src={triangleImage} />
            </a>
            <div className={`menu-wrapper ${active ? 'show' : 'hide'}`}>
                <div className="close-menu" ><div className="close cross" id="menu-close" onClick={toggleActive}></div></div>
                <div className="nav">
                    {listItem()}
                </div>
                <div className="close bottom">
                    <p>ARA Design is a brainchild of Amey Dahanukar (MA Urban Design, UK) and also a partner of Dahanukar Associates. From extensive urban plans to the littlest of furniture subtleties, his work consistently weaves interior and exterior spaces.</p>
                    <span>MENU</span>
                </div>
            </div>
        </div>
    )
}

export default Menu
