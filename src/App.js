import React, { Component } from 'react';
import './app.scss';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/aboutUs';
import Home from './components/pages/home';
import AddLocation from './components/pages/AddLocation';
import Checkout from './components/pages/CheckoutPage';
import CheckoutSuccessful from './components/pages/CheckoutSuccessful';
import ContactUs from './components/pages/ContactUs';
import CustomTrip from './components/pages/CustomTrip';
import Discover from './components/pages/Discover';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import TripOverview from './components/pages/TripOverview';
import TripPage from './components/pages/TripPage';
import Profile from './components/pages/ProfilePage';
import LocationInner from './components/pages/LocationInner';
import HotelInner from './components/pages/HotelInner';
import Lodge from './components/pages/CustomizeScreenLodge';
import ExploreTrips from './components/pages/ExploreTrips';

import $ from 'jquery';
import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

/* .......layout......*/
import HomeLayout from './components/layouts/HomeLayout.js';
import innerPageLayout from './components/layouts/InnerPageLayout.js';

$(document).scroll(function() {

  var $nav = $(".fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  
})

$( document ).ready(function() {
$("#expandbtn").click(function() {
  $("#expandbtn").toggleClass("btn--expand");
  $("#expandDiv").toggleClass("mapExpand");
})


$(document).ready(function () {
  //$("#imgGallary").sliderPro({
   // width: 670,
   // height: 400,
   // orientation: "horizontal",
    //loop: false,
   // arrows: true,
    //buttons: false,
   // thumbnailsPosition: "right",
   // thumbnailPointer: true,
   // thumbnailWidth: 100,
  /*   breakpoints: {
      800: {
        thumbnailsPosition: "bottom",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
      },
      500: {
        thumbnailsPosition: "bottom",
        thumbnailWidth: 120,
        thumbnailHeight: 50,
      },
    }, */
//  })
})


})



const AppRoute = ({component:Component,layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout>
      <Component {...props}></Component>
    </Layout>
  )} />
)

function App() {
  return (
    <Router>
      <AppRoute path="/" exact layout={HomeLayout} component={Home} />

      <AppRoute path="/home" layout={HomeLayout} component={Home} />

      <AppRoute path="/about" layout={innerPageLayout} component={About} />

      <AppRoute path="/add-location" layout={innerPageLayout} component={AddLocation} />

      <AppRoute path="/Checkout" layout={innerPageLayout} component={Checkout} />

      <AppRoute path="/checkout-success" layout={innerPageLayout} component={CheckoutSuccessful} />

      <AppRoute path="/contact-us" layout={innerPageLayout} component={ContactUs} />

      <AppRoute path="/custom-trip" layout={innerPageLayout} component={CustomTrip} />

      <AppRoute path="/discover" layout={innerPageLayout} component={Discover} />

      <AppRoute path="/login" layout={innerPageLayout} component={Login} />

      <AppRoute path="/signUp" layout={innerPageLayout} component={SignUp} />

      <AppRoute path="/overview" layout={innerPageLayout} component={TripOverview} />

      <AppRoute path="/trip" layout={innerPageLayout} component={TripPage} />

      <AppRoute path="/profile" layout={innerPageLayout} component={Profile} />

      <AppRoute path="/profile" layout={innerPageLayout} component={Profile} />

      <AppRoute path="/location-inner" layout={innerPageLayout} component={LocationInner} />

      <AppRoute path="/hotel-inner" layout={innerPageLayout} component={HotelInner} />

      <AppRoute path="/screen-lodge" layout={innerPageLayout} component={Lodge} />

      <AppRoute path="/explore-trips" layout={innerPageLayout} component={ExploreTrips} />

    </Router>
  );
}

export default App;
