import React, { Component } from 'react';
import { Tabs, Tab, Carousel } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
<div>
           
            <div class="homeslide">
                <img src={process.env.PUBLIC_URL + 'images/slider.jpg'} />
                <div class="caption">
                    <h1>Travelling to Sri Lanka Soon ? Plan Your Trip Start to End. </h1>
                    <p>choose your transport to Activity, and we'll do the rest to keep you on track </p>


                    <div class="search">
                        <input type="text" class="looking" name="search" placeholder="What are you looking to do ? " />
                        <button>
                            Select the type of trip <span class="border-hover-effect"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-right b-icon bi"><g><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></g></svg></span>
                        </button>
                        <div class="nav-item costomTripm"><a href="/custom-trip" target="_self" class="nav-link">Costom Trip <span>

                            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-right b-icon bi"><g><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></g></svg>
                        </span></a></div>
                    </div>
                </div>
            </div>
           












            <section>
    <div class="container tabslider pt_80">
        <h2>Most Popular Travel Plans </h2>

        
        <div class="tabs" >
<Tabs defaultActiveKey="All" id="uncontrolled-tab-example">
  <Tab eventKey="All" title="All">
  <Carousel prevIcon={<div class='lefticon'>
    <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-left b-icon bi'><g><path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path></g></svg>
    </div>}  nextIcon={<div class='lefticon'><svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-right b-icon bi'><g><path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path></g></svg></div>}>
    <Carousel.Item interval={1000}>
    <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
</Carousel>

  </Tab>
  <Tab eventKey="Beach" title="Beach">
  <Carousel prevIcon={<div class='lefticon'>
    <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-left b-icon bi'><g><path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path></g></svg>
    </div>}  nextIcon={<div class='lefticon'><svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-right b-icon bi'><g><path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path></g></svg></div>}>
    <Carousel.Item interval={1000}>
    <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
</Carousel>
  </Tab>
  <Tab eventKey="Activity" title="Activity">
  <Carousel prevIcon={<div class='lefticon'>
    <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-left b-icon bi'><g><path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path></g></svg>
    </div>}  nextIcon={<div class='lefticon'><svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-right b-icon bi'><g><path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path></g></svg></div>}>
    <Carousel.Item interval={1000}>
    <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
</Carousel>
  </Tab>
  <Tab eventKey="Sight Seeing" title="Sight Seeing">
  <Carousel prevIcon={<div class='lefticon'>
    <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-left b-icon bi'><g><path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path></g></svg>
    </div>}  nextIcon={<div class='lefticon'><svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-right b-icon bi'><g><path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path></g></svg></div>}>
    <Carousel.Item interval={1000}>
    <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
</Carousel>
  </Tab>
  <Tab eventKey="To Visit" title="To Visit">
  <Carousel prevIcon={<div class='lefticon'>
    <svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-left b-icon bi'><g><path fill-rule='evenodd' d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path></g></svg>
    </div>}  nextIcon={<div class='lefticon'><svg viewBox='0 0 16 16' width='1em' height='1em' focusable='false' role='img' alt='icon' xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi-chevron-right b-icon bi'><g><path fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path></g></svg></div>}>
    <Carousel.Item interval={1000}>
    <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div class="d-flex justify-content-between">
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap">
                                                     <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top"/>
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> 

                                                <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap" class="card-img-top" />

                                                        
                                                    <div class="mapBox"><iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe></div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="imgWrap">
                                                <div class="imgWrap"> <img src={process.env.PUBLIC_URL + 'images/card1.jpg'} alt="Card image cap"  class="card-img-top" />
                                                    <div class="mapBox">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                            allowfullscreen="allowfullscreen" aria-hidden="false"
                                                            tabindex="0"  width="100%"
                                                            height="180px" frameborder="0"></iframe>
                                                            </div>
                                                </div>
                                                <div class="mapBox"><iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                                                        allowfullscreen="allowfullscreen" aria-hidden="false"
                                                        tabindex="0"  width="100%"
                                                        height="180px" frameborder="0"></iframe></div>
                                            </div>
                                            <div class="card-body">
                                                <div class="card-containt">
                                                    <h3 class="card-title">6 Days of Sundown Surfing</h3>
                                                    <p class="daterange">March 20 - March 28 </p>
                                                    <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                                            focusable="false" role="img" alt="icon"
                                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                            class="bi-star-fill b-icon bi">
                                                            <g>
                                                                <path
                                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                                                </path>
                                                            </g>
                                                        </svg></div>
                                                    <p class="card-text">Lorem Ipsum Dolor Sit Amet Consectetur
                                                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt </p>
                                                </div> <a href="#"
                                                    class="btn btn-primary card-button border-hover-effect">Go to Plan
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
                                                    </svg></a>
                                            </div>
                                        </div>
                                    </div>
  </Carousel.Item>
</Carousel>
  </Tab>
</Tabs>
</div>
     
       
        <hr class="hrmargin"/>
    </div>
</section>


<section class="whatWeDo">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="blackBox">
              <h2>What we do</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cilium dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                cunt in culpa qui officia deserunt mollit anim id est laborum.
                Donec elementum ligula eu
              </p>
              <a class="read-more" href=""
                >Read More
                <span>
                 
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
                  </span></a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="what-we-do-carosal">
                <div>
                  <Carousel>
                    <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + 'images/whatwedo.jpg'} width="100%"/>
                      <h3>
                        01. Select a Destination and<br />
                        Click Design Trip
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        alit, sed do eiusmod tempor incididunt ut labore at
                        dolore magna aliqua. Ut enim ad minim veniam, Lorem
                        ipsum dolor sit amet, consectetur adipisicing alit,.
                      </p>
                    </Carousel.Item>

                    <Carousel.Item>
                    <img src={process.env.PUBLIC_URL + 'images/whatwedo.jpg'} width="100%" />
                      <h3>
                        01. Select a Destination and<br />
                        Click Design Trip
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        alit, sed do eiusmod tempor incididunt ut labore at
                        dolore magna aliqua. Ut enim ad minim veniam, Lorem
                        ipsum dolor sit amet, consectetur adipisicing alit,.
                      </p>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img src={process.env.PUBLIC_URL + 'images/whatwedo.jpg'} width="100%"  />
                      <h3>
                        01. Select a Destination and<br />
                        Click Design Trip
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        alit, sed do eiusmod tempor incididunt ut labore at
                        dolore magna aliqua. Ut enim ad minim veniam, Lorem
                        ipsum dolor sit amet, consectetur adipisicing alit,.
                      </p>
                    </Carousel.Item>
                    </Carousel>
                </div>
            </div>
          </div>
          <hr />
        </div>
        <hr />
      </div>
    </section>



    <section class="top-picks">
      <div class="container">
        <h2>Our Top Pickes</h2>

        <div class="cardSet">
          <div class="row">
            <div class="col-lg-6 item">
              <div class="card vertical">
                <div class="cardImage">
                  <img
                    class="card-img-top"
                    src={process.env.PUBLIC_URL + '/images/hcard.jpg'}
                    alt="Card image cap"
                  />
                  <div class="mapBox">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                      width="100%"
                      height="180px"
                      frameborder="0"
                      
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-containt">
                    <h3 class="card-title">
                      6 Days <br />
                      of Sundown Surfing
                    </h3>
                    <p class="daterange">March 20 - March 28</p>
                    <div class="star">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>


<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>

<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                      <span>5 out of 5</span>
                    </div>

                    <p class="card-text">
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                      Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit
                      Amet…
                    </p>
                  </div>
                  <a
                    href="#"
                    class="btn btn-primary card-button border-hover-effect"
                    >Go to Plan <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></a>
                </div>
              </div>
            </div>

            <div class="col-lg-6 item">
              <div class="card vertical">
                <div class="cardImage">
                <img
                    class="card-img-top"
                    src={process.env.PUBLIC_URL + '/images/hcard.jpg'}
                    alt="Card image cap"
                  />
                  <div class="mapBox">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                      width="100%"
                      height="180px"
                      frameborder="0"
                     
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-containt">
                    <h3 class="card-title">
                      6 Days <br />
                      of Sundown Surfing
                    </h3>
                    <p class="daterange">March 20 - March 28</p>
                    <div class="star">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                      <span>5 out of 5</span>
                    </div>

                    <p class="card-text">
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                      Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit
                      Amet…
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 item">
              <div class="card vertical">
                <div class="cardImage">
                <img
                    class="card-img-top"
                    src={process.env.PUBLIC_URL + '/images/hcard.jpg'}
                    alt="Card image cap"
                  />
                  <div class="mapBox">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                      width="100%"
                      height="180px"
                      frameborder="0"
                      
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-containt">
                    <h3 class="card-title">
                      6 Days<br />
                      of Sundown Surfing
                    </h3>
                    <p class="daterange">March 20 - March 28</p>
                    <div class="star">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                      <span>5 out of 5</span>
                    </div>

                    <p class="card-text">
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                      Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit
                      Amet…
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 item">
              <div class="card vertical">
                <div class="cardImage">
                <img
                    class="card-img-top"
                    src={process.env.PUBLIC_URL + '/images/hcard.jpg'}
                    alt="Card image cap"
                  />
                  <div class="mapBox">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.605202874009!2d80.54652207407966!3d6.3420422265671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e217f98c14e1%3A0xa539e0eb604e1f7d!2sDeniyaya!5e0!3m2!1sen!2slk!4v1596433407015!5m2!1sen!2slk"
                      width="100%"
                      height="180px"
                      frameborder="0"
                     
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-containt">
                    <h3 class="card-title">
                      6 Days<br />
                      of Sundown Surfing
                    </h3>
                    <p class="daterange">March 20 - March 28</p>
                    <div class="star">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                      <span>5 out of 5</span>
                    </div>
                    <p class="card-text">
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit
                      Sed Do Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit
                      Amet…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="news mb77">
      <div class="container">
        <hr class="mb-5" />
        <div class="newsheader mb-5">
          <div class="row">
            <div class="col-lg-6">
              <h2>Latest Travel News</h2>
            </div>
            <div class="col-lg-6 text-right goToNews">
              <a href="#">Go to News</a>
              <span>
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="card vertical">
              <div class="cardImage">
              
                <img
                  class="card-img-top"
                  src={process.env.PUBLIC_URL + '/images/news1.jpg'}
                  alt="Card image cap"
                />
              </div>
              <div class="card-body">
                <div class="card-containt">
                  <h3 class="card-title">
                    Where the Jungle Meets the Sea - Sri Lanka 2020
                  </h3>
                  <div class="d-flex justify-content-between">
                    <p class="daterange">March 25th 2020</p>
                    <p class="daterange">Mary Johns Pip</p>
                  </div>

                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt u labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>

                  <div class="readMore">
                    <a href="#">Read More </a>
                    <b-icon icon="plus"></b-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="newslist">
              <div class="newsone hover-effect">
                <div class="newsCaption">
                  <figure class="effect-lily">
                  <img
                  class="card-img-top"
                  src={process.env.PUBLIC_URL + '/images/news2.jpg'}
                  alt="Card image cap"
                />
                    <figcaption>
                      <h3>
                        Sri Lanka's Top to Visit<br />
                        Destinations
                      </h3>
                      <p class="daterange">March 20 2020</p>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div class="newsone hover-effect mb-0">
                <div class="newsCaption">
                  <figure class="effect-lily">
                  <img
                  class="card-img-top"
                  src={process.env.PUBLIC_URL + '/images/news2.jpg'}
                  alt="Card image cap"
                />
                    <figcaption>
                      <h3>
                        Sri Lanka's Top to Visit<br />
                        Destinations
                      </h3>
                      <p class="daterange">March 20 2020</p>
                    </figcaption>
                  </figure>
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

export default Home;


