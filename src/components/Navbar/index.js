import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Mobileicon,
    Nav,
    NavBtn,
    NavBtnLink,
    NavContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrolNav, setScrolNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 800) {
            setScrolNav(true);
        } else {
            setScrolNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrolNav={scrolNav}>
                    <NavContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            dolla
                        </NavLogo>
                        <Mobileicon onClick={toggle}>
                            <FaBars />
                        </Mobileicon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="discover"
                                    mooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Discover
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to="services"
                                    mooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup" mooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                    Sign Up
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin" mooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                Sign In
                            </NavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
