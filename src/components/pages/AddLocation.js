import React,{Component} from 'react';

import { Carousel } from 'react-bootstrap';

class AddLocation extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
    <div >
      <section class="addlocation naviTopSpace">
   
      <div class="leftColomn">
    <div class="addHeader py-3">
        <div class="cntflex container">
            <div class="breadcrumbWrap">
                <ul class="breadcrumb p-0 m-0">
                    <li><a href="#" class="active">Beach and Views</a> - </li>
                    <li><a href="#"> Add Location</a></li>
                </ul>
            </div>
            <div class="backBtn"><a href="" class="text-black flexBack">
                <span class="goBack">Go Back </span>
            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-x-circle ml-1 b-icon bi"><g><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"></path><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"></path></g></svg>
            </a></div>
        </div>
    </div>
    <div class="btnCarousel border-bottom py-3">
        <div>
            <div class="ddn justify-content-between align-items-center container">
                <div class="tpD"><span>Type of Destination</span></div>
               
                <Carousel indicators={false} prevIcon={<div class='lefticon'>
                           <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-left b-icon bi'><g><path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path></g></svg>
                    </div>}  nextIcon={<img src={process.env.PUBLIC_URL + 'images/slarrow.svg'} />}>
              <Carousel.Item >                              
                    <button type="button" class="btn sldBtn btn-btn" >View All</button>
                    <button type="button" class="btn sldBtn btn-btn" >Beaches</button>
                    <button type="button" class="btn sldBtn btn-btn" >Historical</button>
                    <button type="button" class="btn sldBtn btn-btn" >Up-Country</button>
                    <button type="button" class="btn sldBtn btn-btn" >The Wild</button>
                    </Carousel.Item>

                    <Carousel.Item >
                    <button type="button" class="btn sldBtn btn-btn" >View All</button>
                    <button type="button" class="btn sldBtn btn-btn" >Beaches</button>
                    <button type="button" class="btn sldBtn btn-btn" >Historical</button>
                    <button type="button" class="btn sldBtn btn-btn" >Up-Country</button>
                    <button type="button" class="btn sldBtn btn-btn" >The Wild</button>
                 </Carousel.Item>

                 <Carousel.Item >
                    <button type="button" class="btn sldBtn btn-btn" >View All</button>
                    <button type="button" class="btn sldBtn btn-btn" >Beaches</button>
                    <button type="button" class="btn sldBtn btn-btn" >Historical</button>
                    <button type="button" class="btn sldBtn btn-btn" >Up-Country</button>
                    <button type="button" class="btn sldBtn btn-btn" >The Wild</button>
                </Carousel.Item>

                <Carousel.Item >
                    <button type="button" class="btn sldBtn btn-btn" >View All</button>
                    <button type="button" class="btn sldBtn btn-btn" >Beaches</button>
                    <button type="button" class="btn sldBtn btn-btn" >Historical</button>
                    <button type="button" class="btn sldBtn btn-btn" >Up-Country</button>
                    <button type="button" class="btn sldBtn btn-btn" >The Wild</button>
                </Carousel.Item>

          </Carousel>
            </div>
        </div>
    </div>
    <div class="addcontaintRow">
        <div class="container">
            <div class="border-bottom">
                <h2>Most Popular</h2>
                <div>
                    <div class="gridPorpuler d-flex justify-content-between align-items-center flex-wrap">
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />
                            <div class="card-body">
                                <div class="hoverBtn">
                                    <fieldset class="form-group" id="__BVID__23">

                                        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                class="btn bgWplusbtn btn-secondary">Add Location<svg
                                                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
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
                                <div class="gridR">
                                    <h3>Unawatuna</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="hoverBtn">
                                    <fieldset class="form-group" id="__BVID__24">

                                        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                class="btn bgWplusbtn btn-secondary">Add Location<svg
                                                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
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
                                <div class="gridR">
                                    <h3>Hikkaduwa</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="hoverBtn">
                                    <fieldset class="form-group" id="__BVID__25">

                                        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                class="btn bgWplusbtn btn-secondary">Add Location<svg
                                                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
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
                                <div class="gridR">
                                    <h3>Ella</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />
                            <div class="card-body">


                                <div class="hoverBtn">
                                    <fieldset class="form-group" id="__BVID__26">

                                        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                                class="btn bgWplusbtn btn-secondary">Add Location<svg
                                                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
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
                                <div class="gridR">
                                    <h3>Wilpattu</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="addcontaintRow">
        <div class="container">
            <div class="border-bottom">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2 class="mb-0">All Destinations</h2>
                    <div class="searchBox d-flex justify-content-between align-items-center "><input
                            id="inline-form-input-name" type="text" placeholder="Search"
                            class="mb-2 mr-sm-2 mb-sm-0 border-0 text-right form-control" /><button class="btn p-0"><svg
                                viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-search b-icon bi">
                                <g>
                                    <path fill-rule="evenodd"
                                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z">
                                    </path>
                                    <path fill-rule="evenodd"
                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z">
                                    </path>
                                </g>
                            </svg></button></div>
                </div>
                <div>
                    <div class="gridPorpuler d-flex justify-content-between align-items-center flex-wrap">
                        <article class="card mb-2">
                            <img src={process.env.PUBLIC_URL + '/images/populer.jpg' } alt="Image"
                                class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Unawatuna</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Unawatuna</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Unawatuna</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Unawatuna</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Unawatuna</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Hikkaduwa</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Ella</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"></span></span>
                                </div>
                            </div>


                        </article>
                        <article class="card mb-2"> <img src={process.env.PUBLIC_URL + '/images/populer.jpg' }
                                alt="Image" class="card-img-top" />

                            <div class="card-body">


                                <div class="gridR">
                                    <h3>Wilpattu</h3> <span class="uitooltip"><span tooltip="Hi Welcome to Unawatuna"
                                            flow="up"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                focusable="false" role="img" alt="icon"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                class="bi-exclamation-circle b-icon bi text-success">
                                                <g>
                                                    <path fill-rule="evenodd"
                                                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                                    </path>
                                                    <path
                                                        d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z">
                                                    </path>
                                                </g>
                                            </svg></span></span>
                                </div>
                            </div>


                        </article>
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
                        {/* <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
                        <b-icon icon="chevron-right" aria-hidden="true"></b-icon> */}

                     <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-right b-icon bi"><g><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></g></svg>

                        <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-left b-icon bi"><g><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path></g></svg>

                        Expand
                    </button>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.17912595028!2d80.10152201810556!3d6.127689066038924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa!5e0!3m2!1sen!2slk!4v1595000118561!5m2!1sen!2slk" width="100%" height="800px" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
</div>
            </div>








        </section>
    </div>
    )
    }
}

export default AddLocation;