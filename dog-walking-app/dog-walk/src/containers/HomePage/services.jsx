import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ServiceCard } from "../../components/serviceCard";
import { Button } from "../../components/button";

const ServicesContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:flex-start;
`;

const Title =styled.h1`
    font-weight:900;
    color:#000;

`;

const ServicesWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;

`;

const BottomContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`;

const WarningText = styled.h3`
    color: rgba(100, 100, 100);
    font-weight:500;
`;
const ViewMoreBtn = styled(Button)`
    background-color:#f2f2f2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    color: #959595;

    &:hover{
        background-color:#f2f2f2;
        filter: contrast(0.8);
    }
`;

// waits a number of sections to show the services 3 seconds 
const wait = (num) => new Promise((rs) =>  setTimeout(rs,num));

export function Services(props){

    const [offeredServices, setServices] = useState([]);
    const [isLoading, setLoading] = useState(false);
    // conditional rendering, check if there are no services or if it is null 
    const isServicesEmpty = !offeredServices || (offeredServices.length === 0);

    const fetchServices = async () => {
        const response = await axios.get("http://localhost:9000/services").catch((err) => {
            console.log("Error: ", err);
        });

        await wait(3000);

        if(response){
            setServices(response.data);
        }

        setLoading(false);
    };

    // array, only run once once the component is mounted on the dom tree only once on component life cycle
    useEffect(() => {
        fetchServices();
    }, []); 

    return (
        <ServicesContainer>
            <Title>Most Used Services &amp; More</Title>
            <ServicesWrapper>
            {isServicesEmpty && !isLoading && (
            <WarningText>Loading!</WarningText>
            )}
            {isLoading && <WarningText>Loading...</WarningText>}
            {!isServicesEmpty &&
            !isLoading &&
            offeredServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
            ))}
            </ServicesWrapper>
            <BottomContainer>
            {!isServicesEmpty &&
            !isLoading &&
                <ViewMoreBtn>View More</ViewMoreBtn>
            }
            </BottomContainer>
        </ServicesContainer>
    );
}