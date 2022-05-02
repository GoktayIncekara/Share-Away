import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import React from "react"



const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SliderContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin: 10px;
    height: 50%;
    background-color: white;
    overflow: hidden;
`
const Wrapper = styled.div`
    top:0;
    height: 100 vw;
    display: flex;

`

const Arrow = styled.div`
    width: 40px;
    height: 40px;
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
   height: 100%;
   display: flex;
   align-items: center;
   object-fit: contain;
   transform:translateX( ${props => props.slideIndex * -100}vw);
`
const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    max-height: 100%;
    background-color: lemonchiffon;
    max-width: 100%;
    flex: 1;
`
const Image = styled.img`
        width: 60%;
        display: block;
`


const ProductSlider = ({product}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : (parseInt(product.imgArray.length)-1));
        }
        else {
            console.log("now slideind:", parseInt(slideIndex))
            setSlideIndex(slideIndex < (parseInt(product.imgArray.length)-1) ? slideIndex + 1 : 0);
            console.log("slideind:", parseInt(slideIndex))
        }
    };
  return (
    <Container>
        <SliderContainer>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper >
            {product.imgArray.map((item) => (
              <Slide slideIndex= {slideIndex}> 
                <ImgContainer>
                        <Image src={item.img}/>
                </ImgContainer>
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

export default ProductSlider