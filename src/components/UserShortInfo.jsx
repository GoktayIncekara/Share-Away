import styled from "styled-components"
// import {users} from "../data"
import React from 'react';
import {mobile} from "../responsive"
import jwt from 'jsonwebtoken';
import axios from "axios";
import { useState , useEffect } from "react";

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    z-index: 2;
`
const Container = styled.div`
    display:flex;
    justifyContent: flex-start;
    align-items: center;
`
const NameLabel = styled.h2`
`
const Wrapperuser =styled.div`
    padding: 2vh 1vh 5vh 1vh;
    margin: 8vh 0 1vh;
    display:flex;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18);
    ${mobile({flexDirection: "column"})};
    `

const UserShortInfo = ({username}) =>{

    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await axios.get( 'http://localhost:5000/user/' + username);
            setUser(res.data)
          } catch (error) {}
        };
        getUser()
    } , [username]) 
    
    console.log(user)

    return(
        <Wrapperuser>
            <Container>
                {/* <Avatar src={currentUser.profileImg}/> */}
                {/* <NameLabel>
                    {user.name} {user.surname}
                </NameLabel> */}
            </Container>
        </Wrapperuser>
    )

}
export default UserShortInfo