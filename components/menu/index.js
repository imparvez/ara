import React, { useState } from 'react'
import './style.less'

const Menu = () => {
    const [active, setActive] = useState(false)
    const documentExist = typeof document === 'object'
    documentExist && document.querySelector('body').addEventListener('click', function(){
        setActive(false)
    })

    return (
        <div>
            <a href="javascript:void(0);" className="menu" onClick={() => setActive(!active)}>
                <img src="https://expertschoice.in/ara/menu-img.png" />
            </a>
            <div class={`menu-wrapper ${active ? 'show' : 'hide'}`}>
                <div class="close" onClick={() => setActive(!active)}><span>CLOSE</span></div>
                <div class="nav">
                    <div class="menu">
                        <span class="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div class="name">HOME</div>
                    </div>
                    <div class="menu">
                        <span class="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div class="name">OUR PEOPLE</div>
                    </div>
                    <div class="menu">
                        <span class="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div class="name">PROJECTS</div>
                    </div>
                    <div class="menu">
                        <span class="icon"><img src="https://expertschoice.in/ara/menu-img.png" /></span>
                        <div class="name">CONTACT</div>
                    </div>
                </div>
                <div class="close bootom"><span>MENU</span></div>
            </div>
        </div>
    )
}

export default Menu