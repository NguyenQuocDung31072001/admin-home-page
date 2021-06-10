import React from "react"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../footer/footer"
import Home from "../home/home"
import Product from "../product/indext"
import ContextProvider from "../../context/contextProvider"
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
                    
                    {/* <Route path="/home" component="Home"/> */}
                    
                    <Route path="/product">
                        <ContextProvider>
                            <Product/>
                        </ContextProvider>
                    </Route>                         
                </Switch>
                <Footer/>
            </Router>
         
        </div>
    )
}