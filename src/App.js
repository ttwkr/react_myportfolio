import React,{Component} from 'react';
import TopTitle from './component/top_title'
import MiddleTitle from './component/middle_title'
import ContentContainer from "./component/content_container"
import './App.css';
import './script'

class App extends Component {

  state = {
    TopTitle:"My PortFolio",
    MiddleTitle:"< Welcome to My World />"
  }

  render(){
    let state = this.state
    return (
      <div className="App">
        <TopTitle title={state.TopTitle}></TopTitle>
        <MiddleTitle title={state.MiddleTitle}></MiddleTitle>
        <ContentContainer></ContentContainer>
      </div>
    );
  }
}

export default App;
