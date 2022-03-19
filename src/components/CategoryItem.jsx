import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
  margin: 3px;
  height: 25vh;
  width: 20vw;
  position: relative;
  
`
const Image = styled.img`
    display: block;
    margin: auto;
    height: auto;
    max-height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: cover;
    ${mobile({height: "22vh"})};
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
`
const Button = styled.button`
  margin-top: 20px;
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>Check It Out</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem