import React,{Component} from 'react';
import { Tabs, Tab, Nav, Col, Row, Carousel } from 'react-bootstrap';
class Profile extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
    <div >
        <section class="profilePage">
    <div class="proGrid">
        <div class="row">
            <div class="leftCol pr-0 col-sm-12 col-md-9">
                <div class="rowOne firstrow rowOneboder">
                    <div class="row">
                        <div class="probox borderBottom col-sm-12 col-md-4">
                            <div class="d-flex justify-content-start align-items-center">
                                <div><img src={process.env.PUBLIC_URL + '/images/boy.png'} class="probox-img mr-4" /></div>
                                <div class="avatarInfo"><span class="bold">Moanna Jonathan</span> <span>00VXXC</span>
                                </div>
                            </div>
                        </div>
                        <div class="probox mmb0 col-sm-6 col-md-4 col-6"><label>Total Trips</label> <span>06</span>
                        </div>
                        <div class="probox mmb0 col-sm-6 col-md-4 col-6"><label>Rated Trips</label> <span>5.5</span>
                        </div>
                    </div>
                </div>
                <div class="rowOne secRow">
                    <div class="row">
                        <div class="probox col-sm-6 col-md-4 col-lg-3"><label>Country</label> <span>United
                                Kingdom</span></div>
                        <div class="probox col-sm-6 col-md-4 col-lg-3"><label>Passport Number</label>
                            <span>N09867X987</span></div>
                        <div class="probox col-sm-6 col-md-4 col-lg-3"><label>Mobile Number</label> <span>+00 0000
                                0000</span></div>
                        <div class="probox col-sm-6 col-md-4 col-lg-3"><label>Email Address</label>
                            <span>Moanna@outlook.com</span></div>
                    </div>
                </div>
            </div>
            <div
                class="rightCol border-left border-bottom d-flex justify-content-between align-items-center flex-md-column col-sm-12 col-md-3">
                <div>
                    <fieldset class="form-group  d-flex justify-content-end align-items-center" >
                   <div tabindex="-1" role="group" class="bv-no-focus-ring"><button type="button"
                                class="btn bgWplusbtn bg-hover-effect btn-secondary">Edit Profile<svg
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
                                </svg></button>
                           
                       </div>
                    </fieldset>
                </div>
                <div class="probox mt-md-auto"><label><a href="" class="text-underline">Change Password</a></label>
                </div>
            </div>
        </div>
    </div>
    <div class="profileContaint">
        <div class="container">
            <div class="card">
   
            <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
            <Row>
                    <Col sm={"auto"}>
                       <Nav variant="pills" className="flex-column">
                           <Nav.Item>
                               <Nav.Link eventKey="tab1">Saved Trips</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab2">Upcoming Trips </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab3">Past Trips</Nav.Link>
                            </Nav.Item>
                       </Nav>
                    </Col >
                    <Col>
                        <Tab.Content>

                            <Tab.Pane eventKey="tab1">
                            <p class="card-text">
<div class="rightColomn">
    <div class="packageList">
        <div class="packageOne">
            <div class="row border rounded boxstyle">
                <div class="col-sm-12 col-md-4">
                    <div class="carasolPackage mb-3">
                        <div role="region" id="carousel-3" aria-busy="false"
                            class="carousel slide"
                            >
                             <Carousel  indicators={false} >
                              <Carousel.Item>
                               <img
                                        src={process.env.PUBLIC_URL + '/images/tripslider.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                  </Carousel.Item>
                                                                  <Carousel.Item>
                                    
                                   <img
                                        src={process.env.PUBLIC_URL + '/images/tripslider2.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                </Carousel.Item>
                                                                <Carousel.Item><img
                                        src={process.env.PUBLIC_URL + '/images/tripslider3.jpg'}
                                        class="img-fluid w-100 d-block" width="1024"
                                        height="480" />
                                                                   </Carousel.Item>
                                                                   </Carousel>
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-5">
                    <h2>5 DAYS<br />
                        Mountains and Viewa
                    </h2>
                    <p class="packageDate">March 20 - March 28</p>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sed Do
                        Eiusmod Tempor Incididunt Lorem Ipsum Dolor Sit Amet Consectetur
                        Adipisicing Elit Sed Do Eiusmod Tempor Incididunt</p>
                    <p class="citylist"><span>Ella <svg viewBox="0 0 16 16" width="1em"
                                height="1em" focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-dash b-icon bi">
                                <g>
                                    <path fill-rule="evenodd"
                                        d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z">
                                    </path>
                                </g>
                            </svg></span><span>Nuwara Eliya <svg viewBox="0 0 16 16"
                                width="1em" height="1em" focusable="false" role="img"
                                alt="icon" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" class="bi-dash b-icon bi">
                                <g>
                                    <path fill-rule="evenodd"
                                        d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z">
                                    </path>
                                </g>
                            </svg></span><span>Badulla</span></p>
                </div>
                <div class="col-sm-12 col-md-3">
                    <div class="review">
                        <h3>5.5 Reviews</h3>
                        <div class="star"><svg viewBox="0 0 16 16" width="1em" height="1em"
                                focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-star-fill b-icon bi">
                                <g>
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                    </path>
                                </g>
                            </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-star-fill b-icon bi">
                                <g>
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                    </path>
                                </g>
                            </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-star-fill b-icon bi">
                                <g>
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                    </path>
                                </g>
                            </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-star-fill b-icon bi">
                                <g>
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                    </path>
                                </g>
                            </svg> <svg viewBox="0 0 16 16" width="1em" height="1em"
                                focusable="false" role="img" alt="icon"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-star-fill b-icon bi">
                                <g>
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                                    </path>
                                </g>
                            </svg></div>
                    </div>
                    <hr class="separator" />
                    <div class="price"><span class="bld-text">1300 USD</span> <span
                            class="cost">Estimated Cost Per Person</span></div>
                    <hr class="separator" />
                    <div class="gobtn"><a href="#"
                            class="btn btn-primary card-button border-hover-effect ">Go to
                            Plan <svg viewBox="0 0 16 16" width="1em" height="1em"
                                focusable="false" role="img" alt="icon"
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
                            </svg></a></div>
                </div>
            </div>
        </div>
        <div class="tripFooter d-flex align-items-center mb-5"><a href=""
                class="issu text-underline pr-4">Report an Issue</a> <a href=""
                class="canceltrip text-underline">Cancel Trip</a></div>
    </div>
</div>
</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="tab2">
                            <p class="card-text">Tab contents 2</p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="tab3">
                            <p class="card-text">Tab contents 3</p>
                            </Tab.Pane>
                       
                        </Tab.Content>
                     </Col>
                     </Row>
                 </Tab.Container>
   
            </div>
        </div>
    </div>
</section>
    </div>
    )
    }
}

export default Profile;
