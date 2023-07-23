import React, { useState } from 'react';
import mainScreen from './../../assets/other/main_screen.png';
import './Main.css';

const Main = () => {

    const [bonus, setBonus] = useState([{ title: 'Виджеты', subtitle: '30 готовых решений' },
    { title: 'Dashboard', subtitle: 'с показателями вашего бизнеса' },
    { title: 'Skype Аудит', subtitle: 'отдела продаж и CRM системы' },
    { title: '35 дней', subtitle: 'использования CRM' },]);

    return (<div className="main">
        <div className='container'>
            <div className="main__row">
                <div className="main__info">
                    <div>
                        <span className="main__title">Зарабатывайте больше</span>
                        <span className='text__accent'>с WELBEX</span>
                    </div>
                    <span className="main_subtitle">
                        Развиваем и контролируем продажи за вас
                    </span>
                </div>
                <div className="main__consultation">
                    <div className="consultation__title">
                        <span>Вместе с</span>
                        <span className='orange_accent'>бесплатной</span>
                        <span className='text__accent'>консультацией</span>
                        <span>мы дарим:</span>
                    </div>
                    <div className="consultation__bonus">
                        {bonus.map(item => <div className='bonus__item'>
                            <span className='bonus__title'>{item.title.toUpperCase()}</span>
                            <span className='bonus__subtitle'>{item.subtitle}</span>
                        </div>)}
                    </div>
                    <button className='consultation__button'>Получить консультацию</button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Main;