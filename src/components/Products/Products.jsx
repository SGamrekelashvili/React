import React, { Component } from 'react';
import Product from './product'
import CircleLoader from 'react-spinners/CircleLoader'


const API='https://fakestoreapi.com/products'

class ProductsCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:this.props.value,
            products:{},
            isLoading:true
        }
    }
    async componentDidMount(){
        console.log(this.state.value)
        if(this.state.value == "None"){
            const products = await (await fetch(`${API}/`)).json()
            this.setState({
                products:products,
                isLoading:false,
              })   
        }else{
            const products = await (await fetch(`${API}/category/${this.state.value}`)).json()
            this.setState({
                products:products,
                isLoading:false,
              })
        }

}
    render() { 
        const {isLoading,products}=this.state
        return (<>
                 {isLoading && <CircleLoader />}
                {!isLoading && <Product products={products} />}
        </>
          );
    }
}
 
export default ProductsCard;