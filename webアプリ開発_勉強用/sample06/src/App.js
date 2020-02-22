import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
//import { createStore } from 'redux'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  </BrowserRouter>

)


class Login extends React.Component {
    
  check(loginId, password){
    if (loginId === "1111" && password === "password"){

      alert("ログイン成功");
      
      return (
        this.props.history.push('/home')
      );

    } else {
      alert("ログイン失敗　もう一度入力してくだいさい。");
    }

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            HedgeHog React Service  
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <form id="login">
            <font size="2">
              loginID :&nbsp;&nbsp;
              <input type="text" name="loginId" id="loginId" br/>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password :&nbsp;&nbsp;
              <input type="password" name="password" id="password"/>
              <button onClick={() => this.check(document.forms.login.loginId.value, document.forms.login.password.value)}>Login</button>
            </font>
          </form>
        </header>
      </div>
    )
  }
}

export default App



// const App = () => (
  
//   <BrowserRouter>
//     <div>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/home" component={Home} />
//     </div>
//   </BrowserRouter>

// )




// const Login = () => {


//   // var loginId = this.state.loginId;
//   // var password = this.state.password;

//   var loginId
//   var password

//   function check(){
//     //function check(loginId, password){
//       if (document.getElementById("loginId") === "1111" && document.getElementById("password") === "1111"){
//           //条件に一致する場合(メールアドレスが空の場合)
//           alert("ログイン成功");    //エラーメッセージを出力
  
//           return (
//             <form>
//               <label>
//                 Login : 
//                 <input type="text"/>
//               </label>
//               <input type="submit" value="Submit" />
//             </form>
        
//           )
  
//       }else{
//           //条件に一致しない場合(メールアドレスが入力されている場合)
//           alert("ログイン失敗　　"+ loginId + "   " + password);  
//       }
//   }


//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           HedgeHog React Service  
//         </p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <form>
//           <font size="3">
//               loginID :&nbsp;&nbsp;
//               <input type="text" name="loginId" id="loginId" value={loginId}/>
//             <br></br>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password :&nbsp;&nbsp;
//               <input type="text" name="password" id ="password" value={password}/>            
//             <input type="submit" onclick={check()}/>
//             </font>
//         </form>
//       </header>
//     </div>
//   );
// }



// const Home = () => {

//   <div>
//   <h1>Welcome</h1>
// </div>
// <input type="text" id="name">名前</input>


//   return (
//     <form>
//       <label>
//         Login : 
//         <input type="text"/>
//       </label>
//       <input type="submit" value="Submit" />
//     </form>

//   )
// }


//export default App;
