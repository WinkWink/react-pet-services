import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
    width:100%;
    height:85px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color: ${({ useTransparent}) => useTransparent ? "transparent " : "#264653"};
`;

const AccessibilityContainer = styled.div`
    display:flex;
    height:100%;
    align-items:center;
    margin:0.4em 1em 0 0;
`;

const AnchorLink = styled(Link)`
    font-size:${({ size }) => size ? size + "px" : "17px"};
    color:#fff;
    cursor:pointer;
    text-decoration:none;
    outline:none;
    transition: all 200ms ease-in-out;
    margin: 0em 0 0 0;

    &:hover{
        filter: contrast(0.6);
    }
`;

const Pipe = styled.div`
    min-height:80%;
    width: 1px;
    background-color:#fff;

`;

export function Navbar(props){
    const {useTransparent} = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return (
        <NavbarContainer useTransparent={useTransparent}>
            <BrandLogo/>
            <AccessibilityContainer>
                <AnchorLink size={isMobile ? 10: 17}>Pet Specialist Portal</AnchorLink>
                <Marginer direction="horizontal" margin="20px"/>
                <Pipe/>
                <Link to="/customer/access/signup">
                    <Button size={isMobile ? 10: 15}>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin="24px"/>
                <AnchorLink to="/customer/access/signin" size={isMobile ? 10: 17}>Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    );
}