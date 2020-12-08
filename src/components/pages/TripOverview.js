import React,{Component} from 'react';

class TripOverview extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
    <div>
       <section class="innerHeader overviewHed px-3 px-md-0 mb-0">
            <div class="container d-flex justify-content-between align-items-center p-0">
                <h1>TRIP OVERVIEW</h1>
                <div class="overviewPdf">
                    <span class="pr-md-4">
                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-file-earmark-text b-icon bi"><g><path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></path><path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"></path><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path></g></svg>
                    </span>
                    <span>DOWNLOAD .PDF</span>
                </div>
            </div>
        </section>

        <section class="pageOverview">
       <div class="leftColomn">
        <div class="innrpageContaint">
            <div class="pageOverviewHeader py-4">
                <div class=" d-flex justify-content-between align-items-center">
                    <fieldset class="form-group  d-flex justify-content-between align-items-center" >
                        
                        <div tabindex="-1" role="group" class="bv-no-focus-ring">
                            <h2 class="font-weight-bold"><span class="orangeText">5 Days </span>
                                Beaches and Views</h2>
  
                        </div>
                    </fieldset>
                    <fieldset class="form-group  d-flex justify-content-end align-items-center" >
                        
                        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                class="btn bgWplusbtn bg-hover-effect btn-secondary">TRIP VIEW
                            </button>
  
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="wtd">
                <h3>Your Trip Overview</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate.</p>
            </div>
            <div class="wtd mt-5">
                <h3>What you’ll do</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate.</p>
            </div>
            <div class="wtd mt-5">
                <h3 class="mb-5">Your 05 Days Journey</h3>
                <div class="daysRow border-bottom d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4>Starts in Colombo</h4>
                    </div>
                </div>
                <div class="daysRow border-bottom  d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4><span class="di-icon mr-4"><img src={process.env.PUBLIC_URL + 'images/car.svg'
                                    } /></span>Starts in Colombo</h4>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt
                            Lorem.</p>
                    </div>
                </div>
                <div class="daysRow border-bottom d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4>3 Nights in Hikkaduwa</h4>
                        <div class="oimg">
                            
                            <img src={process.env.PUBLIC_URL + 'images/overimg.jpg'} class="rounded" />
                            <div
                                class="oimgFooter d-xs-block d-md-flex justify-content-between align-items-center mt-3">
                                <div><a href="#">Citrus by Cinnamon</a></div> <label class="d-block">Standard
                                    Room</label>
                            </div>
                        </div>
                        <h5>Included</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                        <h5>Excluded</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                    </div>
                </div>
                <div class="daysRow border-bottom  d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4><span class="di-icon mr-4"><img src={process.env.PUBLIC_URL + 'images/car.svg'
                                    } /></span>Starts in Colombo</h4>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt
                            Lorem.</p>
                    </div>
                </div>
                <div class="daysRow border-bottom d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4>3 Nights in Hikkaduwa</h4>
                        <div class="oimg"> <img src={process.env.PUBLIC_URL + 'images/overimg.jpg'} class="rounded" />
                            <div
                                class="oimgFooter d-xs-block d-md-flex justify-content-between align-items-center mt-3">
                                <div><a href="#">Citrus by Cinnamon</a></div> <label class="d-block">Standard
                                    Room</label>
                            </div>
                        </div>
                        <h5>Included</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                        <h5>Excluded</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                    </div>
                </div>
                <div class="daysRow border-bottom  d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4><span class="di-icon mr-4"><img src={process.env.PUBLIC_URL + 'images/car.svg'
                                    } /></span>Starts in Colombo</h4>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor Incididunt
                            Lorem.</p>
                    </div>
                </div>
                <div class="daysRow d-xs-block d-md-flex justify-content-start align-items-start">
                    <div class="jdate"><span class="boldText">DAY 01</span> <span class="smallText">Mar 20 Mon</span>
                    </div>
                    <div class="dateInfo">
                        <h4>Starts in Colombo</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="inclusions border-bottom border-top">
            <div class="innrpageContaint">
                <h2>Overall Inclusions</h2>
                <div class="inclusionsRow d-xs-block d-md-flex justify-content-between align-items-start">
                    <div class="leftCol">
                        <h3>What’s Included</h3>
                    </div>
                    <div class="rightCol">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                    </div>
                </div>
                <div class="inclusionsRow d-xs-block d-md-flex justify-content-between align-items-start">
                    <div class="leftCol">
                        <h3>What’s Included</h3>
                    </div>
                    <div class="rightCol">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                    </div>
                </div>
                <div class="inclusionsRow d-xs-block d-md-flex justify-content-between align-items-start">
                    <div class="leftCol">
                        <h3>What’s Included</h3>
                    </div>
                    <div class="rightCol">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation
                            ullamco laboris nisi ut aliquip.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="inclusions border-bottom border-top">
            <div class="agreeSec">
                <div class="innrpageContaint">
                    <div class="redioBtn">
                        <fieldset class="form-group" >
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <div class="custom-control custom-radio"><input type="radio" name="some-radios"
                                        autocomplete="off" class="custom-control-input" value="A"  /><label
                                        class="custom-control-label" for="__BVID__21">I Agree to the Terms and
                                        Conditions of this Trip plan itenary and heaby lorem ipsum dolor.</label>
                                        </div>

                            </div>
                        </fieldset>
                    </div>
                    <div class="agreeBtnSet">
                        <div class="ovrBtn nobg mr-3 bg-hover-effect"><span>TRIP VIEW</span></div>
                        <div class="ovrBtn mr-3 border-hover-effect"><span>SAVE TRIP</span> <span><svg
                                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
                                    <g>
                                        <path fill-rule="evenodd"
                                            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                        </path>
                                        <path fill-rule="evenodd"
                                            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                                        </path>
                                    </g>
                                </svg></span></div>
                        <div class="ovrBtn nobg bg-hover-effect"><span>DOWNLOAD .PDF</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="map_card_section">
        <div class="map_posi">
            <div class="map_card_Wrapper">
                <div class="mapCard">
                    <div class="mapCardHeader"><iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.17912595028!2d80.10152201810556!3d6.127689066038924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa!5e0!3m2!1sen!2slk!4v1595000118561!5m2!1sen!2slk"
                            allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0" 
                            width="100%" height="278px" frameborder="0"></iframe></div>
                    <div class="stend d-flex justify-content-between align-items-center">
                        <div class="st border"><label>Start</label> <span>
                                MARCH 10
                            </span></div>
                        <div class="end border"><label>End</label> <span>
                                MARCH 60
                            </span></div>
                    </div>
                    <div class="price"><label>Cost Per Person*</label> <span>2.1K USD - 3.0K USD</span></div>
                    <div class="checkoutbtn">
                        <fieldset class="form-group mb-0" >
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn bgWplusbtn border-hover-effect btn-secondary">CHECKOUT NOW<svg
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
                                    </svg></button>

                            </div>
                        </fieldset>
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

export default TripOverview;
