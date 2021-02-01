import logo from './logo.svg';
import React from 'react';
import './App.css';
import {FirstComponent} from './Components/LearningExamples/FirstComponent';
import {SecondComponent} from './Components/LearningExamples/SecondComponent';
import {Counter} from './Components/Counter/Counter';
import AllEmployeesPage from './Employees/AllEmployeesPage';
import AllDefectsPage from './Defects/AllDefectsPage';
import { BrowserRouter as Router,Route} from 'react-browser-router';
import {Switch}from 'react-router';
import {NavLink} from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

class Links extends React.Component{
  render(){
    return(
      <nav>
        <NavLink exact activeClassName="active" to="/">About</NavLink><br/>
        <NavLink activeClassName="active" to="/defects">Issues</NavLink>
      </nav>
    );
  }
}
class App extends React.Component {
  render(){
    return (
     <Router>
       <div>
         <Links/>
         <Switch>
           <Route exact path="/" render={()=> <h1>This application is used to track the issues/defects</h1>}/>
           <Route path="/defects" component={AllDefectsPage}/>
           <Route component={NotFoundPage}></Route>
         </Switch>
       </div>
     </Router>
    );
  }
}
//we used props method to give a data to component
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
