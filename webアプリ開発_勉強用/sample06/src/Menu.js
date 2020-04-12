import React, {　FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './Menu.css'
import Home from './Application/Home.js';
import { interval } from 'rxjs'

const liStyle = {
    display: 'inline',
    width: '100px'
}

class page1 extends React.Component {
    render() {
    
        return(
            <>
            <div>
                <h1>page1</h1>1枚目のページです
            </div>
            </>
        )
    }
}
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>

const Menu = () => (
    <BrowserRouter>
        <div className="text-center Menu-header text-white">
            <ul style={{display: 'flex'}}>
              <Time className="text-black"></Time>
              <li style={liStyle}><Link to='/home'>Home</Link></li>
              <li style={liStyle}><Link to='/page1'>page1</Link></li>
              <li style={liStyle}><Link to='/page2'>page2</Link></li>
            </ul>
        </div>
        <header className="Menu text-center">
            <Route exact path='/home' component={Home} />
            <Route path='/page1' component={page1} />
            <Route path='/page2' component={page2} />
        </header>
    </BrowserRouter>
)



const Time: FunctionComponent = () => {

  const [date, setDate] = useState(new Date())

  interval(1000).subscribe(() => {setDate(new Date())})

  useEffect(() => {
    const subscription = interval(1000).subscribe(() => {
      setDate(new Date())
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <div>
      <p>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>
  </div>
  )
}

export default Menu
