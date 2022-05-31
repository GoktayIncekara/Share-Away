import styled from 'styled-components'
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import jwt from 'jsonwebtoken';
import PersonalAdDashboard from './PersonalAdDashboard';
import PhotoUpload from './ProfilePhotoUpload';

const Container = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
   

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px;
`
const InfoContainer = styled.div`
    margin: 10px 0 0 0;
    display:flex;
    flex-direction: column;

`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;  
    padding: 30px;
    margin-top: 20px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`


const ConstInfoContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 30px;
    width: 50 vh;
    

`
const ConstInfo=styled.div`
    display: flex;
    align-items: flex-end;
    margin: 15px;
    padding: 5px;
    
`
const ConstTitle= styled.h2`
    color: #35858B;;
    /*text-decoration: underline;
    text-decoration-color: #35858B;*/
    margin-right: 10px;
`
const ConstContent= styled.h3`
    color: #222;
`



const PasswordButton = styled.button`

    padding-left: 45px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 20px;
    width: 80 vh;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 5px;
    background-color: #072227;
    border: 2px solid #4FBDBA;
    color: #fff;
    &:hover {
        background-color: #4FBDBA;
        border: 2px solid #AEFEFF;
        
  }
`



const UserProfile = () => {
    const user = jwt.decode(localStorage.getItem('token'));
    console.log(user);
    return (
        <Container>
        <Wrapper>
            <InfoContainer>
                <ProfileContainer>

                    <PhotoUpload/>
                    <ConstInfoContainer>
                        <ConstInfo><ConstTitle>Name: </ConstTitle><ConstContent>{user.name} {user.surname}</ConstContent></ConstInfo>
                        <ConstInfo><ConstTitle>Username: </ConstTitle><ConstContent>{user.username}</ConstContent></ConstInfo>
                        <ConstInfo><ConstTitle>E-mail: </ConstTitle><ConstContent>{user.email}</ConstContent></ConstInfo>
                        <PasswordButton>Change Password <EditIcon style={{paddingLeft: "5px"}} /></PasswordButton>
                    </ConstInfoContainer>

                </ProfileContainer>     
            </InfoContainer>
            
            <PersonalAdDashboard/>

        </Wrapper>
        </Container>

    )
}

export default UserProfile;