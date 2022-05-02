import styled from "styled-components"
import {users} from "../data"
import React from 'react';
import {mobile} from "../responsive"

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
const Wrapper =styled.div`
    padding: 2vh 1vh 5vh 1vh;
    margin: 10vh 0 1vh;
    display:flex;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18);
    ${mobile({flexDirection: "column"})};
    `


const UserShortInfo = ({userId}) =>{
    console.log("user id :", {userId});
    let currentUser = users.find(user => user.id === userId);

    console.log(currentUser);
    return(
        <Wrapper>
            <Container>
                <Avatar src={currentUser.profileImg}/>
                <NameLabel>
                    {currentUser.name} {currentUser.surname}
                </NameLabel>
            </Container>
        </Wrapper>
    )

}
export default UserShortInfo