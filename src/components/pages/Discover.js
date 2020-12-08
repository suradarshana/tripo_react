import React,{Component} from 'react';

class Discover extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
    <div >
        
        <section class="innerHeader">
            <div class="container">
                <h1>Discover Sri lanka</h1>
            </div>
        </section>


        <section class="news">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card vertical">
                            <div class="cardImage"> <img class="card-img-top" src={process.env.PUBLIC_URL + 'images/news1.jpg'}  alt="Card image cap" /></div>
                            <div class="card-body mpall0">
                                <div class="card-containt">
                                    <h2 class="card-title">Where the Jungle Meets the<br /> Sea - Sri Lanka 2020</h2>
                                    <div class="d-flex justify-content-between">
                                        <p class="daterange">March 25th 2020 </p>
                                        <p class="daterange">Mary Johns Pip</p>
                                    </div>


                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam... </p>

                                    <div class="readMore">
                                        <a href="#">Read More </a>
                                        <b-icon icon="plus"></b-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="newslist">
                            <div class="newsone hover-effect">
                                <div class="newsCaption ">

                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Sri Lanka's Top to Visit<br /> Destinations</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>




                                </div>
                            </div>

                            <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">

                                    <figure class="effect-lily">
                                        <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Sri Lanka's Top to Visit<br /> Destinations</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>




                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="discoverGrid pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 pb-3 news">
                        <div class="newslist">
                            <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">
                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Most Sightfull Places in<br /> Sri Lanka</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <p class="card-text pl-3 pr-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>

                    <div class="col-lg-4  pb-3 news">
                        <div class="newslist">
                        <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">
                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Most Sightfull Places in<br /> Sri Lanka</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <p class="card-text pl-3 pr-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>


                    <div class="col-lg-4 pb-3 news">
                        <div class="newslist">
                        <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">
                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Most Sightfull Places in<br /> Sri Lanka</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <p class="card-text pl-3 pr-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>


                    <div class="col-lg-4 pb-3 news">
                        <div class="newslist">
                        <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">
                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Most Sightfull Places in<br /> Sri Lanka</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <p class="card-text pl-3 pr-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>


                    <div class="col-lg-4 pb-3 news">
                        <div class="newslist">
                        <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">
                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Most Sightfull Places in<br /> Sri Lanka</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <p class="card-text pl-3 pr-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>


                    <div class="col-lg-4 pb-3 news">
                        <div class="newslist">
                        <div class="newsone hover-effect mb-0">
                                <div class="newsCaption ">
                                    <figure class="effect-lily">
                                          <img src={process.env.PUBLIC_URL + 'images/news2.jpg'} alt="img12" />
                                        <figcaption>
                                            <h3>Most Sightfull Places in<br /> Sri Lanka</h3>
                                            <p class="daterange">March 20 2020</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <p class="card-text pl-3 pr-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                    </div>



                    <div class="col-lg-12 pb-5 text-center lmBTN">
                        <button type="button" class="btn btn-outline-secondary bg-hover-effect  rounded-0">Load More</button>
                    </div>


                </div>
            </div>
        </section>
    </div>
    )
    }
}

export default Discover;
