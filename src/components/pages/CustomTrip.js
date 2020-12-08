import React,{Component} from 'react';

class CustomTrip extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
  <div>
    <section class="innerHeader mb-0">
      <div class="container">
        <h1>Plan and Customize Your own Trip</h1>
      </div>
    </section>

    <section class="explore">
    <div class="leftSection">
        <div class="exploreHed border-bottom">
            <div class="container">
                <div class="row row-cols-sm-12">
                    <div class="max-width1 border-right py-3 py-md-5 pl-md-3 pr-md-5 col-sm-12 col-md-6">
                        <h2>
                            Name Your Trip
                            <img src={process.env.PUBLIC_URL + 'images/edit.svg'} />
                        </h2>
                        <p>Please Name this custom trip and select an Arrival date. the end date of the trip will be
                            auto filled based on your stay at lodge.</p>
                    </div>
                    <div class="tripcalander py-3 py-md-5 pl-sm-3 pl-md-5 col-sm-12 col-md-6"><label>Your Arrival
                            Date</label>
                        <div id="example-datepicker__outer_" role="group" aria-labelledby="example-datepicker__value_"
                            class="b-form-btn-label-control dropdown b-form-datepicker mb-2 datepker bg-hover-effect form-control d-flex h-auto align-items-stretch"
                            lang="en-US"><button id="example-datepicker" type="button" aria-haspopup="dialog"
                                aria-expanded="false" class="btn h-auto"><svg viewBox="0 0 16 16" width="1em"
                                    height="1em" focusable="false" role="img" alt="icon" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi-calendar b-icon bi">
                                    <g>
                                        <path fill-rule="evenodd"
                                            d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z">
                                        </path>
                                        <path fill-rule="evenodd"
                                            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z">
                                        </path>
                                    </g>
                                </svg></button>
                            
                            <div id="example-datepicker__dialog_" role="dialog" tabindex="-1" aria-modal="false"
                                aria-labelledby="example-datepicker__value_" class="dropdown-menu">
                                
                            </div><label id="example-datepicker__value_" for="example-datepicker"
                                class="form-control text-break text-wrap bg-transparent h-auto text-muted">No date
                                selected</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="distinations border-bottom">
            <div class="TimeLine">
                <div class="node nd0"></div>
                <div class="node nd1"></div>
            </div>
            <div class="container">
                <div class="row row-cols-12">
                    <div class="py-5 pl-3 pr5 border-bottom col">
                        <h2>Enter Destination</h2>
                        <p>Please select your Destination to visit first</p>
                        <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start" id="__BVID__21">
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                    Add a Location
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
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
                <div class="row row-cols-12">
                    <div class="py-5 pl-3 pr5 border-bottom col">
                        <h3>Your Lodge</h3>
                        <p>Please select your stay at the destination</p>
                        <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start" id="__BVID__22">
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                    Your Lodge
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
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
                <div class="row row-cols-12">
                    <div class="py-5 pl-3 pr5 col">
                        <h3>Your Transport</h3>
                        <p>Select Your Mode of Transport to Destination</p>
                        <div class="Xbox mb-3 border rounded p-3 d-flex justify-content-start align-items-start">
                            <div class="Xboxicon mr-3">  <img src={process.env.PUBLIC_URL + 'images/car.svg'} /></div>
                            <div class="Xboxtext">
                                <h4>Request Pickup and Drop off</h4>
                                <p class="price">55 USD - 75 USD</p>
                                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                                    Incididunt Lorem.</p>
                            </div>
                        </div>
                        <div class="Xbox mb-3 border p-3 rounded d-flex justify-content-start align-items-start">
                            <div class="Xboxicon mr-3">  <img src={process.env.PUBLIC_URL + 'images/tick.svg'} /></div>
                            <div class="Xboxtext">
                                <h4>Own Arrangement</h4>
                                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Tempor
                                    Incididunt Lorem.</p>
                            </div>
                        </div>
                        <fieldset class="form-group fgroup col-4 p-0 d-flex justify-content-start" id="__BVID__23">
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                    Select Option
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
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
        <div class="cost">
            <div class="container">
                <div class="map_footerdiv">
                    <div class="dates">
                        <div class="arrow-pointer date1">March 05 20</div>
                        <div class="date2">March 10 20</div>
                    </div>
                    <div class="cpperson"><span class="ccp">Cost Per Person*</span> <span class="ccpval">2.1K USD - 3.0K
                            USD</span></div>
                </div>
            </div>
        </div>
        <div class="saveInquery pr-md-5">
            <div class="container">
                <div class="row row-cols-12">
                    <div class="mp0 pt-5 pb-5 d-flex justify-content-between align-items-center col">
                        <fieldset class="form-group fgroup savebtn col-4 p-0 d-flex justify-content-start"
                            id="__BVID__24">
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn bgWplusbtn bg-orange border-hover-effect btn-secondary">
                                    SAVE AND VIEW
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
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
                        <fieldset class="form-group fgroup savebtn col-4 p-0 d-md-flex justify-content-end"
                            id="__BVID__25">
                            
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn bgWplusbtn bg-hover-effect btn-secondary">
                                    Inquire Now
                                    <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                        alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi-envelope b-icon bi">
                                        <g>
                                            <path fill-rule="evenodd"
                                                d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z">
                                            </path>
                                            <path
                                                d="M.05 3.555C.017 3.698 0 3.847 0 4v.697l5.803 3.546L0 11.801V12c0 .306.069.596.192.856l6.57-4.027L8 9.586l1.239-.757 6.57 4.027c.122-.26.191-.55.191-.856v-.2l-5.803-3.557L16 4.697V4c0-.153-.017-.302-.05-.445L8 8.414.05 3.555z">
                                            </path>
                                        </g>
                                    </svg></button>
   
                            </div>
                        </fieldset>
                    </div>
                </div>
                <h3 class="condition">Conditions and Agreement</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat
                    eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus,
                    dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut
                    augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim
                    dignissim. Donec pretium est sit amet ipsum fringilla feugiat. Aliquam erat volutpat. Maecenas
                    scelerisque, orci sit amet cursus tincidunt, libero nisl eleifend tortor, vitae cursus risus mauris
                    vitae nisi. Cras laoreet ultrices ligula eget tempus. Aenean metus purus, iaculis ut imperdiet eget,
                    sodales et massa. Duis pellentesque nisl vel massa dapibus non lacinia velit volutpat. Maecenas
                    accumsan interdum sodales. In hac habitasse platea dictumst. Pellentesque ornare blandit orci, eget
                    tristique risus convallis ut. Vivamus a sapien neque. Morbi malesuada massa.</p>
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
                    width="100%" height="81vh" frameborder="0"></iframe></div>
            <div class="map_footerdiv">
                <div class="dates">
                    <div class="arrow-pointer date1">March 05 20</div>
                    <div class="date2">March 10 20</div>
                </div>
                <div class="cpperson"><span class="ccp">Cost Per Person*</span> <span class="ccpval">2.1K USD - 3.0K
                        USD</span></div>
            </div>
        </div>
    </div>
</section>

  </div>
  )
    }
}

export default CustomTrip;