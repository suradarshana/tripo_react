import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';

class HotelInner extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
  <div>
   

<section class="hotelInner naviTopSpace">
  <div class="leftColomn mb-5">
     <div class="addHeader box-shadow-none py-3">
        <div class="cntflex container">
           <div class="breadcrumbWrap">
              <ul class="breadcrumb p-0 m-0">
                 <li><a href="#" class="active">Beach and Views</a> -</li>
                 <li><a href="#">Change Hotel</a> -</li>
                 <li><a href="#">Citrus Hikkaduwa</a></li>
              </ul>
           </div>
           <div class="backBtn">
              <a href="" class="text-black">
                 <span class="goBack"> Go Back</span> 
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
     <div class="innrpageContaint">
        <div class="locationHeader py-4">
           <div class="d-flex justify-content-between align-items-center">
              <fieldset class="form-group d-flex justify-content-between align-items-center" id="__BVID__18">
                 <div tabindex="-1" role="group" class="bv-no-focus-ring">
                    <h2 class="font-weight-bold">Citrus Hikkadiwa</h2>
                 </div>
              </fieldset>
              <fieldset class="form-group d-flex justify-content-end align-items-center" id="__BVID__19">
                 <div tabindex="-1" role="group" class="bv-no-focus-ring">
                    <button type="button" class="btn bgWplusbtn border-hover-effect btn-secondary">
                       Add Lodge
                       <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                          <g>
                             <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"></path>
                             <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                          </g>
                       </svg>
                    </button>
                 </div>
              </fieldset>
           </div>
        </div>



         
          <div id="imgGallary" class="slider-pro">
            <div class="sp-slides">
              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image1_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image1_large.jpg'}
                />

                <div class="sp-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image2_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image2_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image3_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image3_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image4_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image4_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image5_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image5_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image6_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image6_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image7_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image7_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image8_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image8_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image9_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image9_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
              </div>

              <div class="sp-slide">
                <img
                  class="sp-image"
                  src={process.env.PUBLIC_URL + '/images/blank.gif'}
                  data-src={process.env.PUBLIC_URL + '/images/gallary/image10_medium.jpg'}
                  data-retina={process.env.PUBLIC_URL + '/images/gallary/image10_large.jpg'}
                />

                <div
                  class="sp-caption"
                >Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
              </div>
            </div>

            <div class="sp-thumbnails">
              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image1_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image2_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image3_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image4_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image5_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image6_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image7_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image8_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image9_thumbnail.jpg'}  />
                </div>
              </div>

              <div class="sp-thumbnail">
                <div class="sp-thumbnail-image-container">
                  <img class="sp-thumbnail-image" src={process.env.PUBLIC_URL + '/images/gallary/image10_thumbnail.jpg'}  />
                </div>
              </div>
            </div>
          </div>
          

          <div class="hotelReview d-flex align-items-center justify-content-start">
            <div class="star mr-3">
              <span class="fill">
                 <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                    <g>
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </g>
                 </svg>
              </span>
              <span class="fill">
                 <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                    <g>
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </g>
                 </svg>
              </span>
              <span class="fill">
                 <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                    <g>
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </g>
                 </svg>
              </span>
              <span class="fill">
                 <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                    <g>
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </g>
                 </svg>
              </span>
              <span class="nofill">
                 <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-star-fill b-icon bi">
                    <g>
                       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                    </g>
                 </svg>
              </span>
           </div>
           <p class="m-0">4.5 (100 + Guest Reviews)</p>
          </div>

         


      
        
        <div class="gallery clearfix"></div>
        <div class="wtd mt-5">
           <h3>Guest’s Reviews</h3>
           <div class="gestSlider">
              <div role="region" id="carousel-1" aria-busy="false" class="carousel slide pointer-event">
               <Carousel  indicators={false} >
                       <Carousel.Item>
                       <div class="carousel-caption">
                          <div class="row toboxrow">
                             <div class="tobox col-6">
                                <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                   a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                   <div>
                                     <img src={process.env.PUBLIC_URL + '/images/boy.png'} class="mr-4" width="60px" />
                                   </div>
                                   <div class="avatarInfo"><span class="bold">Rickardo Jules</span> <span>United Kingdom</span></div>
                                </div>
                             </div>
                             <div class="tobox col-6">
                                <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                   a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                   <div><img src={process.env.PUBLIC_URL + '/images/boy.png'} class="mr-4" width="60px" /></div>
                                   <div class="avatarInfo"><span class="bold">Rickardo Jules</span> <span>United Kingdom</span></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       </Carousel.Item>
                       <Carousel.Item>
                       <div class="carousel-caption">
                          <div class="row toboxrow">
                             <div class="tobox col-6">
                                <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                   a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                   <div><img src={process.env.PUBLIC_URL + '/images/boy.png'} class="mr-4" width="60px" /></div>
                                   <div class="avatarInfo"><span class="bold">Rickardo Jules</span> <span>United Kingdom</span></div>
                                </div>
                             </div>
                             <div class="tobox col-6">
                                <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                   a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                   <div><img src={process.env.PUBLIC_URL + '/images/boy.png'} class="mr-4" width="60px" /></div>
                                   <div class="avatarInfo"><span class="bold">Rickardo Jules</span> <span>United Kingdom</span></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       </Carousel.Item>
                       <Carousel.Item>
                       <div class="carousel-caption">
                          <div class="row toboxrow">
                             <div class="tobox col-6">
                                <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                   a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                   <div><img src={process.env.PUBLIC_URL + '/images/boy.png'} class="mr-4" width="60px" /></div>
                                   <div class="avatarInfo"><span class="bold">Rickardo Jules</span> <span>United Kingdom</span></div>
                                </div>
                             </div>
                             <div class="tobox col-6">
                                <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                                   a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                   <div><img src={process.env.PUBLIC_URL + '/images/boy.png'} class="mr-4" width="60px" /></div>
                                   <div class="avatarInfo"><span class="bold">Rickardo Jules</span> <span>United Kingdom</span></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       </Carousel.Item>
                </Carousel>

              </div>
           </div>
        </div>
        <div class="wtd mt-5">
           <h3>General Information</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
        <div class="wtd mt-5 border-bottom mb-4 pb-4">
           <h3>Facilities and Surrounding</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
           <div class="facility">
              <ul>
                 <li>Swimming Pool</li>
                 <li>Sea View</li>
                 <li>WIFI Access</li>
                 <li>Parking Spot</li>
                 <li>Bath Tub</li>
                 <li>6x5 sqft</li>
              </ul>
           </div>
        </div>
        <div class="wtd mt-5 border-bottom pb-3 mb-5">
           <h3>Room Types</h3>
           <div class="row sldeHed mb-3">
              <div class="leftCol col-sm-12 col-md-6">Sea View Double Bed Room</div>
              <div class="text-md-right col-sm-12 col-md-6"><span class="usdtext">250 USD</span> <span class="pptext">One Night / PP</span></div>
           </div>
           <div class="carasolSlide mb-3">
              <div role="region" id="carousel-2" aria-busy="false" class="carousel slide pointer-event" >
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
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <div class="facility">
              <ul>
                 <li>Swimming Pool</li>
                 <li>Sea View</li>
                 <li>WIFI Access</li>
                 <li>Parking Spot</li>
                 <li>Bath Tub</li>
                 <li>6x5 sqft</li>
              </ul>
           </div>
           <div class="roomTypeBtn">
              <fieldset class="form-group" id="__BVID__28">
                 <div tabindex="-1" role="group" class="bv-no-focus-ring">
                    <button type="button" class="btn checkBtn bg-hover-effect btn-secondary">
                       Complete Booking
                       <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-check-circle-fill b-icon bi">
                          <g>
                             <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                          </g>
                       </svg>
                    </button>
                 </div>
              </fieldset>
           </div>
        </div>
        <div class="wtd mt-5 border-bottom pb-3 mb-5">
           <div class="row sldeHed mb-3">
              <div class="leftCol col-sm-12 col-md-6">Sea View Double Bed Room</div>
              <div class="text-md-right col-sm-12 col-md-6"><span class="usdtext">250 USD</span> <span class="pptext">One Night / PP</span></div>
           </div>
           <div class="carasolSlide mb-3">
              <div role="region" id="carousel-2" aria-busy="false" class="carousel slide pointer-event" >
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
           </div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           <div class="facility">
              <ul>
                 <li>Swimming Pool</li>
                 <li>Sea View</li>
                 <li>WIFI Access</li>
                 <li>Parking Spot</li>
                 <li>Bath Tub</li>
                 <li>6x5 sqft</li>
              </ul>
           </div>
           <div class="roomTypeBtn">
              <fieldset class="form-group" id="__BVID__33">
                 <div tabindex="-1" role="group" class="bv-no-focus-ring">
                    <button type="button" class="btn checkBtn bg-hover-effect btn-secondary">
                       Complete Booking
                       <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-circle b-icon bi">
                          <g>
                             <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          </g>
                       </svg>
                    </button>
                 </div>
              </fieldset>
           </div>
        </div>
        <div class="wtd mt-5 pb-5 border-bottom">
           <h3>Available Activities</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
           <div class="imageGrid d-flex justify-content-start align-items-start">
              <div class="imageTag">
                
                 <img src={process.env.PUBLIC_URL + 'images/wwd.jpg'} width="100%" />
                 <div class="imgOverly">
                    <h4>Surfing</h4>
                 </div>
              </div>
              <div class="imageTag">
                  <img src={process.env.PUBLIC_URL + 'images/wwd.jpg'} width="100%" /> 
                 <div class="imgOverly">
                    <h4>Yoga</h4>
                 </div>
              </div>
              <div class="imageTag">
                  <img src={process.env.PUBLIC_URL + 'images/wwd.jpg'} width="100%" /> 
                 <div class="imgOverly">
                    <h4>Fishing</h4>
                 </div>
              </div>
              <div class="imageTag">
                  <img src={process.env.PUBLIC_URL + 'images/wwd.jpg'} width="100%" /> 
                 <div class="imgOverly">
                    <h4>Beach Ball</h4>
                 </div>
              </div>
              <div class="imageTag">
                  <img src={process.env.PUBLIC_URL + 'images/wwd.jpg'} width="100%" /> 
                 <div class="imgOverly">
                    <h4>Kite Surfing</h4>
                 </div>
              </div>
           </div>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-4">
           <div class="lodgeBtn">
              <button type="button" class="btn bgWplusbtn border-hover-effect btn-secondary">
                 Add Lodge
                 <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                    <g>
                       <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"></path>
                       <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                    </g>
                 </svg>
              </button>
           </div>
           <div class="atag text-right"><a href="" class="text-underline">Back to Selection</a></div>
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

export default HotelInner;
{/* 
<script>
//import sliderPro from '../mixins/Commons';
export default {
  mounted() {
    $(document).ready(function ($) {
      $("#imgGallary").sliderPro({
        width: 670,
        height: 400,
        orientation: "horizontal",
        loop: false,
        arrows: true,
        buttons: false,
        thumbnailsPosition: "right",
        thumbnailPointer: true,
        thumbnailWidth: 100,
        breakpoints: {
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
        },
      });
    });
  },
};
</script>
 */}