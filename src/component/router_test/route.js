import React from "react"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../footer/footer"
import Header from "../header/headerProduct";
import Home from "../home/home"
export default function MyRoute(){
 
    return (
        <div>
        
            <Router>
                
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    
                    <Route  path="/home">
                        <Home/>
                    </Route>     

                    <Route path="/product">                       
                            <Header/>
                    </Route>                         
                </Switch>
                <Footer/>
            </Router>
         
        </div>
    )
}