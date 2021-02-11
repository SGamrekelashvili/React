import React, { Component } from 'react';
import {Container,CenterItems,MainCenterDiv} from './components/Styles/CenterStyle';
import Center from './components/Center/Center';


export class App extends Component {

  render() { 
    return (
      <>
      <Container>
         <CenterItems>
         <MainCenterDiv>
                    <Center />
         </MainCenterDiv>
         </CenterItems>
      </Container>
      </>
   ); 
  }
}
 

