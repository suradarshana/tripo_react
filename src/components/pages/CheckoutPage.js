import React,{Component} from 'react';

class Checkout extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
    <div >
          <section class="innerHeader mb-0">
            <div class="container d-flex justify-content-between align-items-center">
                <h1>CHECKOUT</h1>

            </div>
        </section>


        <section class="checkoutpage">
            
        <div class="leftColomn">
    <div class="innrpageContaint">
        <div class="checkoutpageHeader pb-4">
            <div class="box">
                <p><a href="">Sign in </a>to book with your saved details or<a href=""> Register</a> to manage your
                    bookings on the go!</p>
            </div>
        </div>
        <div class="checkoutleft">
            <div>
                <div class="checkoutleft-form">
                    <div class="row fealdSet">
                        <h2 class="w-100"><span class="num">01</span> Customer Information</h2>
                        <fieldset class="form-group fgroup w-100 d-flex m-3 mb-4" id="__BVID__18">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <select class="finput rowfield selectWth custom-select" placeholder="Title" id="__BVID__19">
                                    <option value="">Title</option>
                                    <option value="a">Option A</option>
                                    <option value="b">Option B</option>
                                </select>
                                <div class="rowfield">
                                        <input id="input-sm" type="text" placeholder="First Name " class="finput form-control" /></div>
                                    <div class="rowfield">
                                        <input id="input-sm" type="text" placeholder="Last Name " class="finput form-control" />
                                </div>



                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup ml-3" id="__BVID__22">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="Email Address" class="finput form-control" />



                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup ml-3" id="__BVID__24">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="Confirm Email Address" class="finput form-control" />



                            </div>
                        </fieldset>
                    </div>
                    <div class="row fealdSet">
                        <h2 class="w-100"><span class="num">02</span>Billing Address and Information</h2>
                        <fieldset class="form-group fgroup w-100 ml-3 mr-3" id="__BVID__26">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="Your Address" class="finput form-control" />



                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup ml-3" id="__BVID__28">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="City" class="finput form-control" />



                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup ml-3" id="__BVID__30">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="Zip Code / Postal Code" class="finput form-control" />
                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup ml-3" id="__BVID__32">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><select
                                    class="finput rowfield selectWth custom-select" placeholder="Title" id="__BVID__33">
                                    <option value="">Country</option>
                                    <option value="a">Option A</option>
                                    <option value="b">Option B</option>
                                </select>



                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup ml-3" id="__BVID__34">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="Phone Number" class="finput form-control" />



                            </div>
                        </fieldset>
                    </div>
                    <div class="row fealdSet border-white">
                        <h2 class="w-100"><span class="num">03</span> Payment Information</h2>
                        <fieldset class="form-group fgroup w-100 ml-3 mr-3" id="__BVID__36">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <input id="input-lg" type="text" placeholder="Card Number" class="finput masterCard form-control" />



                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup w-100 d-flex m-3 mb-4" id="__BVID__38">

                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <div class="rowfield">
                                    <input id="input-sm" type="text" placeholder="Name on Card" class="finput form-control" /></div>
                                <div class="rowfield">
                                    <input id="input-sm" type="text" placeholder="Exp Date" class="finput form-control" /></div>
                                <div class="rowfield">
                                    <input id="input-sm" type="text" placeholder="CVV" class="finput question form-control" /></div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="cotFooter">
                        <div class="row cotrow">
                            <div class="cotF8text col">
                                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do Eiusmod Conditions and
                                    Agreement.</p>
                            </div>
                            <div class="col-4">
                                <fieldset class="form-group cbBtn d-flex justify-content-end align-items-center"
                                    id="__BVID__42">

                                    <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                            class="btn plusBtn border-hover-effect btn-secondary">Complete Booking<svg
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            <div class="map_card_section">
                <div class="map_card_Wrapper">

                    <div class="mapCard">
                        <div class="title">
                            <span class="orangeText">5 Days </span>
                            Beaches and Views
                        </div>


                        <div class="mapCardHeader">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.17912595028!2d80.10152201810556!3d6.127689066038924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177fbcae7226d%3A0x373eeb50aad15308!2sHikkaduwa!5e0!3m2!1sen!2slk!4v1595000118561!5m2!1sen!2slk" width="100%" height="278px" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </div>
                        <div class="stend d-flex justify-content-between align-items-center">
                            <div class="st border">
                                <label>Start</label>
                                <span>
                                    MARCH 10
                                </span>
                            </div>
                            <div class="end border">
                                <label>End</label>
                                <span>
                                    MARCH 60
                                </span>
                            </div>

                        </div>
                        <div class="price mb-3">
                            <label>Cost Per Person*</label>
                            <span>2.1K USD - 3.0K USD</span>

                        </div>
                    </div>

                </div>
            </div>
        </section>

      
    </div>
  )
}
}

export default Checkout;
