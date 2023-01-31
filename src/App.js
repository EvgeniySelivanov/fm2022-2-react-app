import './App.css';
import React from 'react';
import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Column from './components/Grid/Column';
// import Ciao from './components/CiaoSection/Ciao'
// import FlexContainer from './components/FlexContainer';
import ImageWrapper from './components/ImageWrapper';

function App(props) {
  return (<>
    {/* <Container>
      <Row>
        <Column colNum={6}><Ciao username={'Elon'}/></Column>
        <Column colNum={6}><Ciao username={'Elon22'}/></Column>
        <Column colNum={12}><Ciao username={'Eldsfdon'}/></Column>
      </Row>
      <Row>
        <Column colNum={6}><Ciao username={'Elon'}/></Column>
        <Column colNum={6}><Ciao username={'Elon22'}/></Column>
        <Column colNum={12}><Ciao username={'Eldsfdon'}/></Column>
      </Row>
    </Container> */}
    {/* <FlexContainer justContent="space-between" alignItem="center" flexDir="column" flexWrap="nowrap" style={{border:'5px red solid',margin:'20px auto'}} title="title" data-ref="qwerty">
    <Ciao username='El2on'/>
    <Ciao username='El3on'/>
    <Ciao username='El4on'/>
    </FlexContainer>
    <FlexContainer justContent="center" alignItem="start"  flexWrap="wrap"  style={{border:'5px blue dotted'}}>
    <Ciao username='El23on'/>
    <Ciao username='El43on'/>
    <Ciao username='El46on'/>
    </FlexContainer> */}
    <Container>
      <Row>
        <Column colNum={6}>
          <ImageWrapper height='400px'>
            <img src='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg' alt='aa'/>
          </ImageWrapper>
        </Column>
        <Column colNum={6}>
          <ImageWrapper height='400px'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvS6g6vC6XjEHBpynzuZXeX1hUilxwvtfYVZEYBPvN2f-_8Mp8iOt3KJTqWiTzNVtJhw&usqp=CAU' alt='aa'/>
          </ImageWrapper>
        </Column>
      </Row>
    </Container>
  </>);
}
export default App;
