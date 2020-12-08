import React,{Component} from 'react';
import { Tabs, Tab, Nav, Col, Row, Carousel } from 'react-bootstrap';

class Lodge extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
  <div>
   

<section class="lodgePage naviTopSpace">
   <div class="leftColomn">
      <div class="addHeader py-3">
         <div class="cntflex container">
            <div class="breadcrumbWrap">
               <ul class="breadcrumb p-0 m-0">
                  <li><a href="#" class="active">Beach and Views</a> -</li>
                  <li><a href="#">Change Hotel</a></li>
               </ul>
            </div>
            <div class="backBtn">
               <a href="" class="text-black d-flex align-items-center">
                  <span class="goBack pr-2">Go Back</span> 
                  <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle ml-1 b-icon bi">
                     <g>
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path>
                     </g>
                  </svg>
               </a>
            </div>
         </div>
      </div>
      <div class="lodgeFilter border-bottom py-3">
         <div class="container">
            <div class="row">
               <div class="fliterForm col-12">
                  <form class="toglrform form-inline">
                     <span class="pr-5">Price Range</span> <span class="rangesld d-flex justify-content-start align-items-center"><span class="rangeval px-3">100$ - 400$</span> <span class="rangebar px-3 d-flex">
                       <input id="range-1" type="range" min="0" max="5" class="custom-range" />
                         </span></span> <label for="inline-form-custom-select-pref" class="mr-sm-2">Type</label> 
                     <select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0 custom-select">
                        <option value="">View All</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                     </select>
                     <label for="inline-form-custom-select-pref" class="mr-sm-2 pl-3">Type</label> 
                     <select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0 custom-select">
                        <option value="">Villa</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                     </select>
                  </form>
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
               </div>
            </div>
         </div>
      </div>
      <div class="addcontaintRow">
         <div class="container">
            <div class="border-bottom">
               <div class="d-flex justify-content-between align-items-center mb-4">
                  <h2 class="mb-0">30 Places Found</h2>
                  <div class="searchBox d-flex justify-content-between align-items-center">
                     <input id="inline-form-input-name" type="text" placeholder="Search" class="mb-2 mr-sm-2 mb-sm-0 border-0 text-right form-control" /> 
                     <button class="btn p-0">
                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-search b-icon bi">
                           <g>
                              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path>
                              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                           </g>
                        </svg>
                     </button>
                  </div>
               </div>
               <div class="packageList">
                  <div class="packageOne">
                     <div class="row">
                        <div class="col-sm-12 col-md-6">
                           <div class="row boxstyle">
                              <div class="col-sm-12 col-md-12">
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
                              <div class="d-flex justify-content-between align-items-start col-sm-12">
                                 <div>
                                    <div class="gridR">
                                       <h2>Citrus by Cinnamon</h2>
                                       <span>
                                          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-exclamation-circle b-icon bi text-success">
                                             <g>
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
                                             </g>
                                          </svg>
                                       </span>
                                    </div>
                                    <p class="packageDate">March 20 - March 2</p>
                                 </div>
                                 <div>
                                    <div class="review"><span class="request">Availabilty on Request</span></div>
                                    <hr class="separator" />
                                 </div>
                              </div>
                              <div class="col-sm-12 col-md-7">
                                 <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt…</p>
                                 <p class="canclname">Flexible Cancellation*</p>
                              </div>
                              <div class="col-sm-12 col-md-5">
                                 <div class="price"><span class="roomsec"><span class="packn">Affordable Package,</span> <span class="regfont">Regular Room</span></span> <span class="roomprsec"><span class="bld-text">250 USD</span> <span class="cost">One Night / PP</span></span></div>
                              </div>
                              <div class="col-sm-12 col-md-7">
                                 <div class="gobtn">
                                    <a href="#" class="btn btn-primary card-button border-hover-effect">
                                       Change Lodge
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
                        <div class="col-sm-12 col-md-6">
                           <div class="row boxstyle">
                              <div class="col-sm-12 col-md-12">
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
                              <div class="d-flex justify-content-between align-items-start col-sm-12">
                                 <div>
                                    <div class="gridR">
                                       <h2>Citrus by Cinnamon</h2>
                                       <span>
                                          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-exclamation-circle b-icon bi text-success">
                                             <g>
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
                                             </g>
                                          </svg>
                                       </span>
                                    </div>
                                    <p class="packageDate">March 20 - March 2</p>
                                 </div>
                                 <div>
                                    <div class="review"><span class="request">Availabilty on Request</span></div>
                                    <hr class="separator" />
                                 </div>
                              </div>
                              <div class="col-sm-12 col-md-7">
                                 <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt…</p>
                                 <p class="canclname">Flexible Cancellation*</p>
                              </div>
                              <div class="col-sm-12 col-md-5">
                                 <div class="price"><span class="roomsec"><span class="packn">Affordable Package,</span> <span class="regfont">Regular Room</span></span> <span class="roomprsec"><span class="bld-text">250 USD</span> <span class="cost">One Night / PP</span></span></div>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <div class="row boxstyle">
                              <div class="col-sm-12 col-md-12">
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
                              <div class="d-flex justify-content-between align-items-start col-sm-12">
                                 <div>
                                    <div class="gridR">
                                       <h2>Citrus by Cinnamon</h2>
                                       <span>
                                          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-exclamation-circle b-icon bi text-success">
                                             <g>
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
                                             </g>
                                          </svg>
                                       </span>
                                    </div>
                                    <p class="packageDate">March 20 - March 2</p>
                                 </div>
                                 <div>
                                    <div class="review"><span class="request">Availabilty on Request</span></div>
                                    <hr class="separator" />
                                 </div>
                              </div>
                              <div class="col-sm-12 col-md-7">
                                 <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt…</p>
                                 <p class="canclname">Flexible Cancellation*</p>
                              </div>
                              <div class="col-sm-12 col-md-5">
                                 <div class="price"><span class="roomsec"><span class="packn">Affordable Package,</span> <span class="regfont">Regular Room</span></span> <span class="roomprsec"><span class="bld-text">250 USD</span> <span class="cost">One Night / PP</span></span></div>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                           <div class="row boxstyle">
                              <div class="col-sm-12 col-md-12">
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
                              <div class="d-flex justify-content-between align-items-start col-sm-12">
                                 <div>
                                    <div class="gridR">
                                       <h2>Citrus by Cinnamon</h2>
                                       <span>
                                          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-exclamation-circle b-icon bi text-success">
                                             <g>
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
                                             </g>
                                          </svg>
                                       </span>
                                    </div>
                                    <p class="packageDate">March 20 - March 2</p>
                                 </div>
                                 <div>
                                    <div class="review"><span class="request">Availabilty on Request</span></div>
                                    <hr class="separator" />
                                 </div>
                              </div>
                              <div class="col-sm-12 col-md-7">
                                 <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt…</p>
                                 <p class="canclname">Flexible Cancellation*</p>
                              </div>
                              <div class="col-sm-12 col-md-5">
                                 <div class="price"><span class="roomsec"><span class="packn">Affordable Package,</span> <span class="regfont">Regular Room</span></span> <span class="roomprsec"><span class="bld-text">250 USD</span> <span class="cost">One Night / PP</span></span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="map_section">
      <div class="map_posi">
         <div id="expandDiv" class="mapWrapper">
            <button id="expandbtn" class="expandBtn bg-hover-effect">
               <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-left b-icon bi">
                  <g>
                     <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                  </g>
               </svg>
               <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-right b-icon bi">
                  <g>
                     <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                  </g>
               </svg>
               Expand
            </button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.17912595028!2d80.10152201810556!3d6.127689066038924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa!5e0!3m2!1sen!2slk!4v1595000118561!5m2!1sen!2slk" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0"  width="100%" height="800px" frameborder="0"></iframe>
         </div>
      </div>
   </div>
</section>


  </div>
  )
    }
}

export default Lodge;
