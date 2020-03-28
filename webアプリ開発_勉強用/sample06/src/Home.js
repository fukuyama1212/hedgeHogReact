import React, { Component, useState } from 'react'

import { BrowserRouter as Router, Switch, BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import {TransitionGroup, CSSTransition, Transition} from 'react-transition-group'
import './Home.css'

const liStyle = {
    display: 'inline',
    width: '100px'
}

const MenuBar = ({children, style}) => {

    console.log("children ==> ", children);
    console.log("style ==> ", style);
    
    // return(
    //     <div style={style}>
    //         <div>
    //             <ul style={{display: 'flex'}}>
    //                 <li style={liStyle}><Link to='/home'>top</Link></li>
    //                 <li style={liStyle}><Link to='/page1'>page1</Link></li>
    //                 <li style={liStyle}><Link to='/page2'>page2</Link></li>
    //                 <li style={liStyle}><Link to='/page3'>page3</Link></li>
    //                 <p><Link to="/pageXXX">pageXXX</Link></p>
    //             </ul>
    //             {children}
    //         </div>
    //     </div>
    // )
    
    return(
        <div>
            <ul style={{display: 'flex'}}>
                <li style={liStyle}><Link to='/home'>top</Link></li>
                <li style={liStyle}><Link to='/page1'>page1</Link></li>
                <li style={liStyle}><Link to='/page2'>page2</Link></li>
                <li style={liStyle}><Link to='/page3'>page3</Link></li>
                <p><Link to="/pageXXX">pageXXX</Link></p>
            </ul>
            {children}
        </div>
    )
}

const pageXXX = () => {
  
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }

const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>

class page1 extends React.Component {
    render() {
    
        return(
            <div>
                <h1>page1</h1>1枚目のページです
            </div>
        )
    }
}
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
const page404 = () => <div><h1>404</h1>存在しないページです</div>

// const Home = ({location}) => {

//     const currentkey = location.pathname.split("/")[1] || "";

//     console.log("currentkey ==> ", currentkey);
    
//     // return (
//     //     <MenuBar style={{width: '500px', textAlign: 'left'}}>
//     //         <TransitionGroup >
//     //             <CSSTransition key={currentkey} classNames='fade' timeout={800} >
//     //                 <div style={{marginLeft: '50px', position: 'absolute'}}>
//     //                     <Switch location={location}>
//     //                         <BrowserRouter>
//     //                             <Route path='/home' exact component={topPage}/>
//     //                             <Route path='/page1' exact component={page1}/>
//     //                             <Route path='/page2' exact component={page2}/>
//     //                             <Route path='/page3' exact component={page3}/>
//     //                             <Route exact component={page404}/>
//     //                             <Route path="/pageXXX" component={pageXXX} />
//     //                         </BrowserRouter>
//     //                     </Switch>
//     //                 </div>
//     //             </CSSTransition>
//     //         </TransitionGroup>
//     //     </MenuBar>
//     // )

//     return(
//         <MenuBar style={{width: '500px', textAlign: 'left'}}>
//             <BrowserRouter>
//                 <Route exact path='/home' component={topPage}/>
//                 <Route path='/page1' component={page1}/>
//                 <Route path='/page2' component={page2}/>
//                 <Route path='/page3' component={page3}/>
//                 <Route exact component={page404}/>
//                 <Route path="/pageXXX" component={pageXXX} />
//             </BrowserRouter>
//         </MenuBar>
//     )
// }


const Home3 = () => (
    <MenuBar style={{width: '500px', textAlign: 'left'}}>
        <BrowserRouter>
            <div className="text-center bg-dark text-white">
                <Route exact path='/home' component={topPage}/>
                <Route path='/page1' component={page1}/>
                <Route path='/page2' component={page2}/>
                <Route path='/page3' component={page3}/>
                <Route path="/pageXXX" component={pageXXX} />
            </div>
        </BrowserRouter>
    </MenuBar>

)

const Home = () => (
    <BrowserRouter>
        <div className="text-center Home-header text-white">
            <ul style={{display: 'flex'}}>
                <li style={liStyle}><Link to='/home'>Home</Link></li>
                <li style={liStyle}><Link to='/page1'>page1</Link></li>
                <li style={liStyle}><Link to='/page2'>page2</Link></li>
            </ul>
        </div>
        <header className="Home text-center">
            <Route exact path='/home' component={topPage} />
            <Route path='/page1' component={page1} />
            <Route path='/page2' component={page2} />
        </header>
    </BrowserRouter>
)



//----------------------------------------------------------------------------------------

const TAB_TYPES = {
    HOME: 'home2',
    ABOUT: 'about',
    OTHERS: 'others'
  };
  
  const tabData = [
    {
      text: 'Home2',
      type: TAB_TYPES.HOME
    },
    {
      text: 'About',
      type: TAB_TYPES.ABOUT
    },
    {
      text: 'Others',
      type: TAB_TYPES.OTHERS
    }
  ];
  
  const Tabs = ({ currentTabType, tabData, onClick }) => (
    <ul className="tabs">
      {tabData.map(tab => (
        <li
          className={currentTabType === tab.type ? 'active' : ''}
          onClick={() => onClick(tab.type)}
        >
          {tab.text}
        </li>
      ))}
    </ul>
  );
  
  class Home2 extends React.Component {
    state = {
      currentTabType: TAB_TYPES.HOME
    };
  
    changeTab = tabType => {
      this.setState({ currentTabType: tabType });
    }
  
    renderContents() {
      if (this.state.currentTabType === TAB_TYPES.HOME) {
        return <div>Homeの時の中身</div>;
      } else if (this.state.currentTabType === TAB_TYPES.ABOUT) {
        return <div>Aboutの時の中身</div>;
      } else if (this.state.currentTabType === TAB_TYPES.OTHERS) {
        return <div>OTHERSの時の中身</div>;
      }
      return null;
    }
  
    render() {
      return (
        <div>
          <Tabs
            currentTabType={this.state.currentTabType}
            tabData={tabData}
            onClick={this.changeTab}
          />
          <main>{this.renderContents()}</main>
        </div>
      );
    }
  }

export default Home
