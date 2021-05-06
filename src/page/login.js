import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:''
        }
    }
    changeHanler=(event)=>{

        this.setState({input:event.target.value});

    }
    
    toHome=()=>{
        // let history=useHistory();
        // history.push('/home')
    //   if(this.state.input=='123'){
    //     localStorage.setItem('token','123');
    //   }
    }
    haha=()=>{
        console.log('haha')
    }
    render(){
        return (
            <div>
                    <input type='text' onChange={this.changeHanler}></input>
                    <button onClick={this.toHome}>login</button>
                    {/* <Link to='/home'style={{backgroundColor:'yellow', color:'while',textDecoration:'none'}} onClick={this.toHome}>login</Link> */}
            </div>
        )
    }
}
export default Login;