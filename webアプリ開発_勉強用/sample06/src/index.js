import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


const btnSend = document.querySelector('#btn-clac');

// btnSend.addEventListener('click', evt => {

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('load', evt => {

//         if (xhr.status == 200) {
//             const result = JSON.parse(xhr.response);
//             const resultEle = document.querySelector('#result');
//             resultEle.value = result.sum;
//         }
//     });

//     xhr.addEventListener('error', evt => {
//         console.error(evt);
//     });

//     xhr.open('post', 'api/add', true);

//     const formEle = document.querySelector('#myform');
//     const formData = new FormData(formEle);

//     xhr.send(formData);

// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
