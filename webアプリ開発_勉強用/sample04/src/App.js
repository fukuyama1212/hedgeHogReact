import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
//import React, { FunctionComponent, useEffect, useState } from 'react'
import { interval } from 'rxjs'

function App() {

  // useState https://ja.reactjs.org/docs/hooks-state.html
  const [date, setDate] = useState(new Date())
  interval(1000).subscribe(() => {setDate(new Date())})

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>    </header>
  </div>
  )

}

// https://reactapp.dev/posts/create-react-app-time
// FunctionComponentについて　https://qiita.com/daikoncl/items/a3806d8a8bf35f086487
// const App: FunctionComponent = () => {
//   const [date, setDate] = useState(new Date())

//   interval(1000).subscribe(() => {setDate(new Date())})

  // useEffect(() => {
  //   const subscription = interval(1000).subscribe(() => {
  //     setDate(new Date())
  //   })
  //   return () => {
  //     subscription.unsubscribe()
  //   }
  // }, [])

//   return (
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>    </header>
//   </div>
//   )
// }

export default App;
