import React from 'react'


export const innerheader = () => {
    return (
       <div class="menu innerPageMenu">

<nav class="navbar navbar-transparent fixed-top navbar-expand-lg">
        <div class="container containerHeader">
         <a href="#" target="_self" class="navbar-brand logo">
                    <img src={process.env.PUBLIC_URL + 'images/wlogo.jpg'} />
                        </a>  <button type="button" aria-label="Toggle navigation"
                class="navbar-toggler collapsed" aria-expanded="false" aria-controls="nav-collapse"><svg
                    viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-list b-icon bi">
                    <g>
                        <path fill-rule="evenodd"
                            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                        </path>
                    </g>
                </svg></button>
            <div id="nav-collapse" class="navbar-collapse collapse" >
                <ul class="navbar-nav navbar-nav menu-list ml-auto">
                    <li class="nav-item active"><a href="/about-us" target="_self" class="nav-link">About Us</a></li>
                    <li class="nav-item"><a href="/explore-trips" target="_self" class="nav-link">Trips</a></li>
                    <li class="nav-item"><a href="/discover" target="_self" class="nav-link">Discover</a></li>
                    <li class="nav-item"><a href="/contact-us" target="_self" class="nav-link">Contact Us</a></li>
                    <li class="nav-item costomTrip"><a href="/custom-trip" target="_self" class="nav-link">Costom Trip
                            <span><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
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
                                </svg></span></a></li>
                    <li class="nav-item welcome"><a href="/profile" target="_self" class="nav-link"><span
                                class="wicon"><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false"
                                    role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi-person b-icon bi">
                                    <g>
                                        <path fill-rule="evenodd"
                                            d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">
                                        </path>
                                    </g>
                                </svg></span><span class="text"><label class="sm-text">Welcome Back</label><label
                                    class="lg-text">Moanna Jonathan</label></span></a></li>
                </ul>
            </div>
        </div>
    </nav>

           

        </div>
        )
}

export default innerheader;