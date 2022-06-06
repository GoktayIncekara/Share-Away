import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, YouTube } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"
import React from 'react';

const Container = styled.div`
    color: white;
    display: flex;
    background-color: #35858B;
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "black"})};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items: center;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Share Away</Logo>
            <Description>This website is created by Share Away developer team in IZTECH</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <LinkedIn />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>İzmir
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}} />+90 555 555 55 55
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>shareaway@contact.com
                </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer