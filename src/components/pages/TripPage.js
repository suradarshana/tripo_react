import React,{Component} from 'react';
import { Tabs, Tab, Nav, Col, Row, Carousel } from 'react-bootstrap';

class TripPage extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
          <div>
          <section class="tripPage naviTopSpace">
              <div class="leftColomn">
                  <div class="innrpageContaint">
                      <div class="pageOverviewHeader">
                          <div class="d-flex justify-content-between align-items-center">
                              <fieldset class="form-group d-flex justify-content-between align-items-center mb-0">
                                  
                                  <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                      <h1 class=" pl-md-4 mb-0"><span class="orangeText">5 Days</span>
                                          Beaches and Views
                                      </h1>
                                  </div>
                              </fieldset>
                          </div>
                      </div>
                      <div class="carasolSlide mb-3">
                          <div role="region" id="carousel-2" aria-busy="false" class="carousel slide"
                              >
                              <Carousel  indicators={false} >
                       <Carousel.Item>
                      
                       <img src="https://picsum.photos/1024/480/?image=52" class="img-fluid w-100 d-block" width="1024" height="480" />
                       <div class="carousel-caption">
                          <div class="count">01 / 01</div>
                       </div>
                       </Carousel.Item>
                       <Carousel.Item>
                       <img src="https://picsum.photos/1024/480/?image=54" class="img-fluid w-100 d-block" width="1024" height="480" />
                       <div class="carousel-caption">
                          <div class="count">01 / 02</div>
                       </div>
                       </Carousel.Item>
                       <Carousel.Item>
                       <img src="https://picsum.photos/1024/480/?image=58" class="img-fluid w-100 d-block" width="1024" height="480" />
                       <div class="carousel-caption">
                          <div class="count">01 / 03</div>
                       </div>
                       </Carousel.Item>
                   </Carousel>
                          </div>
                          <div class="row sldeHed mb-3 mt-4">
                              <div class="leftCol col">
                                  <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          class="bi-star-fill b-icon bi">
                                          <g>
                                              <path
                                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                              </path>
                                          </g>
                                      </svg> <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                          alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          class="bi-star-fill b-icon bi">
                                          <g>
                                              <path
                                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                              </path>
                                          </g>
                                      </svg> <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                          alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          class="bi-star-fill b-icon bi">
                                          <g>
                                              <path
                                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                              </path>
                                          </g>
                                      </svg> <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                          alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          class="bi-star-fill b-icon bi">
                                          <g>
                                              <path
                                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                              </path>
                                          </g>
                                      </svg> <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                          alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                          class="bi-star-fill b-icon bi">
                                          <g>
                                              <path
                                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                              </path>
                                          </g>
                                      </svg></div>
                                  <div class="guestCount">5.0 ( 100+ Guests)</div>
                              </div>
                              <div class="text-right col"><span class="usdtext">Cost Per Person*</span> <span
                                      class="pptext">2.1K USD - 3.0K USD</span></div>
                          </div>
                      </div>
                      <div class="wtd">
                          <h3>Your Trip Overview</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                              in voluptate.</p>
                      </div>
                      <div class="wtd">
                          <h3>Travel Destinations</h3>
                          <div class="gridPorpuler d-flex justify-content-between align-items-center flex-wrap mb-5">
                              <article class="card mb-2"><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image"
                                      class="card-img-top" />
                                  
                                  <div class="card-body">
                                      
                                      
                                      <div class="gridR">
                                          <h3>Unawatuna</h3> <span>March 20 - March 28</span>
                                      </div>
                                  </div>
                                  
                                  
                              </article>
                              <article class="card mb-2" ><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image"class="card-img-top" />
                                  <div class="card-body">                                    
                                      <div class="gridR">
                                          <h3>Unawatuna</h3> <span>March 20 - March 28</span>
                                      </div>
                                  </div>
                                  
                                  
                              </article>
                              <article class="card mb-2" ><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image"
                                      class="card-img-top" />
                                  
                                  <div class="card-body">
                                      
                                      
                                      <div class="gridR">
                                          <h3>Hikkaduwa</h3> <span>March 20 - March 28</span>
                                      </div>
                                  </div>
                                  
                                  
                              </article>
                              <article class="card mb-2" >
                                <img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image" class="card-img-top" />
                                  
                                  <div class="card-body">
                                      
                                      
                                      <div class="gridR">
                                          <h3>Ella</h3> <span>March 20 - March 28</span>
                                      </div>
                                  </div>
                                  
                                  
                              </article>
                              <article class="card mb-2" ><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image"
                                      class="card-img-top" />
                                  
                                  <div class="card-body">
                                      
                                      
                                      <div class="gridR">
                                          <h3>Wilpattu</h3> <span>March 20 - March 28</span>
                                      </div>
                                  </div>
                                  
                                  
                              </article>
                          </div>
                      </div>
                  </div>
                  <div class="inclusions border-top-w border-bottom border-top py-4">
                      <div class="innrpageContaint">
                          <div><button type="button" class="btn btnEmpty btn-secondary"><span class="bulet"></span>Customize
                                  the Itinerary and make it Your own Trip.
                              </button></div>
                      </div>
                  </div>
                  <div class="inclusions border-bottom border-top">
                      <div class="innrpageContaint">
                          <div class="distinations">
                              <div class="container">
                                  <div class="row">
                                      <div class="tlBorder col-12">
                                          <h2 class="h2 mt--17"><span class="h2bulet"></span> <label>Arrival in
                                                  Colombo</label></h2>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                                      Tue March 05
                                                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h3 class="h3"><span class="h3bulet"></span><label>Your Lodge</label></h3>
                                          <p><span class="Xboxicon pr-3"><img src={process.env.PUBLIC_URL + '/images/car.svg'} /></span> Pick up and Drop
                                              from
                                              <a href="#" class="text-underline">Colombo Airport</a> to
                                              <a href="" class="text-underline">Hikkaduwa</a></p>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                                      Change Transport
                                                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                      </div>
                                      <div class="tlBorder pb-0 col-12">
                                          <h2 class="h2"><span class="h2bulet"></span><label>3 Nights in Hikkaduwa</label>
                                          </h2>
                                          <p>Tue Mar 05 - Thu Mar 08</p>
                                          <div class="imgtag">
                                              <div class="pplimg"><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} /></div>
                                              <label>Hikkaduwa</label> <span>Down South, Sri Lanka</span>
                                              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                                                  Incididunt Lorem. Lorem Ipsum Sit Amet Consectetur Adipisicing Elit Sed Do
                                                  Eiusmod Tempor Incididunt Lorem.</p>
                                          </div>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary"><svg
                                                          viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-dash b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z">
                                                              </path>
                                                          </g>
                                                      </svg> <span class="plm">04 Days</span> <svg viewBox="0 0 16 16"
                                                          width="1em" height="1em" focusable="false" role="img" alt="icon"
                                                          xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                          class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                          <hr class="my-4" />
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h3 class="h3"><span class="h3bulet"></span><label>Your Stay</label></h3>
                                          <div class="packageList2">
                                              <div class="packageOne">
                                                  <div class="row">
                                                      <div class="col-12">
                                                          <div class="row boxstyle">
                                                              <div class="col-12">
                                                                  <div class="carasolPackage mb-3">
                                                                      <div role="region" id="carousel-3" aria-busy="false"
                                                                          class="carousel slide"
                                                                          >
                                                                          <Carousel  indicators={false} >
                              <Carousel.Item>
                               <img
                                        src={process.env.PUBLIC_URL + '/images/tripslider.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                  </Carousel.Item>
                                                                  <Carousel.Item>
                                    
                                   <img
                                        src={process.env.PUBLIC_URL + '/images/tripslider2.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                </Carousel.Item>
                                                                <Carousel.Item><img
                                        src={process.env.PUBLIC_URL + '/images/tripslider3.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                   </Carousel.Item>
                                                                   </Carousel>


                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="col-sm-12 col-md-7">
                                                                  <div class="gridR">
                                                                      <h2>Citrus by Cinnamon</h2>
                                                                  </div>
                                                                  <p class="packageDate">March 20 - March 2</p>
                                                                  <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                                                                      Sed Do Eiusmod Tempor Incididunt…</p>
                                                                  <p class="canclname">Flexible Cancellation*</p>
                                                                  <p><a href="" class="text-underline">More Information</a>
                                                                  </p>
                                                                  <div
                                                                      class="fgroup p-0 d-xs-block d-sm-flex justify-content-between">
                                                                      <button type="button"
                                                                          class="btn bgWplusbtn mr-3 bg-hover-effect btn-secondary"><svg
                                                                              viewBox="0 0 16 16" width="1em" height="1em"
                                                                              focusable="false" role="img" alt="icon"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="currentColor" class="bi-dash b-icon bi">
                                                                              <g>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z">
                                                                                  </path>
                                                                              </g>
                                                                          </svg> <span class="plm px-3">03 Night</span> <svg
                                                                              viewBox="0 0 16 16" width="1em" height="1em"
                                                                              focusable="false" role="img" alt="icon"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="currentColor" class="bi-plus b-icon bi">
                                                                              <g>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                                                  </path>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                                                  </path>
                                                                              </g>
                                                                          </svg></button> <button type="button"
                                                                          class="btn bgWplusbtn bg-hover-effect btn-secondary"><span
                                                                              class="plm pl-0">Change Hotel</span> <svg
                                                                              viewBox="0 0 16 16" width="1em" height="1em"
                                                                              focusable="false" role="img" alt="icon"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="currentColor" class="bi-plus b-icon bi">
                                                                              <g>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                                                  </path>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                                                  </path>
                                                                              </g>
                                                                          </svg></button></div>
                                                              </div>
                                                              <div class="col-sm-7 col-md-5">
                                                                  <div class="review"><span class="request">Availabilty on
                                                                          Request</span></div>
                                                                  <hr class="separator" />
                                                                  <div class="price"><span class="packn">
                                                                          Affordable Package,
                                                                          <br />Regular Single Room
                                                                      </span> <span class="bld-text">250 USD</span></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h2 class="h2"><span class="h2bulet"></span><label>Add a New Destintion</label></h2>
                                          <p>Please select your Destination to visit first</p>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                                      Add a Location
                                                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h2 class="h2"><span class="h2bulet"></span><label>Dpearture from Hikkaduwa to
                                                  Unawatuna</label></h2>
                                          <p>Tue Mar 08</p>
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h3 class="h3"><span class="h3bulet"></span><label>Your Transport</label></h3>
                                          <p><span class="Xboxicon pr-3"><img src={process.env.PUBLIC_URL + '/images/car.svg'} /></span> Pick up and Drop
                                              from
                                              <a href="#" class="text-underline">Colombo Airport</a> to
                                              <a href="" class="text-underline">Hikkaduwa</a></p>
                                          <p class="mt-5 gray">Please Select your mode of Transport here</p>
                                          <div
                                              class="Xbox boxbg mb-3 border rounded p-3 d-flex justify-content-start align-items-start">
                                              <div class="Xboxicon mr-3"><img src={process.env.PUBLIC_URL + '/images/carf.png'} class="mxw" /></div>
                                              <div class="Xboxtext">
                                                  <h4>Request Pickup and Drop off</h4>
                                                  <p class="price">55 USD - 75 USD</p>
                                                  <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod
                                                      Tempor Incididunt Lorem.</p>
                                              </div>
                                          </div>
                                          <div
                                              class="Xbox mb-3 border p-3 rounded d-flex justify-content-start align-items-start">
                                              <div class="Xboxicon mr-3"><img src={process.env.PUBLIC_URL + '/images/tick.svg'}/></div>
                                              <div class="Xboxtext">
                                                  <h4>Own Arrangement</h4>
                                                  <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod
                                                      Tempor Incididunt Lorem.</p>
                                              </div>
                                          </div>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                                      Select Option
                                                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                      </div>
                                      <div class="tlBorder pb-0 col-12">
                                          <h2 class="h2"><span class="h2bulet"></span><label>3 Nights in Unawatuna</label>
                                          </h2>
                                          <p>Tue Mar 05 - Thu Mar 08</p>
                                          <div class="imgtag">
                                              <div class="pplimg"><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} /></div>
                                              <label>Unawatuna</label> <span>Down South, Sri Lanka</span>
                                              <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                                                  Incididunt Lorem. Lorem Ipsum Sit Amet Consectetur Adipisicing Elit Sed Do
                                                  Eiusmod Tempor Incididunt Lorem.</p>
                                          </div>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary"><svg
                                                          viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-dash b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z">
                                                              </path>
                                                          </g>
                                                      </svg> <span class="plm">04 Days</span> <svg viewBox="0 0 16 16"
                                                          width="1em" height="1em" focusable="false" role="img" alt="icon"
                                                          xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                          class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                          <hr class="my-4" />
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h3 class="h3"><span class="h3bulet"></span><label>Your Stay</label></h3>
                                          <div class="packageList2">
                                              <div class="packageOne">
                                                  <div class="row">
                                                      <div class="col-12">
                                                          <div class="row boxstyle">
                                                              <div class="col-12">
                                                                  <div class="carasolPackage mb-3">
                                                                      <div role="region" id="carousel-3" aria-busy="false"
                                                                          class="carousel slide"
                                                                          >
                                                                           <Carousel  indicators={false} >
                              <Carousel.Item>
                               <img
                                        src={process.env.PUBLIC_URL + '/images/tripslider.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                  </Carousel.Item>
                                                                  <Carousel.Item>
                                    
                                   <img
                                        src={process.env.PUBLIC_URL + '/images/tripslider2.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                </Carousel.Item>
                                                                <Carousel.Item><img
                                        src={process.env.PUBLIC_URL + '/images/tripslider3.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                   </Carousel.Item>
                                                                   </Carousel>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="col-sm-12 col-md-7">
                                                                  <div class="gridR">
                                                                      <h2>Citrus by Cinnamon</h2>
                                                                  </div>
                                                                  <p class="packageDate">March 20 - March 2</p>
                                                                  <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                                                                      Sed Do Eiusmod Tempor Incididunt…</p>
                                                                  <p class="canclname">Flexible Cancellation*</p>
                                                                  <p><a href="" class="text-underline">More Information</a>
                                                                  </p>
                                                                  <div
                                                                      class="fgroup p-0 d-xs-block d-sm-flex justify-content-between">
                                                                      <button type="button"
                                                                          class="btn bgWplusbtn mr-3 bg-hover-effect btn-secondary"><svg
                                                                              viewBox="0 0 16 16" width="1em" height="1em"
                                                                              focusable="false" role="img" alt="icon"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="currentColor" class="bi-dash b-icon bi">
                                                                              <g>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z">
                                                                                  </path>
                                                                              </g>
                                                                          </svg> <span class="plm px-3">03 Night</span> <svg
                                                                              viewBox="0 0 16 16" width="1em" height="1em"
                                                                              focusable="false" role="img" alt="icon"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="currentColor" class="bi-plus b-icon bi">
                                                                              <g>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                                                  </path>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                                                  </path>
                                                                              </g>
                                                                          </svg></button> <button type="button"
                                                                          class="btn bgWplusbtn bg-hover-effect btn-secondary"><span
                                                                              class="plm pl-0">Change Hotel</span> <svg
                                                                              viewBox="0 0 16 16" width="1em" height="1em"
                                                                              focusable="false" role="img" alt="icon"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              fill="currentColor" class="bi-plus b-icon bi">
                                                                              <g>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                                                  </path>
                                                                                  <path fill-rule="evenodd"
                                                                                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                                                  </path>
                                                                              </g>
                                                                          </svg></button></div>
                                                              </div>
                                                              <div class="col-sm-12 col-md-5">
                                                                  <div class="review"><span class="request">Availabilty on
                                                                          Request</span></div>
                                                                  <hr class="separator" />
                                                                  <div class="price"><span class="packn">
                                                                          Affordable Package,
                                                                          <br />Regular Single Room
                                                                      </span> <span class="bld-text">250 USD</span></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="tlBorder col-12">
                                          <h2 class="h2"><span class="h2bulet"></span><label> from Unawatuna to Colombo
                                                  Airport</label></h2>
                                          <p>Tue Mar 08</p>
                                      </div>
                                      <div class="tlBorder tlnoBorder pb-0 col-12">
                                          <h3 class="h3"><span class="h3bulet"></span><label>Your Transport</label></h3>
                                          <p><span class="Xboxicon pr-3"><img src={process.env.PUBLIC_URL + '/images/car.svg'} /></span> Pick up and Drop
                                              from
                                              <a href="#" class="text-underline">Colombo Airport</a> to
                                              <a href="" class="text-underline">Hikkaduwa</a></p>
                                          <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start"
                                              >
                                              
                                              <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                      class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                                      Change Transport
                                                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                                          role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor" class="bi-plus b-icon bi">
                                                          <g>
                                                              <path fill-rule="evenodd"
                                                                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                              </path>
                                                              <path fill-rule="evenodd"
                                                                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                              </path>
                                                          </g>
                                                      </svg></button>
                                                  
                                                  
                                                  
                                              </div>
                                          </fieldset>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="inclusions border-top">
                      <div class="agreeSec">
                          <div class="innrpageContaint">
                              <div class="redioBtn">
                                  <fieldset class="form-group" >
                                      
                                      <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                          <div class="custom-control custom-radio">
                                              <input type="radio" name="some-radios" autocomplete="off" class="custom-control-input" value="A" id="rd1" />
                                              <label class="custom-control-label" for="rd1">I Agree
                                                  to the Terms and Conditions of this Trip plan itenary and heaby lorem ipsum
                                                  dolor.</label></div>
                                          
                                          
                                          
                                      </div>
                                  </fieldset>
                              </div>
                              <div class="agreeBtnSet">
                                  <div class="ovrBtn nobg mr-3 bg-hover-effect pspc"><span>OVERVIEW</span></div>
                                  <div class="ovrBtn mr-3 border-hover-effect"><span>SAVE TRIP</span> <span><svg
                                              viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                              alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                              class="bi-plus b-icon bi">
                                              <g>
                                                  <path fill-rule="evenodd"
                                                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                  </path>
                                                  <path fill-rule="evenodd"
                                                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                  </path>
                                              </g>
                                          </svg></span></div>
                                  <div class="ovrBtn border-hover-effect"><span>Book Now</span> <span><svg viewBox="0 0 16 16"
                                              width="1em" height="1em" focusable="false" role="img" alt="icon"
                                              xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                              class="bi-plus b-icon bi">
                                              <g>
                                                  <path fill-rule="evenodd"
                                                      d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                  </path>
                                                  <path fill-rule="evenodd"
                                                      d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                                  </path>
                                              </g>
                                          </svg></span></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="map_section">
                  <div class="map_posi">
                      <div id="expandDiv" class="mapWrapper"><button id="expandbtn" class="expandBtn bg-hover-effect"><svg
                                  viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  class="bi-chevron-left b-icon bi">
                                  <g>
                                      <path fill-rule="evenodd"
                                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                      </path>
                                  </g>
                              </svg> <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  class="bi-chevron-right b-icon bi">
                                  <g>
                                      <path fill-rule="evenodd"
                                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                      </path>
                                  </g>
                              </svg>Expand
                          </button> <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.17912595028!2d80.10152201810556!3d6.127689066038924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa!5e0!3m2!1sen!2slk!4v1595000118561!5m2!1sen!2slk"
                              allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0" 
                              width="100%" height="800px" frameborder="0"></iframe></div>
                      <div class="mapFooter d-flex justify-content-between"><button type="button"
                              class="btn bgWplusbtn border-hover-effect btn-secondary">
                              Book Now
                              <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                                  <g>
                                      <path fill-rule="evenodd"
                                          d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                      </path>
                                      <path fill-rule="evenodd"
                                          d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                                  </g>
                              </svg></button> <button type="button" class="btn bgWplusbtn nobg bg-hover-effect btn-secondary">
                              Inquire Now
                              <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-envelope b-icon bi">
                                  <g>
                                      <path fill-rule="evenodd"
                                          d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z">
                                      </path>
                                      <path
                                          d="M.05 3.555C.017 3.698 0 3.847 0 4v.697l5.803 3.546L0 11.801V12c0 .306.069.596.192.856l6.57-4.027L8 9.586l1.239-.757 6.57 4.027c.122-.26.191-.55.191-.856v-.2l-5.803-3.557L16 4.697V4c0-.153-.017-.302-.05-.445L8 8.414.05 3.555z">
                                      </path>
                                  </g>
                              </svg></button></div>
                  </div>
              </div>
          </section>


          <section class="tripPagefooter">
              <div class="container">
                  <div class="suggested">
                      <div class="innrpageContaint">
                          <div class="wtd">
                              <h2>Suggested Destinations</h2>
                              <div class="gridsuggested d-flex justify-content-between align-items-center flex-wrap mb-5">
                                  <article class="card mb-2"><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image" class="card-img-top" />
                                      
                                      <div class="card-body">
                                          
                                          
                                          <div class="gridR">
                                              <h3>Hikkaduwa</h3> <span>Down South, Galle</span>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                  tempor incididunt ut labore et dolore magna aliqua.
                                                  Ut enim ad minim veniam
                                              </p>
                                          </div>
                                      </div>
                                      
                                      
                                  </article>
                                  <article class="card mb-2"><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image" class="card-img-top" />
                                      
                                      <div class="card-body">
                                          
                                          
                                          <div class="gridR">
                                              <h3>Ella</h3> <span>Down South, Galle</span>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                  tempor incididunt ut labore et dolore magna aliqua.
                                                  Ut enim ad minim veniam
                                              </p>
                                          </div>
                                      </div>
                                      
                                      
                                  </article>
                                  <article class="card mb-2"><img src={process.env.PUBLIC_URL + '/images/populer.jpg'} alt="Image" class="card-img-top" />
                                      
                                      <div class="card-body">
                                          
                                          
                                          <div class="gridR">
                                              <h3>Wilpattu</h3> <span>Down South, Galle</span>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                  tempor incididunt ut labore et dolore magna aliqua.
                                                  Ut enim ad minim veniam
                                              </p>
                                          </div>
                                      </div>
                                      
                                      
                                  </article>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
    }
}

export default TripPage;
