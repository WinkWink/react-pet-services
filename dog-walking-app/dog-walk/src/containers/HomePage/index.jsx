import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import {InnerPageContainer, PageContainer} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { SpecialistAd } from "../../components/specialistAd";
import { Services } from "./services";
import { TopSection } from "./topSection";

const ContentContainer = styled.div`
    width:100%;
    max-width:${deviceSize.laptop}px;
    display:flex;
    flex-direction:column;
`;


export function HomePage(props){
    
    return (  
  
    <PageContainer>
        <TopSection>
            <Navbar useTransparent />
        </TopSection>
        <InnerPageContainer>
            <ContentContainer>
                <Services/>
            </ContentContainer>
            <Marginer direction="vertical" margin="5em"/>
            <SpecialistAd />  
            <Footer />
        </InnerPageContainer>
    </PageContainer>
    );
}