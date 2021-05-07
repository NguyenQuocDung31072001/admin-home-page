import './App.css';
import {BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom'
import Home from './page/home'
import LoginFunction from './page/loginFunction'
import NotFound from './page/notFound'
function App() {
  return (
    <div className="App">     
       <Router>        
           <Switch>
             <Route  path='/home' render={()=>{
               return (localStorage.getItem('email')!==null &&localStorage.getItem('user')!==null && localStorage.getItem('pass')!==null)?<Home/>:<Redirect to='/login'></Redirect>
             }}></Route>
              <Route exact path='/' render={()=>{
               return (localStorage.getItem('email')!==null &&localStorage.getItem('user')!==null && localStorage.getItem('pass')!==null)?<Home/>:<Redirect to='/login'></Redirect>
             }}></Route>

              <Route path='/login' render={()=>{
               return (localStorage.getItem('email')!==null &&localStorage.getItem('user')!==null && localStorage.getItem('pass')!==null)?<Redirect to='/home'></Redirect>:<LoginFunction/>
             }}></Route>

              <Route component={NotFound}></Route>
           </Switch>
         
       </Router>
    </div>
  );
}
export default App;
