import React, { Component } from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Faqs from "./Faqs";

export default class Application extends Component {
    state = {

    }

    render() {
        return (
            <div>
               <Header></Header> 
               <Main></Main>
               <Faqs></Faqs>
               <Footer></Footer>    
            </div>
        )
    }
}
