import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";

import {Marginer} from "../../components/marginer"
import { deviceSize } from "../../components/responsive";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
const TopSectionContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${TopSectionBackgroundImg});
    background-position: 0px -50px;
    background-size:cover;
    background-repeat:no-repeat;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38,70,83, 0.7);
    display:flex;
    flex-direction:column;

    @media screen and (max-width: ${deviceSize.laptop}px) {
        height: 95%;

    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 94%;

    }
`;

const TopSectionInnerContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: space-evenly;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        justify-content:center;
    }
`;

const Title = styled.h2`
    margin:0;
    font-size: 24px;
    color:#fff;
    line-height:1.7;

`;

const LogoContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin: 3em 0 0 2em;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin: 0em 0 0 0em;
        align-items:center;
    }
`;

const SloaganText = styled.h3`
    margin: 0em 0 0 1em;
    line-height:1.4;
    color:#fff;
    font-weight:500;
    font-size:30px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size:20px;
    }
`


export function TopSection(props){
    const { children } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo logoSize={isMobile ? 30 : 70} textSize={isMobile ? 29 : 30}/>
                        <Marginer direction="vertical" margin={5}/>
                        <SloaganText>Your One-Stop Solution</SloaganText>
                        <SloaganText>for Pet Happiness.</SloaganText>
                        <Marginer direction="vertical" margin={15}/>
                        <Button>join now</Button>
                    </LogoContainer>
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    );
}