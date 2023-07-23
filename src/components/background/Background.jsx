import React from 'react';
import './Background.css';
import purpleBall from './../../assets/other/purple_ball.png';
import redBall from './../../assets/other/red_ball.png';
import redBallSmall from './../../assets/other/red_ball_small.png';
import redLight from './../../assets/other/red_light.png';
import purpleLight from './../../assets/other/purple_light.png';

const Background = ({ children }) => {
    return (
        <div >
            {children}
            <div className="back">
                <img className='purpleBall' src={purpleBall} alt="" />
                <img className='redBall' src={redBall} alt="" />
                <img className='redBallSmall' src={redBallSmall} alt="" />
                <img className='redLight' src={redLight} alt="" />
                <img className='purpleLight' src={purpleLight} alt="" />
            </div>
        </div>
    );
};

export default Background;