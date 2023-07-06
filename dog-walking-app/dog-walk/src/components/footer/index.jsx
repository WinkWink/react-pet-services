import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
    width: 100%;
    min-height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 2em 3em 0em;
    border-top: 0.6px solid #000;
    background-color: #2A9d8f;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding: 1em 1em 0em;
    }
`;


const TopContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-around;

    @media screen and (max-width: ${deviceSize.mobile}px) {
    }
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    &:not(:last-of-type){
        margin-right: 2%;
    }
`;

const BottomContainer = styled.div`
    height: 90px;
    display:flex;
    justify-content: space-between;
    border-top: 0.6px solid #000;
    padding: 20px 10px;
    align-items:center;

    @media screen and (max-width: ${deviceSize.mobile}px) {
    }
`;

const RightBottomContainer = styled.div`
    display: flex;
    `;

const LeftBottomContainer = styled.div`
    display:flex;
`;

const Title = styled.h2`
    margin:0 0 8px 0;
    color: #000;
    font-weight:700;
    font-size: 24px;
    color: #fff;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 17px;
    }
`;

const FLink = styled.a`
    text-decoration:none;
    font-weight: 500;
    cursor: pointer;
    color: #fff;

    &:not(:last-of-type){
        margin: 0 0 5px 0;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 12px;
    }
`;

const PrivacyText = styled.h6`
    color: #fff;
    font-size:11px;
    font-weight:400;
    margin:18px 0 0 20px;
`;

const SocialIcon = styled.div`
    color:#fff;
    font-size:20px;
    margin: 10px 0 0 0;
    transition: 200ms ease-in-out;
    
    &:not(:last-of-type){
        margin: 10px 10px 0 0;
    }

    &:hover{
        font-size: 24px;
    }

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 12px;

        &:hover{
            font-size: 14px;
        }
    }
`;

export function Footer(props){
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return(
        <FooterContainer>
            <TopContainer>
            <ContentContainer>
                <Title>Categories</Title>
                <FLink>Dogs</FLink>
                <FLink>Cats</FLink>
                <FLink>Dog Walking</FLink>
                <FLink>House Sitting</FLink>
                <FLink>Drop In Services</FLink>
                <FLink>Doggy Daycare</FLink>
            </ContentContainer>
            <ContentContainer>
                <Title>Access</Title>
                <FLink>Login</FLink>
                <FLink>Join Us</FLink>
                <FLink>Login As Specialist</FLink>
                <FLink>Become A Specialist</FLink>
            </ContentContainer>
            </TopContainer>
            <Marginer direction="vertical" margin={40} />
            <BottomContainer>
                <LeftBottomContainer>
                <Marginer direction="vertical" margin={40} />
                    <BrandLogo size="20" textSize={16}/>
                    <PrivacyText>&copy; All Rights reserved, 2023</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <SocialIcon>
                    <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    <SocialIcon>
                    <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>

    );
}
