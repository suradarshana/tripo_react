import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div >

               


<section class="SignUp">
    <div class="row overflow-hidden">
        <div class="col-sm-12 col-md-6 d-none d-md-block shadowcntact pr-0">
            <div class="contact_slidebar">
                <img src={process.env.PUBLIC_URL + 'images/signup.jpg'} width="100%" />
            </div>
        </div>
        <div class="col-sm-12 col-md-6 d-flex flex-column">
            <div class="rightContaint">
                <div class="row">
                    <div class="rightContaint-form">
                        <h2 class="w-100">Sign In</h2>
                        <fieldset class="form-group fgroup w-100" id="__BVID__18">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><input id="input-sm" type="email"
                                    placeholder="Email Address" class="finput form-control" /></div>
                        </fieldset>
                        <fieldset class="form-group fgroup w-100" id="__BVID__20">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><input id="input-default"
                                    type="password" placeholder="Password" class="finput form-control" /></div>
                        </fieldset>
                        <fieldset class="form-group fgroup w-100 d-flex justify-content-start" id="__BVID__22">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn plusBtn border-hover-effect btn-secondary">Login<svg viewBox="0 0 16 16"
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
                                    </svg></button></div>
                        </fieldset>
                        <fieldset class="form-group fgroup smtext" id="__BVID__23">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                <div class="custom-control custom-radio"><input type="radio" name="some-radios"
                                        autocomplete="off" class="custom-control-input" value="A" id="__BVID__24" /><label
                                        class="custom-control-label" for="__BVID__24">Remember me</label></div>
                            </div>
                        </fieldset>
                        <fieldset class="form-group fgroup  text-right text-black smtext" id="__BVID__25">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><a href="#" class="froget">Forgot
                                    Password</a></div>
                        </fieldset>
                        <fieldset class="form-group fgroup w-100  text-center border-top pt-3" id="__BVID__26">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><span>or sign in with</span></div>
                        </fieldset>
                        <fieldset class="form-group fgroup socialBtn d-flex justify-content-start" id="__BVID__27">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn google border-hover-effect btn-secondary">
                                         <img src={process.env.PUBLIC_URL + 'images/google.svg'} />
                                       
                                    Google</button></div>
                        </fieldset>
                        <fieldset class="form-group fgroup socialBtn  d-flex justify-content-start socialbtn"
                            id="__BVID__28">
                            <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                    class="btn facebook border-hover-effect btn-secondary">
                                           <img src={process.env.PUBLIC_URL + 'images/facebook.svg'} /> Facebook</button></div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="row mt-auto">
                <div class="rightContaintFooter">
                    <fieldset class="form-group fgroup col-8 d-flex justify-content-end" id="__BVID__29">
                        <div tabindex="-1" role="group" class="bv-no-focus-ring">
                            <p><span>Are You a New Here ?
                                </span>
                                Sign up to Create Your own Trip to Sri Lanka
                            </p>
                        </div>
                    </fieldset>
                    <fieldset class="form-group fgroup col-4 d-flex justify-content-end" id="__BVID__30">
                        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                class="btn bgWplusbtn bg-hover-effect btn-secondary">Create Account<svg
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
                                </svg></button></div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</section>



                            </div>
    )
    }
}

export default Login;