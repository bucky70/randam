import logo from './logo.svg';
import React from 'react';
import './App.css';
import {FirstComponent} from './Components/LearningExamples/FirstComponent';
import {SecondComponent} from './Components/LearningExamples/SecondComponent';
import {Counter} from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}
class LearningExamples extends React.Component{
  render(){
    return(
<div className="LearningExamples">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
    );
  }
}


export default App;
