import styled from "styled-components"
import React from "react"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const SlideContainer = styled.div`
    width : 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`
    
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    transform:translateX( ${props => props.slideIndex * -300}px);
    
`

const ImgContainer = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 300px;
    height: 300px;
    
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

const ProductSlider = ({product}) => {
    const [slideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : (parseInt(product.imgArray.length)-1));
        }
        else {
            setSlideIndex(slideIndex <  (parseInt(product.imgArray.length)-1)  ? slideIndex + 1 : 0);
        }
    };
    return(    
    <Container>
        <SlideContainer>
        <Arrow direction="left" onClick={() => handleClick("left")}><ArrowLeftOutlined/></Arrow>
            <Wrapper slideIndex= {slideIndex}>
                {product.imgArray.map((item) => (
                <ImgContainer>
                    <Image src= {item.img} />
                </ImgContainer>))}
            </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}><ArrowRightOutlined/></Arrow>
        </SlideContainer>
    </Container> )
}

export default ProductSlider;