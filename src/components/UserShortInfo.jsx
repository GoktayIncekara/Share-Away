import styled from "styled-components"
import {users} from "../data"
import React from 'react';

const Container = styled.div`
`
const Avatar = styled.div``

const NameLabel = styled.div`
    fontSize: 50px;
`


const UserShortInfo = ({userId}) =>{
    console.log("user id :", {userId});
    let currentUser = users.find(user => user.id === userId);
    console.log(currentUser);
    return(
        <Container>
            <Avatar src={currentUser.profileImg} />
            <NameLabel>
                {currentUser.name}
            </NameLabel>
        </Container>
    )

}
export default UserShortInfo