import React from 'react';
import './Footer.css';
import telegram from './../../assets/vector/telegram.svg';
import viber from './../../assets/vector/viber.svg';
import whatsup from './../../assets/vector/whatsup.svg';

const Footer = () => {

    const icons = [telegram, viber, whatsup];
    const aboutCompany = ['Партнерская программа', 'Вакансии'];
    const menuItems = ['Расчет стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты',
        'Кейсы', 'Благодарственные письма', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ',];

    return (
        <footer >
            <div className="container">
                <div className="footer__row">
                    <div className="footer__options">
                        <div className="footer__item">
                            <span className='footer__title'>О компании</span>
                            <ul className='list'>{aboutCompany.map(item => <li>{item}</li>)}</ul>
                        </div>
                        <div className="footer__item">
                            <span className='footer__title'>Меню</span>
                            <ul className='list'>{menuItems.map(item => <li>{item}</li>)}</ul>
                        </div>
                    </div>
                    <div className="footer__item contacts">
                        <span className='footer__title'>Контакты</span>
                        <ul className='contacts__list'>
                            <span className='number'>+7 555 555-55-55</span>
                            <div className="footer__messangers">
                                {icons.map(icon => <a href='#!'><img src={icon} alt=''></img></a>)}
                            </div>
                            <span className='address'>Москва, Путевой проезд 3с1, к 902</span>
                        </ul>
                    </div>
                </div>
                <div className="copyrigths">
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <span className='policy'>Политика конфиденциальности</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;