import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link  } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router'
//import { createStore } from 'redux'

// const Login = ({ authenticate, isLogin }) => {
//   // return (
//   //   <div>
//   //     <div>
//   //       <p>You are now {isLogin ? 'logged in!' : 'logged out!'}</p>
//   //       <button onClick={authenticate}>
//   //         { isLogin ? 'Log out' : 'Log in'}
//   //       </button>
//   //     </div>
//   //   </div>
//   // )

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           HedgeHog React Service  
//         </p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <form id="login">
//           <font size="2">
//             loginID :&nbsp;&nbsp;
//             <input type="text" name="loginId" id="loginId"/>
//             <br></br>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password :&nbsp;&nbsp;
//             <input type="password" name="password" id="password"/>
//             <button onClick={() => 
//               this.check(
//                 document.forms.login.loginId.value, 
//                 document.forms.login.password.value
//               )}>
//             Login
//           </button>
//           </font>
//         </form>
//       </header>
//     </div>
//   )
  
// }


// const requireAuthentication = () => {
//   return class EnhancedComponent extends React.Component {

//     render() {
//       if (this.props.isLoggedIn === false) {
//         return <Redirect to={'/'} />
//       } 
//       return this.props.history.push('/home')
//     }
//   }
// }


// class App extends React.Component {

//   state = {
//     isLogin: false
//   }

//   handleLogin = () => {
//     this.setState((prevState) => {

//       console.log("isLogin ==> ", prevState.isLogin)

//       return {
//         isLoggedIn: !prevState.isLogin
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Switch>
//             <Route exact path="/" render={() => <Login isLogin={this.state.isLogin} authenticate={this.handleLogin} />} />
//             <Route path="/home" component={Home}/>
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App;









// const App = () => (
//   <BrowserRouter>
//     <div>
//     <Switch>
//       <Route exact path="/" component={Auth} />
//       {/* <Route path="/home" component={http://localhost:8080/login} /> */}
//       <Route path="/home" component={Home} loc="http://localhost:8080/login"/>
//     </Switch>  
//     </div>
//   </BrowserRouter>
// )

// class Auth extends React.Component {
//   render() {
//       return(
//         this.props.logged ?
//           <Switch>
//             <Redirect to={{
//               pathname: "/home",
//               // state: { from: this.props.location }
//             }}
//           />
//           </Switch> : 
//           <Route exact path="/" component={Login} /> 
//       );
//   }
// }

// function checkXXXXX(AA){

//   if(AA === 'OK'){

//     this.props.history.push('/home')

//     console.log("checkXXXXX_OK ==> ", AA);
//     alert("checkXXXXX_OK ==> ");
//   }
//   console.log("checkXXXXX ==> ", AA);
//   alert("checkXXXXX ==> ");
// }

// const axiosPost = (loginId, password) => {
//   return (
//     axios.post('http://localhost:8080/login', {
//       loginId: loginId,
//       password: password,
//     })
//       .then(
//         response => {
//           console.log("axiosPostだよ！！ ==> ", response.data);
//           alert("axiosPostだよ！！ ==> ", response.data);
//           return(response.data);
//         }
//       )
//       .catch(function(error) {
//         console.log('ERROR!! happend by Backend.', error)
//         alert("ERROR!! happend by Backend.");
//       })
//   )
// };

// export const createItem = (loginId, password, callback) => {
  
//   var AA = axiosPost(loginId, password)

//   if(AA === 'OK'){
//     return callback
//   }

// }


class Login extends React.Component {

