import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from '../../images/logos/logo.png';
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

// container for logo
const BrandLogoContainer = styled.div`
    display:flex;
    align-items:center;
`;

const LogoImage = styled.div`
    width: ${( { size } ) => size ? size + "px" : "1em"};
    height: ${({ size }) => size ? size + "px" : "1em"};
    margin: 1em 0.2em 1em 1em;
    img{
        width:100%;
        height:100%; 
        margin: 0em 0em 0em 0em;
    }
`;

const LogoTitle = styled.h2`
    margin:1em 0 0 1em;
    font-size: ${({ size }) => size ? size + "px" : "10px"};
    color: ${({ color }) => color ? color : "#fff"};
    font-weight: 900;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin:0em 0 0 0em;
    }
`;

const StyledLink = styled(Link)`
    text-decoration:none;
`;

export function BrandLogo(props){
    const { logoSize, textSize, color, hideLogo } = props;
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return (
        <BrandLogoContainer >
        {!hideLogo && <StyledLink to="/"><LogoImage size={logoSize}>
          <img src={LogoImg} alt="logo"/>
        </LogoImage></StyledLink>}
        <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>Pawfect Solutions</LogoTitle>
        </StyledLink>
        </BrandLogoContainer>
    );
}