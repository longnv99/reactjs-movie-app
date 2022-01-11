import React from 'react'
import './Footer.scss'

import logo from '../../assets/images/tmdbIcon_2.svg';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__content container">
                <div className="footer__content__logo"> 
                    <Link to='/'>
                        <img src={logo} alt="" /> 
                    </Link>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <div className="footer__content__menu__header">THE BASIC</div>
                        <Link to='/'>About TMDB</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Support Forums</Link>
                        <Link to='/'>API</Link>
                        <Link to='/'>System Status</Link>
                    </div>
                    <div className="footer__content__menu">
                        <div className="footer__content__menu__header">GET INVOLVED</div>
                        <Link to='/'>Contribution BIble</Link>
                        <Link to='/'>3rd Party Applications</Link>
                        <Link to='/'>Add New Movie</Link>
                        <Link to='/'>Add New TV Show</Link>
                    </div>
                    <div className="footer__content__menu">
                        <div className="footer__content__menu__header">COMMUNITY</div>
                        <Link to='/'>Guidelines</Link>
                        <Link to='/'>Discussions</Link>
                        <Link to='/'>Leaderboard</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                    <div className="footer__content__menu">
                        <div className="footer__content__menu__header">LEGAL</div>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>API Terms of Use</Link>
                        <Link to='/'>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
