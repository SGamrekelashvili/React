import { Selector } from '../Selector';
import React,{ Component} from 'react'
import Products from '../Products/Products'
import CircleLoader from 'react-spinners/CircleLoader'
import {Productfilter,Sort,CollectionSort} from '../Styles/CenterStyle'



const API='https://fakestoreapi.com/products'


class Center extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoader:true,
            categories:[],
            value:["None"],
           };
    }

    async componentDidUpdate(){
      
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
             {isLoader && <CircleLoader />}
            {!isLoader && 
            <Productfilter>
            <h1> Our Products</h1>
            <Sort>
                <CollectionSort>
                    <label>Filter by:</label>
                    <Selector  width='300px' onValueChange={this.onChange} categories={categories} />
                </CollectionSort>
            </Sort>
            </Productfilter>
            }
            <Products key={value} value={value} />
            </>
        );
    }
}

export default Center;
