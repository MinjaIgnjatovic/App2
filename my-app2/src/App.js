import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//import rootReducer from './reducers';

import Header from './components/header.js';
import About from './components/about.js';
import Bottomfotter from './components/bottomfooter.js';
import Client from './components/client.js';
import Komentari from './components/komentari.js';
import KomentarForm from './components/komentarform.js';
import Footer from './components/footer.js';
import Portfolio from './components/portfolio.js';
import Service from './components/servicee.js';

//const store=createStore(()=>[],{},applyMiddleware());
//const store=createStore(rootReducer,initialState,applyMiddleware());

export default class App extends Component {
  render() {
    return (
     
   <div id="top" data-spy="scroll">
 
        <Header> </Header>
        
        <About> </About>
        <Service> </Service>
        <Portfolio> </Portfolio>
        <KomentarForm>  </KomentarForm>
        <Komentari> </Komentari>
        <Client> </Client>
        <Footer> </Footer>
        <Bottomfotter> </Bottomfotter>
      
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.flexslider.js"></script>
      <script src="js/jquery.inview.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8HeI8o-c1NppZA-92oYlXakhDPYR7XMY"></script>
      <script src="js/script.js"></script>
      <script src="contactform/contactform.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></script>
    </div>
  

    )
  }
}



