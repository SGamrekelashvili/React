import React, { Component } from 'react';
import {Container,Center,MainCenterDiv,SelectorDiv} from './components/Styled';
import ProductsCard from './components/Products/Products';
import CircleLoader from 'react-spinners/CircleLoader'
import { Selector } from './components/Selector';

const API='https://fakestoreapi.com/products'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoader:true,
      categories:[],
      value:["None"],
     }
  }

  async componentDidMount(){
    const categories = await (await fetch(`${API}/categories`)).json()
    categories.map(c => 
      this.setState({ categories: [...this.state.categories, {value: c, label: c} ] })
    )
    this.setState({
      isLoader:false,
  })}

  onChange = (Value) =>{
    this.setState({
      value:Value,
    })
  }
  render() { 
    const {isLoader,categories,value}=this.state
    return (
      <>
      <Container>
         <Center>
         <SelectorDiv>
         {!isLoader && 
         <>
         <Selector  width='200px' onValueChange={this.onChange} categories={categories} />
         </>
          }
         </SelectorDiv>
         <MainCenterDiv>
         {isLoader && <CircleLoader />}
         {!isLoader && 
         <>
         <ProductsCard key={value} value={value} />
         </>
          }
         </MainCenterDiv>
         </Center>
      </Container>
      </>
   ); 
  }
}
 

