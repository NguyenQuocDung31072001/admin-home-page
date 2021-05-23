import React from "react"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminHome from "../../admin-home-page"
import ContentProduct from "../content/contentProduct"
import Header from "../header/headerProduct"
import Footer from "../footer/footer"
import Home from "../home/home"

export default function MyRoute(){
 
    return (
        <div>
        
            <Router>
                
                <Switch>
                    {/* <Route exact path="/" component="AdminHome"/> */}
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