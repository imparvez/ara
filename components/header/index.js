import React from 'react'
import Menu from '../menu'
import Logo from '../logo'
import './style.less'

const Header = () => (
    <div className="header-section">
        <div className="grid">
            <div className="column">
                <Logo />
            </div>
            <div className="column column-right">
                <Menu />
            </div>
        </div>
    </div>
)

export default Header