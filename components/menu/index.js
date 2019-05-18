import React, { useState } from 'react'
import './style.less'

const Menu = () => {
    const [active, setActive] = useState(false)
    const documentExist = typeof document === 'object'
    documentExist && document.querySelector('body').addEventListener('click', toggleActive)

    const toggleActive = (e) => {
        setActive(!active)
    }

    return (
        <div>
            <a href="javascript:void(0);" className="menu" onClick={toggleActive}>
                <img src="https://expertschoice.in/ara/menu-img.png" />
            </a>
            <div className={`menu-wrapper ${active ? 'show' : 'hide'}`}>
                <div className="close" onClick={toggleActive}><span>CLOSE</span></div>
                <div className="nav">
                    <div className="menu">
                        <span className="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div className="name">HOME</div>
                    </div>
                    <div className="menu">
                        <span className="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div className="name">OUR PEOPLE</div>
                    </div>
                    <div className="menu">
                        <span className="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div className="name">PROJECTS</div>
                    </div>
                    <div className="menu">
                        <span className="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div className="name">CONTACT</div>
                    </div>
                </div>
                <div className="close bootom"><span>MENU</span></div>
            </div>
        </div>
    )
}

export default Menu