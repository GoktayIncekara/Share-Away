import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import {mobile} from "../responsive"

const Container = styled.div`

`
const CategoriesContainer = styled.div`
    display: flex;
    padding: 50px 200px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection: "column"})};
`
const Title = styled.h1`
    font-weight: 900;
    font-size: 900;
    color: #35858B;
    text-align: center;
`

const Categories = () => {
  return (
    <Container>
        <Title> Categories </Title>
        <CategoriesContainer>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </CategoriesContainer>
        
    </Container>
  )
}

export default Categories