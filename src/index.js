import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Product} from './StateDemo';
import { EventComp } from './EventDemo';
import { SetStateDemo } from './setStateDemo';
import { Products } from './propDemo';
import { PropValidation } from './propValidation';
import AllDefectsPage from './Defects/AllDefectsPage';
import AllEmployeesPage from './Employees/AllEmployeesPage'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
// <Product></Product>,
//   document.getElementById('prodid')
// );
// ReactDOM.render(<EventComp></EventComp>,document.getElementById("App"));
// ReactDOM.render(<SetStateDemo></SetStateDemo>,document.getElementById("setstate"))
// ReactDOM.render(<Products></Products>,document.getElementById("prod"));
// ReactDOM.render(<PropValidation></PropValidation>,document.getElementById("prop"));
//ReactDOM.render(<AllDefectsPage></AllDefectsPage>,document.getElementById("root"));
//ReactDOM.render(<AllEmployeesPage></AllEmployeesPage>,document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
