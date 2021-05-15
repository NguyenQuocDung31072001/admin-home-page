import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './footer.css';

export default function Footer(){

    return(
        <div className='footer'>
       <AppBar id='appbarFooter' position="static">
         <Toolbar>          
         </Toolbar>
       </AppBar>
     </div>
    )
}