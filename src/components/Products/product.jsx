
import React, { Component } from 'react';
import {Products,ProductCard,ProductHeader} from '../Styled'


const SingleProduct = ({ ...props }) => (
        <ProductCard key={props.id}>
        <h1>{props.title}</h1>
        <ProductHeader>
            <img width={50} height={50} alt={props.title} src={props.image}></img>
        </ProductHeader>
        </ProductCard>
  )

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { products:this.props.products };
    }
    render() { 
        const { products } = this.state
        return (
            <Products>
            {
                products.map((val,idx) => 
                <SingleProduct
                image={val.image}
                title={val.title}
                key={idx}
                />
                )
            }
            </Products>
          );
    }
}

export default Product;