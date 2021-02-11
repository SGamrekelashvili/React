
import React, { Component } from 'react';
import {Products,ProductCard,ProductImage,ProductInfo,H6,H5} from '../Styles/productStyle'


const SingleProduct = ({ ...props }) => (
            <ProductCard key={props.key}>
            <ProductImage>
                <img  src={props.image} alt={props.title} />
            </ProductImage>
            <ProductInfo>
                <H5>{props.title}</H5>
                <H6>{props.price}$</H6>
            </ProductInfo>
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
                price={val.price}
                key={idx}
                />
                )
            }
            </Products>
          );
    }
}

export default Product;