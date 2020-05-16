import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';

import Icon1 from './photo/1000.jpg'
import Icon2 from './photo/1001.jpg'
import Icon3 from './photo/1002.jpg'
import Icon4 from './photo/1003.jpg'
import Icon5 from './photo/1004.jpg'

import movie from './images/sample06.mp4'

const IconComponent = () =>{
  return (
    <div>
      <img src={Icon1} alt="" /><img src={Icon2} alt=""/><img src={Icon3} alt=""/><img src={Icon4} alt=""/>
      <img src={Icon2} alt=""/>
      <img src={Icon3} alt=""/>
      <img src={Icon4} alt=""/>
      <img src={Icon5} alt=""/>
    </div>
  )
}

export const Sample = () => {
  const style = {
      border: '3px solid black'
  };
  return (
      <div>
          <SplitPane split="vertical" minSize={10} defaultSize="40%">
          {/* <div style={style}>test1<br/>test1<br/></div>
          <div style={style}>test2<br/>test2<br/></div> */}
            {/* <img src={Icon1} style={style} alt="" /> */}
            {/* <IconComponent style={style} alt="" /> */}
          </SplitPane>
      </div>
  )
}

export const Sample2 = () => {

  return (
    <>
    {/* <div>
      <div className="background">
        <div className="styleSample1">
          <img src={Icon1} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon2} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon3} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon4} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon5} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon1} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon2} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon3} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon4} alt="" className="styleSample2"/>
        </div>
        <div className="styleSample1">
          <img src={Icon5} alt="" className="styleSample2"/>
        </div>  
      </div>
    </div> */}
      {/* <p>Brilliant Blue</p>
      <div class="video-wrap">
        <p>Brilliant Blue</p>
        <video id="bg-video" src={movie} autoplay loop muted>
          <img src={Icon1} alt="Placeholder"></img>
        </video>
      </div> */}
    <div>
      <div className="wrap">
	      <video id="bg-video" src={movie} autoPlay loop></video>
	      <div className="header-title">
		      <p>
			      コンテンツが入ります
		      </p>
	      </div>
      </div>
    </div>
    </>
  )
}


function App() {

  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };

  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <IconComponent />
        </header>
      </div> */}
      {/* <div style={style} >
        <Sample />
      </div> */}
      <Sample2 />
    </>
  );
}

export default App;
