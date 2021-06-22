import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';
import '../header/header.css'

const useStylesAppBar = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


export default function HeaderAccount(){
    const classesAppbar=useStylesAppBar();
    const [inputSearch,setInputSearch]=useState("")
    const handlerSearch=(e)=>{
      setInputSearch(e.target.value)
    }
    // input=inputSearch;
     return(
        
        <div className={classesAppbar.root}>
          <h2 id="appbarHeader">Thông tin người dùng</h2>
            {/* <AppBar id='appbarHeader' position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classesAppbar.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  >
                  <MenuIcon />
                </IconButton>
                <Typography className={classesAppbar.title} variant="h6" noWrap>
                  Thông tin người dùng
                </Typography>
              </Toolbar>
            </AppBar> */}
        </div>
        
     )
}