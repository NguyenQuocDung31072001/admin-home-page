import React from 'react';
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  const [email,setEmail] =useState('')
    const [user,setUser] =useState('')
    const [Pass, setPass] = useState('')
    const history=useHistory();
    function setEmailAccount(e){
        setEmail(e.target.value)
    }
    function setUsername(e){
        setUser(e.target.value)
    }
    function setPassword(e){
        setPass(e.target.value)
    }

    const toHome=()=>{
        if(user !=='' && Pass !=='' && email !==null){
            if(email.indexOf('@gmail.com')===(email.length-10) && email.indexOf('@gmail.com')!==-1){
                localStorage.setItem('email',email)
                localStorage.setItem('user',user)
                localStorage.setItem('pass',Pass)   
                history.replace('/home')
            }
            else{
                setEmail('')
                setUser('')
                setPass('')
            }
        
        }
        else{
            setEmail('')
            setUser('')
            setPass('')
        }
    }


  return (
    <div className={classes.root}>
      
      <TextField id="standard-basic" label="example@gmail.com" type='text' value={email} onChange={setEmailAccount}/><br/>
       <TextField id="filled-basic" label="username" type='text' value={user} onChange={setUsername} /><br/>
       <TextField id="outlined-basic" label="password" type='text' value={Pass} onChange={setPassword} /><br/>
      <Button variant="contained" color="primary" onClick={toHome}>
         login     
      </Button>
    </div>
  );
}
