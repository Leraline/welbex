import React from 'react';
import logo from './../../assets/images/logo_welbex.png';
import telegram from './../../assets/vector/telegram.svg';
import viber from './../../assets/vector/viber.svg';
import whatsup from './../../assets/vector/whatsup.svg';
import './Header.css';

const Header = ({ navigation }) => {

    const icons = [telegram, viber, whatsup];

    return (
        <header>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="welbex" />
                        <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
                    </div>
                    <nav className="header__nav">
                        <ul>{navigation
                            .map((item, index) => <li key={index} className='nav__item'>
                                <a href='#!'>{item}</a>
                            </li>)}
                        </ul>
                    </nav>
                    <div className="header__phone">
                        <span>+7 555 555-55-55</span>
                    </div>
                    <div className="header__messangers">
                        {icons.map((icon, index) => <a key={index} href='#!'><img src={icon} alt=''></img></a>)}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;