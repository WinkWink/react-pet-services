import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";

import PetBestie from "../../images/hugs.png";
import { Button } from "../button";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";

const SpecialstAdContainer = styled.div`
    width:100%;
    height: 500px;
    display:flex;
    background-color: #264653;
    align-items:center;
    justify-content:center;
`;

const ContentContainer = styled.div`
    width:100%;
    display: flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
`;

const SloganContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;
`;

const SloganText = styled.h2`
    margin: 0 0 0 1.45em;
    font-size:20px;
    color: #fff;
    font-weight:700;

`;

const StandoutImg = styled.div`
    width: 24em;

    img{
        width: 100%;
        height: 100%;
        margin: 3em 0 0 0;
    }
`;

export function SpecialistAd(props){
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile});

    return(
        <SpecialstAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo size={50} textSize={25}/>
                    <Marginer direction="vertical" margin="1em"/>
                    <SloganContainer>
                        <SloganText>
                            Are you a pet specialist?
                        </SloganText>
                        <Marginer direction="vertical" margin="0.5em"/>
                        <SloganText>
                            Join our Team of Pet Besties!
                        </SloganText>
                    </SloganContainer>
                    <Marginer direction="vertical" margin={40}/>
                    <Button>Join Today</Button>
                </SloganContainer>
                <StandoutImg>
                    <img src={PetBestie} alt="join as pet bestie" />
                </StandoutImg>
            </ContentContainer>
        </SpecialstAdContainer>
    );
}