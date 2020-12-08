import React,{Component} from 'react';

class About extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div >
      <section class="innerHeader">
             <div class="container">
                 <h1>About us</h1>
             </div>
         </section>
 
         <section class="aboutus">
    <div class="container">
        <div class="para">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div class="vedioTag">
            <div><iframe src="https://www.youtube.com/embed/EoDLMTmSUxc"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen" width="100%" height="411px" frameborder="0"></iframe></div>
        </div>
        <div class="visionMission">
            <div class="container">
                <div class="row cols-sm-12 cols-md-12 cols-lg-12">
                    <div class="pm-0 col-sm-6">
                        <h2>Vision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="pm-0 col-sm-6">
                        <h2>Mission</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tripmo">
            <div class="tripmoText">
                <div class="container">
                    <div class="row row-cols-12">
                        <div class="pm-0 col">
                            <h2>Why Tripmo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tripmoImg">
                <div class="container">
                    <div class="row row-cols-12">
                        <img src={process.env.PUBLIC_URL + '/images/tripmo.jpg'} width="100%"  />
                    </div>
                </div>
            </div>
        </div>
        <div class="team">
            <div class="teamText">
                <div class="container">
                    <div class="row row-cols-12">
                        <div class="pm-0 col">
                            <h2>The Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                doloroment exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="teamMembers">
                <div class="container">
                    <div class="row">
                        <div class="teambox border-right border-bottom padingLftBotom col-sm-12 col-md-6">
                            <div class="propic">
                                <div class="proimg"><span class="b-avatar badge-secondary rounded-circle"
                                         width="100%"><span
                                            class="b-avatar-img"><img src={process.env.PUBLIC_URL + '/images/member.png'} alt="avatar" /></span>
                                        </span></div>
                                <div class="protext"><span class="name">John Doe Dolor</span> <span class="post">Founder
                                        / CEO</span></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="teambox border-bottom padingrightBotom col-sm-12 col-md-6">
                            <div class="propic">
                                <div class="proimg"><span class="b-avatar badge-secondary rounded-circle"
                                         width="100%"><span
                                            class="b-avatar-img"><img src={process.env.PUBLIC_URL + '/images/member.png'} alt="avatar" /></span>
                                        </span></div>
                                <div class="protext"><span class="name">John Doe Dolor</span> <span class="post">Founder
                                        / CEO</span></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo.</p>
                        </div>
                        <div class="teambox border-right padingLftTop col-sm-12 col-md-6">
                            <div class="propic">
                                <div class="proimg"><span class="b-avatar badge-secondary rounded-circle"
                                         width="100%"><span
                                            class="b-avatar-img"><img src={process.env.PUBLIC_URL + '/images/member.png'} alt="avatar" /></span>
                                        </span></div>
                                <div class="protext"><span class="name">John Doe Dolor</span> <span class="post">Founder
                                        / CEO</span></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="teambox padingrightTop col-sm-12 col-md-6">
                            <div class="propic">
                                <div class="proimg"><span class="b-avatar badge-secondary rounded-circle"
                                         width="100%"><span
                                            class="b-avatar-img"><img src={process.env.PUBLIC_URL + '/images/member.png'} alt="avatar" /></span>
                                        </span></div>
                                <div class="protext"><span class="name">John Doe Dolor</span> <span class="post">Founder
                                        / CEO</span></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud doloroment exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo.</p>
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

export default About;