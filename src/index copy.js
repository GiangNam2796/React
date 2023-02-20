import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function formatName(xxx){
//   return xxx.firstname + '' + xxx.lastname;
// }

// function getGreeting(user){
//   if (user){
//     return <h1> hello, {formatName(user)}!</h1>
//   }
//   return <h1>hello, stranger.</h1>
// }


// const user = {
//   firstname: 'Nam',
//   lastname: 'Giang'
// };
// const element = (
//   <div>
// <h1>
//       Hello, {formatName(user)}!
//   </h1>,
//   <h2>
//     hello, stranger
//   </h2>
//   </div>
  
// );



// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
function welcome(props){
  return <h1>hello, {props.name}</h1>
}
const props = {
  name: 'Giang'
}

const element = <h1>{welcome(props)}</h1>

  ReactDOM.render(
    element,
    document.getElementById('root')
  );


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const Element = <h1> Hello, world </h1>
// ReactDOM.render(Element, document.getElementById('root'));
