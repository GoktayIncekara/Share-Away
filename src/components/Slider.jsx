import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import React from "react"
import {sliderItems} from "../data"
import { Button, makeStyles} from '@material-ui/core';
import {mobile} from "../responsive"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#4FBDBA",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        

        '&:hover': {
            backgroundColor: "#072227",
            border: '2px solid #4FBDBA',
            color:"white",
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "160px"
        }

    }  
}));
const Container = styled.div`

`
const ExplanationContainer = styled.div`
    width: auto;
    height: 60vh;
    display: flex;
    padding: 10px;
    align-items: center;
    background-color: #35858B;
    flex-direction: column;
    display: none;
    ${mobile({display: "block", marginTop:"160px"})};
`
const ExplanationTitle = styled.h1`
    font-size: 70px;
    color: white;
    margin-right: 20px;
    text-align: center;
`
const ExplanationDesc = styled.p`
    margin: 15px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`
const SliderContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})};
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX( ${props => props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
    width: 60vw;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 30px;
`
const Title = styled.h1`
    font-size: 70px;
    color: white;
`
const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`
const Text =styled.div`
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

`

const Slider = () => {
    const classes = useStyles();
    const [slideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
    <Text>
        <ExplanationContainer>
            <ExplanationTitle>Share Away</ExplanationTitle>
            <ExplanationDesc>What you don't need anymore might be what someone else is looking for</ExplanationDesc>
        </ExplanationContainer>
    </Text>
        <SliderContainer>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex= {slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>

                        <InfoContainer>
                        <Text>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </Text>    

                        <Link style={{ textDecoration: 'none' }} to={`/addProduct`}>
                        <Button 
                            variant="contained"
                            size="large"
                            className={classes.button}
                        >
                        Start Helping
                        </Button>
                        </Link>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </SliderContainer>
    </Container>
  )
}

export default Slider