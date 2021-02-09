import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`;
const Center = styled.div`
    margin:0 auto;
    width:80%;
`
const Products = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px 20px 20px 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: red;
    z-index: 1;
`
const ProductHeader = styled.div`
    height: 257px;
    margin-bottom: 15px;
    >img{
    min-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
    }
`

const MainCenterDiv = styled.div`
    margin-top:5%;
    width:100%;
    height:500px;
    
`
const SelectorDiv = styled.div`
    width:40%;
    position:absolute;
    left:50%;
    top:0;
    transform:translate(-50%,0)
`
export {Container,Center,Products,ProductCard,ProductHeader,MainCenterDiv,SelectorDiv}



