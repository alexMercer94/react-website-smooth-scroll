import React from 'react';
import { FaBars } from 'react-icons/fa';
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
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <Mobileicon onClick={toggle}>
                        <FaBars />
                    </Mobileicon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navbar;
