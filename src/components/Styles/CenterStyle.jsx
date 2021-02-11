import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`;
const CenterItems = styled.div`
    margin:0 auto;
    width:80%;
`

const Productfilter = styled.nav`
    display: flex;
    > h1 {
        flex-grow: 1;
    };
`

const Sort = styled.div`
    display: flex;
    width: 236px

`
const CollectionSort = styled.div`
    width: 236px;
    display: flex;
    flex-direction: column;
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


export {Container,CenterItems,Productfilter,Sort,CollectionSort,MainCenterDiv,SelectorDiv}



