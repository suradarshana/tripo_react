import React,{Component} from 'react';

class SignUp extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
    <div >
         <section class="createAccount">
            <div class="containerca">
                <div class="overflow-hidden d-md-flex justify-content-between align-items-start">
                    
                    <div class="">
                        <div class="rightContaint">
                          


                        <div class="rightContaint-form">
    <h1 class="w-100">Create Your Tripo Account</h1>
    <fieldset class="form-group fgroup" id="__BVID__18">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring">
            <img src={process.env.PUBLIC_URL + 'images/camara.svg'} />
        </div>
    </fieldset>
    <fieldset class="form-group fgroup mb-5" id="__BVID__19">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input id="input-sm" type="text"
                placeholder="First Name *" class="finput mb-4 form-control" /> <input id="input-sm" type="text"
                placeholder="Last Name" class="finput form-control" />
        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__22">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input  type="text"
                placeholder="Country* " class="finput form-control" />
        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__24">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input  type="text"
                placeholder="Mobile Number*" class="finput form-control" />

        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__26">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input  type="text"
                placeholder="Email Address*" class="finput form-control" />

        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__28">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input  type="text"
                placeholder="Passport Number*" class="finput form-control" />

        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__30">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input  type="password"
                placeholder="Password*" class="finput form-control" />

        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__32">
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><input  type="password"
                placeholder="Re-Type Password*" class="finput form-control" />
        </div>
    </fieldset>
    <fieldset class="form-group fgroup d-flex justify-content-start align-items-center bd-top" id="__BVID__34">
        <div tabindex="-1" role="group" class="bv-no-focus-ring">
            <div class="custom-control custom-radio"><input type="radio" name="some-radios" autocomplete="off"
                    class="custom-control-input" value="A" id="__BVID__35" /><label class="custom-control-label"
                    for="__BVID__35">I Agree to the Term and Conditions</label></div>
        </div>
    </fieldset>
    <fieldset class="form-group snbtn fgroup  d-flex  align-items-center" id="__BVID__36">
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                class="btn plusBtn border-hover-effect btn-secondary">Sign up<svg viewBox="0 0 16 16" width="1em"
                    height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" class="bi-plus b-icon bi">
                    <g>
                        <path fill-rule="evenodd"
                            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z">
                        </path>
                        <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z">
                        </path>
                    </g>
                </svg></button>
        </div>
    </fieldset>
</div>
                          
                               




                           
                        </div>
                    </div>

                    <div class="shadowcntact d-none d-md-block">
                        <div class="contact_slidebar">
                            
                        <img src={process.env.PUBLIC_URL + '/images/caccount.jpg'} width="100%" />

                        </div>
                    </div>
                   
                </div>
              
            </div>

        </section>


      
    </div>
    )
    }
}

export default SignUp;
