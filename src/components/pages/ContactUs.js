import React,{Component} from 'react';

class ContactUs extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
  <div>
    <section class="contactUs">
      <div class="container">
        <div class="row overflow-hidden">
          <div class="col-md-4  col-lg-3 shadowcntact">
            <div class="contact_slidebar">
              <h1>Contact Us</h1>

              <div class="contactAddList">
                <div class="contactAdd">
                  <div class="cicon">
                    <img src={process.env.PUBLIC_URL + '/images/icon/home.svg'} />
                  </div>
                  <div class="cdetails">
                    <p>
                      N0 70,
                      <br />Hillgroove st,
                      <br />Hailstrom Avenue
                      <br />New Zealand
                      <br />
                    </p>
                  </div>
                </div>

                <div class="contactAdd">
                  <div class="cicon">
                  <img src={process.env.PUBLIC_URL + '/images/icon/home.svg'} />
                  </div>
                  <div class="cdetails">
                    <p>
                      N0 70,
                      <br />Hillgroove st,
                      <br />Hailstrom Avenue
                      <br />New Zealand
                      <br />
                    </p>
                  </div>
                </div>

                <div class="contactAdd">
                  <div class="cicon">
                    <img src={process.env.PUBLIC_URL + '/images/icon/phone.svg'} />
                  </div>
                  <div class="cdetails">
                    <p>
                      +00 000 000 00
                      <br />+00 000 000 00
                    </p>
                  </div>
                </div>

                <div class="contactAdd">
                  <div class="cicon">
                  <img src={process.env.PUBLIC_URL + '/images/icon/home.svg'} />
                  </div>
                  <div class="cdetails">
                    <p>
                      <a href mailto="Hello@tripo.com">Hello@tripo.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="rightContaint">
              <div class="">
              <div class="rightContaint-form">
    <h2 class="w-100">Your Inquiry</h2>
    <fieldset class="form-group fgroup" id="__BVID__18">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring">
          <input id="input-sm" type="text" placeholder="Name" class="finput form-control" />
        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__20">
        
        <div tabindex="-1" role="group" class="bv-no-focus-ring">
          <input id="input-default" type="text" placeholder="Mobile Number" class="finput form-control" />
        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__22">
        <div tabindex="-1" role="group" class="bv-no-focus-ring">
          <input id="input-lg" type="text" placeholder="Email Address*" class="finput form-control" />

        </div>
    </fieldset>
    <fieldset class="form-group fgroup" id="__BVID__24">
        <div tabindex="-1" role="group" class="bv-no-focus-ring">
          <select class="finput custom-select" id="__BVID__25">
                <option value="">Type of Inquiry</option>
                <option value="a">Option A</option>
                <option value="b">Option B</option>
            </select>

        </div>
    </fieldset>
    <fieldset class="form-group fgroup w-100" id="__BVID__26">
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><textarea id="textarea-small"
                placeholder="Your Inquiry" rows="2" class="ftarea form-control" wrap="soft"></textarea>
        </div>
    </fieldset>
    <fieldset class="form-group sendbtn fgroup w-100 d-flex justify-content-end" id="__BVID__28">
        <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                class="btn plusBtn border-hover-effect btn-secondary">
                SEND
                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-plus b-icon bi">
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
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
}

export default ContactUs;
