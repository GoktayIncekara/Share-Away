import { Send } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #072227;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: white;
    ${mobile({textAlign: "center", fontSize: "40px"})};
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color: white;
    ${mobile({textAlign: "center", margin:"10px 5px 10px 5px"})};
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-right: none;
    ${mobile({width: "80%", marginTop: "30px"})};
`
const Input = styled.a`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`
const Report = () => {
  return (
      <Container>
          <Title>Report To Us</Title>
          <Desc>Please report us to any bad usage of the website!</Desc>
          <InputContainer>
              <Input href="mailto:shareaway@info.com" placeholder="What is the problem?"/>
              <Button>
                <Send/>
              </Button>
          </InputContainer>
      </Container>
  )
}

export default Report