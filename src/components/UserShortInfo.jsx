import styled from "styled-components"
import React from 'react';
import {mobile} from "../responsive"

/* const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    z-index: 2;
` */
const Container = styled.div`
    display:flex;
    justifyContent: flex-start;
    align-items: center;
`
const NameLabel = styled.h3`
    margin: 9px 0 0 0;
`
const Wrapperuser =styled.div`
    padding: 4vh 1vh 5vh 1vh;
    margin: 8vh 0 1vh;
    display:flex;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18);
    ${mobile({flexDirection: "column"})};
    `
const SubTitle= styled.h3`
    margin: 10px 0 0 0;
    color:   rgb(53, 133, 139); ;  
`
const Img = styled.img`
    width: 3vw;
    height: 3vw;
    border-radius: 50%;
    margin: 15px 20px 0 0;
  
  `

const Empty = styled.span`
    margin: 0 0 0 20px;
`
const UserShortInfo = ({username}) =>{

    /* 
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
    
    */

    return(
        <Wrapperuser>
            <Container>
                {/* <Avatar src={currentUser.profileImg}/> */}
                <Img src={require('../pictures/user.png')} alt="" id="img" className="img" />
                <SubTitle>Shared by: </SubTitle>
                <Empty> </Empty>
                <NameLabel>{username} </NameLabel>
                
            </Container>
        </Wrapperuser>
    )

}
export default UserShortInfo