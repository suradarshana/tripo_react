import React, { Component } from 'react';

class CheckoutSuccessful extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <section class="bookingComplate">
                    <div class="containerca">
                        <div class="row overflow-hidden d-flex justify-content-between align-items-start">
                            <div>
                            <div class="rightContaint">
                                <div class="rightContaint-form">
                                    <h1 class="w-100">BOOKING COMPLETE</h1>
                                    <fieldset class="form-group fgroup w-100 secTitle">
                                        <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                            <h2>YOUR TRIP HAS BEEN BOOKED<br /> SUCCESSFULY !</h2>
                                        </div>
                                    </fieldset>
                                    <fieldset class="form-group fgroup mb-5 w-100" >
                                        <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                            <div><a href="#" class="pr-5 text-underline">Conditions and Agreemnent</a>
                                                <a href="#" class="text-underline">Cancellation Policy</a></div>
                                        </div>
                                    </fieldset>
                                    <div class="row fgroup w-100">
                                        <div class="col-sm-12 col-md-7">
                                            <p>Your Booking can be accessed Through </p>
                                            <div class="border-right"><button type="button"
                                                class="btn mt-0 plusBtn bgorang border-hover-effect btn-secondary">GO TO PROFILE<svg
                                                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus ml-4 b-icon bi">
                                                    <g>
                                                        <path fill-rule="evenodd"
                                                            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                                                        </path>
                                                        <path fill-rule="evenodd"
                                                            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"></path>
                                                    </g>
                                                </svg></button></div>
                                        </div>
                                        <div class="col-sm-12 col-md-5">
                                            <p>Download Your Trip Schedule Here</p> <button type="button"
                                                class="btn mt-0 plusBtn bg-hover-effect btn-secondary">DOWNLOAD .PDF<svg viewBox="0 0 16 16" width="1em"
                                                    height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" class="bi-file-earmark-text ml-4 b-icon bi">
                                                    <g>
                                                        <path
                                                            d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z">
                                                        </path>
                                                        <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"></path>
                                                        <path fill-rule="evenodd"
                                                            d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z">
                                                        </path>
                                                    </g>
                                                </svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="shadowcntact">
                            <div class="contact_slidebar">
                                <img src={process.env.PUBLIC_URL + 'images/caccount.jpg'} width="100%" />
                            </div>
                        </div>

                        </div>

                    </div>


                </section>
            </div>
        )
    }
}

export default CheckoutSuccessful;