  check(loginId, password){
    
    axios.post('http://localhost:8080/login', {
        loginId: loginId,
        password: password,
      }).then(response => {
        
        if(response.data === 'OK'){

          window.location.replace("/home");

          //this.props.logged = true
          //this.setState.logged = true
          //return this.props.history.push('/home')
          
        } else {
          alert("ログイン失敗");
        }

      }).catch(function(error) {
            console.log('ERROR!! happend by Backend.', error)
            alert("ERROR!! happend by Backend.");
          });

    // axios.post('http://localhost:8080/login', {
    //     loginId: loginId,
    //     password: password,
    //   }).then(response => {
    //     if(response.data === 'OK'){
    //       console.log("ここまで来ている2 ==> ", response.data);
    //       alert("ここまで来ている2 ==> ");
    //       this.props.history.push('/home')
    //     } 
    //   }).catch(error => {
    //     alert("Error", error);
    //   })

    
  
    // axios.post('http://localhost:8080/login', {
    //     loginId: loginId,
    //     password: password,
    //   }).then(function(response) {
        
    //     this.props.history.push('/home')
    //     // 返ってきたレスポンスはそのまま加工せずに callback で呼び出し元へ渡す
    //     //this.checkXX(response)
    //     console.log("ここまで来ている4 ==> ", response);
    //     console.log("ここまで来ている4 ==> ", response.data);
        
    //     withRouter(checkXXXXX(response.data))
        
    //     //this.checkXX(response.data)
    //     alert("ここまで来ている5 ==> ");
    //     //this.checkXX(response.data)
    //   }).catch(function(error) {
    //     console.log('ERROR!! happend by Backend.', error)
    //     alert("ERROR!! happend by Backend.");
    //   });

    // const SS = axios.post('http://localhost:8080/login', {
    //     loginId: loginId,
    //     password: password,
    //   }).then(Response => {
    //     console.log("ここまで来ている1 ==> ", Response)
    //     this.props.history.push('/home')
    //   })

    // const AA = fetch("http://localhost:8080/login")
    //   .then(response => {
    //     this.props.history.push('/home')
    //     //return response.json();
    //   })
    //     .catch(function(error) {
    //           console.log('ERROR!! happend by Backend.', error)
    //           alert("ERROR!! happend by Backend.");
    //     });

    // var request = new XMLHttpRequest();
 
    // request.open('POST', 'http://localhost:8080/login', true, loginId, password);
    // request.responseType = 'json';
 
    // request.onload = function () {
    //   var data = this.response;
    //   console.log(data);
    // };
 
    // request.send();

    
    // console.log("ここまで来ている1 ==> ", responseData);
    // alert("ここまで来ている1 ==> ", responseData);

    // new Promise((resolve, reject) => {
    //   const responseData = axiosPost(loginId, password);
    //   console.log('a')
    //   resolve(responseData)
    //   }).then(
    //     console.log("ここまで来ている4 ==> "),
    //     alert("ここまで来ている4 ==> "),
    //     this.props.history.push('/home')
    //   )

    // if(responseData === 'OK'){
    //   this.props.history.push('/home')
    //   console.log("ここまで来ている4 ==> ");
    //   alert("ここまで来ている4 ==> ");
    // }

    //this.checkXX('OK')

    // const promise1 = new Promise(function(resolve, reject) {
    //   const responseData = axiosPost(loginId, password);
    //   resolve(responseData);
    // });
    // promise1.then(value => {
    //   console.log("ここまで来ている4 ==> ", value)
    //   alert("ここまで来ている4 ==> ")
  
    //   this.checkXX(value)
    // });

    // var responseData = await axiosPost(loginId, password);
    // console.log("ここまで来ている1 ==> ", responseData)
    // alert("ここまで来ている1 ==> ")
    // //this.checkXX(responseData)
    // this.props.history.push('/home')
    
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
              <input type="text" name="loginId" id="loginId"/>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password :&nbsp;&nbsp;
              <input type="password" name="password" id="password"/>
              <button onClick={() => 
                this.check(
                  document.forms.login.loginId.value, 
                  document.forms.login.password.value
                )}>
              Login
            </button>
            </font>
          </form>
        </header>
      </div>
    )
  }
}


const App = () => (
  
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Menu} />
    </div>
  </BrowserRouter>

)

export default App






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


// export default App;
