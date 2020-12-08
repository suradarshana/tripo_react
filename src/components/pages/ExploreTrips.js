import React,{Component} from 'react';
import { Tabs, Tab, Carousel } from 'react-bootstrap';

class ExploreTrips extends Component{
    constructor(props){
        super();  
    }

    

    
    render(){
        return(
    <div >
        
        <section class="innerHeader mb-0">
            <div class="container">
                <h1>Explore Trips</h1>
            </div>
        </section>



        <section class="exploreTrips">
   <div class="d-md-flex justify-content-between align-items-start">
      <div class="leftColmn col-sm-12 col-lg-3 p-0 ">
         <div class="searchBox border-bottom">
            <div role="group" class="input-group searchInput input-group-md">
               
               <div class="sIcon input-group-prepend">
                  <div class="input-group-text">
                     <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-search b-icon bi">
                        <g>
                           <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path>
                           <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                        </g>
                     </svg>
                  </div>
               </div>
               <input type="search" placeholder="Search" class="form-control" id="ID__BVID__18" />
            </div>
         </div>
         <div class="filterhotelarrow">
            <span class="fltext">Filter Hotel</span> 
            <span class="downArrow bg-hover-effect">
               <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-down b-icon bi">
                  <g>
                     <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                  </g>
               </svg>
            </span>
         </div>
         <div class="leftBottom">
            <div class="range">
               <h3 class="d-block mb-0">Select Your Price Range</h3>
               <span class="price-range">100$ - 400$</span> 
               <div class="rangeSlider"><input id="range-2" type="range" min="0" max="5" step="0.5" class="custom-range" /></div>
            </div>
            <div class="duration">
               <h3>Duration</h3>
               <fieldset class="form-group" id="ID__BVID__20">
                  <div tabindex="-1" role="group" class="bv-no-focus-ring">
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__21"/><label class="custom-control-label" for="ID__BVID__21">3 - 4 Days</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios" autocomplete="off" class="custom-control-input" value="B" id="ID__BVID__22"/><label class="custom-control-label" for="ID__BVID__22">5 - 10 Days</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__23"/><label class="custom-control-label" for="ID__BVID__23">1+ Week</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios" autocomplete="off" class="custom-control-input" value="B" id="ID__BVID__24"/><label class="custom-control-label" for="ID__BVID__24">1 - 4 Week</label></div>
                     
                  </div>
               </fieldset>
            </div>
            <div class="locationType">
               <h3>Location Type</h3>
               <fieldset class="form-group" id="ID__BVID__25">
                  
                  <div tabindex="-1" role="group" class="bv-no-focus-ring">
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios1" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__26"/><label class="custom-control-label" for="ID__BVID__26">Beach Side</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios1" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__27"/><label class="custom-control-label" for="ID__BVID__27">Down South</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios1" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__28"/><label class="custom-control-label" for="ID__BVID__28">Up Country</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios1" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__29"/><label class="custom-control-label" for="ID__BVID__29">Hill Side</label></div>
                     <div class="custom-control custom-radio"><input type="radio" name="some-radios1" autocomplete="off" class="custom-control-input" value="A" id="ID__BVID__30"/><label class="custom-control-label" for="ID__BVID__30">Up North</label></div>
                     
                  </div>
               </fieldset>
            </div>
         </div>
      </div>
      <div class="rightColomn col-sm-12 col-lg-9 p-0">
         <div class="btnCarousel border-bottom border-left py-3">
            <div>
               <div class="d-md-flex justify-content-between align-items-center">
                  <div class="tpD mb-sm-3 mb-md-0"><span>Type of Trip</span></div>
                  <div role="region" id="carousel-1" aria-busy="false" class="carousel slide"  content-visible-up="">
                   
                    <Carousel  indicators={false} >
                              <Carousel.Item>
                           <div class="carousel-caption">
                              
                              <button type="button" class="btn sldBtn btn-btn addBtn">
                                 View All 
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Beaches 
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Historical
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Up-Country
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 The Wild
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                           <div class="carousel-caption">
                              
                              <button type="button" class="btn sldBtn btn-btn">
                                 View All
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Beaches
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Historical
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Up-Country
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 The Wild
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                           </div>
                           </Carousel.Item>
                           <Carousel.Item>
                        
                           <div class="carousel-caption">
                              
                              <button type="button" class="btn sldBtn btn-btn">
                                 View All
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Beaches
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Historical
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Up-Country
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 The Wild
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                           </div>
                           </Carousel.Item>
                           <Carousel.Item>
                           <div class="carousel-caption">
                              
                              <button type="button" class="btn sldBtn btn-btn">
                                 View All
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Beaches
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Historical
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 Up-Country
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                              <button type="button" class="btn sldBtn btn-btn">
                                 The Wild
                                 <span class="closeicon">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle b-icon bi">
                                       <g>
                                          <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                                          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                                       </g>
                                    </svg>
                                 </span>
                              </button>
                           </div>
                        
                        </Carousel.Item>
                        </Carousel>
                     
                  </div>
               </div>
            </div>
         </div>
         <div class="packageList">
            <div class="packageOne">
               <div class="row text">
                  <div class="col-sm-12 col-md-4">
                     <div class="carasolPackage mb-3">
                        <div role="region" id="carousel-3" aria-busy="false" class="carousel slide">
                           <div id="carousel-3___BV_inner_" role="list" class="carousel-inner">
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
                  </div>
                  <div class="col-sm-12 col-md-5">
                     <h2>5 DAYS<br />
                        Mountains and Viewa
                     </h2>
                     <p class="packageDate">March 20 - March 28</p>
                     <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</p>
                     <p class="citylist">
                        <span>
                           Ella 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>
                           Nuwara Eliya 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>Badulla</span>
                     </p>
                  </div>
                  <div class="col-sm-12 col-md-3">
                     <div class="review">
                        <h3>5.5 Reviews</h3>
                        <div class="star">
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                        </div>
                     </div>
                     <hr class="separator" />
                     <div class="price"><span class="bld-text">1300 USD</span> <span class="cost">Estimated Cost Per Person</span></div>
                     <hr class="separator" />
                     <div class="gobtn">
                        <a href="#" class="border-hover-effect btn btn-primary card-button">
                           Go to Plan 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"></path>
                                 <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                              </g>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="packageOne">
               <div class="row text">
                  <div class="col-sm-12 col-md-4">
                     <div class="carasolPackage mb-3">
                        <div role="region" id="carousel-3" aria-busy="false" class="carousel slide" >
                           <div id="carousel-3___BV_inner_" role="list" class="carousel-inner">
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
                  </div>
                  <div class="col-sm-12 col-md-5">
                     <h2>5 DAYS<br />
                        Mountains and Viewa
                     </h2>
                     <p class="packageDate">March 20 - March 28</p>
                     <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</p>
                     <p class="citylist">
                        <span>
                           Ella 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>
                           Nuwara Eliya 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>Badulla</span>
                     </p>
                  </div>
                  <div class="col-sm-12 col-md-3">
                     <div class="review">
                        <h3>5.5 Reviews</h3>
                        <div class="star">
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                        </div>
                     </div>
                     <hr class="separator" />
                     <div class="price"><span class="bld-text">1300 USD</span> <span class="cost">Estimated Cost Per Person</span></div>
                     <hr class="separator" />
                     <div class="gobtn">
                        <a href="#" class="border-hover-effect btn btn-primary card-button">
                           Go to Plan 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"></path>
                                 <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                              </g>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="packageOne">
               <div class="row text">
                  <div class="col-sm-12 col-md-4">
                     <div class="carasolPackage mb-3">
                        <div role="region" id="carousel-3" aria-busy="false" class="carousel slide" >
                           <div id="carousel-3___BV_inner_" role="list" class="carousel-inner">
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
                  </div>
                  <div class="col-sm-12 col-md-5">
                     <h2>5 DAYS<br />
                        Mountains and Viewa
                     </h2>
                     <p class="packageDate">March 20 - March 28</p>
                     <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</p>
                     <p class="citylist">
                        <span>
                           Ella 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>
                           Nuwara Eliya 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>Badulla</span>
                     </p>
                  </div>
                  <div class="col-sm-12 col-md-3">
                     <div class="review">
                        <h3>5.5 Reviews</h3>
                        <div class="star">
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                        </div>
                     </div>
                     <hr class="separator" />
                     <div class="price"><span class="bld-text">1300 USD</span> <span class="cost">Estimated Cost Per Person</span></div>
                     <hr class="separator" />
                     <div class="gobtn">
                        <a href="#" class="border-hover-effect btn btn-primary card-button">
                           Go to Plan 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"></path>
                                 <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                              </g>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="packageOne">
               <div class="row text">
                  <div class="col-sm-12 col-md-4">
                     <div class="carasolPackage mb-3">
                        <div role="region" id="carousel-3" aria-busy="false" class="carousel slide" >
                           <div id="carousel-3___BV_inner_" role="list" class="carousel-inner">
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
                  </div>
                  <div class="col-sm-12 col-md-5">
                     <h2>5 DAYS<br />
                        Mountains and Viewa
                     </h2>
                     <p class="packageDate">March 20 - March 28</p>
                     <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</p>
                     <p class="citylist">
                        <span>
                           Ella 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>
                           Nuwara Eliya 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-dash b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"></path>
                              </g>
                           </svg>
                        </span>
                        <span>Badulla</span>
                     </p>
                  </div>
                  <div class="col-sm-12 col-md-3">
                     <div class="review">
                        <h3>5.5 Reviews</h3>
                        <div class="star">
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                              <g>
                                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                              </g>
                           </svg>
                        </div>
                     </div>
                     <hr class="separator" />
                     <div class="price"><span class="bld-text">1300 USD</span> <span class="cost">Estimated Cost Per Person</span></div>
                     <hr class="separator" />
                     <div class="gobtn">
                        <a href="#" class="border-hover-effect btn btn-primary card-button">
                           Go to Plan 
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                              <g>
                                 <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"></path>
                                 <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                              </g>
                           </svg>
                        </a>
                     </div>
                  </div>
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

export default ExploreTrips;