import React from "react"
import {
    BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContentProduct from "./component/product/content"
import AdminHome from "./config-product/admin-home-page"
import Header from "./config-product/header/header"
import Footer from "./config-product/footer/footer"
export default function Render(){
    return (
        <Router>
            <Header/>
            <Switch>
            <Route
                    exact path='/'
                >
                    <AdminHome/>
                </Route>
                <Route
                    exact path='/home'
                >
                    <AdminHome/>
                </Route>
                <Route path='/product'>
                    <ContentProduct/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
} 