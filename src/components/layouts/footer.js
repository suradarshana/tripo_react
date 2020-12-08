import React from 'react'
export const footer = () => {
    return (
        <div>
            <section class="imageBar">
                <div class="container">
                    <div class="row">
                        <div class="imageBarCaption">
                            <div class="imageBarText">
                                <h2>
                                    Got Questions About Our Services and Platform?
                            </h2>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/>  labore et dolore magna aliqua. Ut enim ad minim veniam... </p>
                        </div>
                                <div class="imageBarBtn">
                                    <button>
                                        Go to Inquiry<span>
                                            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chevron-right b-icon bi"><g><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></g></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

                <div class="footer">
                    <div class="container">
                        <div class="footerWrap">
                            <div class="ftlogo">
                            <img  src={process.env.PUBLIC_URL + '/images/flogo.jpg'} /> 
                                <span>
                                    For the Adventurer in you </span>
                            </div>

                            <div class="discription">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/>  labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>

                                <div class="subscribe">
                                    <h2>Get the Latest Event Updates, Subscribe Now! </h2>

                                    <div class="subscribeInput">
                                        <input type="email" name="subscribe" placeholder="Enter Your Email Adress" class="subscribeEmail" />
                                        <input type="submit" value="Subscribe" class="subscribeBtn" />
                                    </div>
                                </div>

                                <div class="footerMenu">
                                    <ul>
                                        <li><a href="">About Us </a></li>
                                        <li><a href="">News and Blog </a></li>
                                        <li><a href="">Contact us </a></li>
                                        <li><a href="">Legal and Agreement </a></li>
                                        <li><a href="">Privacy Policy </a></li>
                                    </ul>
                                </div>

                                <div class="copyRight">
                                    <p>
                                        All Right Reserved Tripmo 2020 </p>
                                </div>


                            </div>
                        </div>

                        <div class="mobile_fix_footer justify-content-between align-items-center">
                            <div class="mobi_view_map p-3 w-50">
                                <label>View Map</label>
                            </div>
                            <div class="mobi_view_booknow p-3 w-50">
                                <label>Booking Now {/* <b-icon icon="plus"></b-icon> */}</label>
                            </div>
                        </div>

                    </div>
                </div>
)
}

export default footer;