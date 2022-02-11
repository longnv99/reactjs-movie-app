import React, { useRef, useEffect, useState } from 'react'
import './Header.scss';
import logo from '../../assets/images/tmdbIcon.svg';
import { Link, useLocation } from 'react-router-dom';

const headerNav = [
    {
        display: 'Watch list',
        path: 'watchlist'
    },
    {
        display: 'Watched',
        path: 'watched'
    },
    {
        display: 'Sign In',
        path: 'login'
    },
    {
        display: 'Sign Up',
        path: 'register'
    },
]

const Header = () => {
    const { pathName } = useLocation();
    const headerRef = useRef(null);

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    useEffect(() => {
        const shrinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            }else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {  
            window.removeEventListener('scroll', shrinkHeader);
        }
    },[]);

    const active = headerNav.findIndex(nav => nav.path === pathName);

    const width = window.innerWidth;
    //console.log(width);

    return (
        <div ref={headerRef} className='header'>
            <div className="header__wrap container">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                {
                        width > 740 ? (
                            <ul className='header__nav'>
                                {
                                    headerNav.map( (nav, index) => (
                                        <li key={index} >
                                            <Link to={nav.path}>
                                                {nav.display}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        ) 
                        : 
                        (
                            <>
                                <i 
                                    className={click ? 'fas fa-times' : 'fas fa-ellipsis-v' } 
                                    onClick={handleClick}
                                />
                                <ul className={click ? "header__menus active" : "header__menus"}>
                                    {
                                        headerNav.map( (nav, index) => (
                                            <li key={index} onClick={handleClick}>
                                                <Link to={nav.path}>
                                                    {nav.display}
                                                </Link>
                                            </li>
                                        )) 
                                    }
                                 </ul>
                            </>
                        )
                    }
            </div>
        </div>
    )
}

export default Header
