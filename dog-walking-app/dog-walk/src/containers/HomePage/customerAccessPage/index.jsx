import React, { useState } from "react";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { AccountBox } from "../../../components/accountBox";
import { InnerPageContainer, PageContainer } from "../../../components/pageContainer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledInnerPageContainer = styled(InnerPageContainer)`
    margin: 4em 0 4em 0;
`;
 
export function CustomerAccessPage(props){

    const { action } = useParams();
    return (
        <PageContainer>
            <Navbar />
            <StyledInnerPageContainer>
                <AccountBox initialActive={ action }/>
            </StyledInnerPageContainer>
            <Footer />
        </PageContainer>

    );

}