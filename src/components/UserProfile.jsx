import styled from 'styled-components'
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import jwt from 'jsonwebtoken'
const Container = styled.div`
    position: fixed;
    top: 60px;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;

`
const InfoContainer = styled.div`
    margin: 20px 0 0 0;
    width: 90%;
    display:flex;
    flex-direction: column;

`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;  
    margin: 20px 0 0 0;
    
`



const PhotoContainer = styled.div`
    padding: 30px 40px;
    width: 50vh;
    border: 1px solid #444;
    margin: 20px;
    display: flex;
    align-itmes: center;
    flex-direction: column;
    justify-content: center;

    
`

const Avatar = styled.img`
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    background-color: red;
    margin: auto;
    z-index: 2;
`
const PhotoSettingText =styled.a `
    color: #333;
    margin-left:20px;
    margin-top: 10px;
    display: flex;
    align-items: flex-end;
    font-size: 15px;
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
    color: #333;
    text-decoration: underline;
    text-decoration-color: #35858B;
    margin-right: 10px;
`
const ConstContent= styled.h3`
    color: #222;
`

const MainTitle=styled.h1`
    color: #35858B;
    padding: 20px 15px;

`

const PasswordButton = styled.button`
    background-color: #4FBDBA;
    border: 2px solid #AEFEFF;
    padding-left: 45px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 20px;
    width: 80 vh;
    display:flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #072227;
        border: 2px solid #4FBDBA;
        color: #fff;
  }
`
 


const UserProfile = () => {
    const user = jwt.decode(localStorage.getItem('token'));
    console.log(user);
    return (
        <Container>
            <InfoContainer>
                    <ProfileContainer>

                    <PhotoContainer><Avatar src={"https://media-exp1.licdn.com/dms/image/C5603AQGoynHIFGkwbw/profile-displayphoto-shrink_200_200/0/1647507719335?e=1654128000&v=beta&t=Fs0gSVDjMe580iK3f0LUkpCnZUXgMpqdJvlUTDWBsEA"}/>
                    <div><PhotoSettingText>Change Profile Picture <EditIcon style={{fontSize:   "1.2rem", paddingLeft: "5px"}} /></PhotoSettingText></div>
                    </PhotoContainer>

                    <ConstInfoContainer>
                    <ConstInfo><ConstTitle>Name: </ConstTitle><ConstContent>{user.name} {user.surname}</ConstContent></ConstInfo>
                    <ConstInfo><ConstTitle>Username: </ConstTitle><ConstContent>{user.username}</ConstContent></ConstInfo>
                    <ConstInfo><ConstTitle>E-mail: </ConstTitle><ConstContent>{user.email}</ConstContent></ConstInfo>
                    <PasswordButton>Change Password <EditIcon style={{paddingLeft: "5px"}} /></PasswordButton>
                    </ConstInfoContainer>
                    </ProfileContainer>
                    
            </InfoContainer>

        </Container>

    )
}

export default UserProfile;