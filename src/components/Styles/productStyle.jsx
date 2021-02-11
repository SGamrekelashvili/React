import styled from 'styled-components'

const Products = styled.div`
	display: flex;
	flex-wrap: wrap;    
`
const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	
	padding: 2%;
	flex: 1 18%;
	
	background-color: #FFF;
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.25);

`
const ProductImage = styled.div`
>img{
    width: 100%;

}
`

const ProductInfo = styled.div`
	margin-top: auto;
	padding-top: 20px;
	text-align: center;
`
const H6 = styled.h6`
	color: #666;
	font-size: 14px;
`
const H5 = styled.h5`
font-weight: 500;
line-height: 1.7em;
`

export {Products,ProductCard,ProductImage,ProductInfo,H5,H6}
