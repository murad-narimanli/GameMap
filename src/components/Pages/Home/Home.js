import React from 'react';
import {Link} from "react-router-dom";
import Images from "../../../assets/img/Images/Images";
function Home(props) {
    return (
        <div>
            <div id="home">
                <div class="">
                    <div id="homeCarousel" class="carousel slide" data-ride="carousel">
                        <div class="container-fluid px-0">
                            <div class="carousel-indicators">
                                <div class="row justify-content-start w-100">
                                    <div class="col-md-4 picture pl-0">
                                        <img data-target="#homeCarousel" src={Images.image52png} data-slide-to="0"
                                             class="active image-fluid" />
                                            <div class="text pl-0">
                                                <h4 class="h4 title1">Cyberpunk 2077 Steam Key</h4>
                                            </div>
                                    </div>
                                    <div class="col-md-4 picture">
                                        <img data-target="#homeCarousel" src={Images.image3} data-slide-to="1"
                                             class="active image-fluid "/>
                                            <div class="text">
                                                <h4 class="h4 title2">PlayerUnknown’s Battlegrounds PC Steam Key</h4>
                                            </div>
                                    </div>
                                    <div class="col-md-4 picture pr-0">
                                        <img data-target="#homeCarousel" src="images/image 9.png" data-slide-to="2"
                                             class="active image-fluid" />
                                            <div class="text">
                                                <h4 class="h4 title3">Grand Theft Auto 5 Rockstar</h4>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Images.image1svg} class="image9 d-block w-100 img-responsive" />
                                        <img 
                                        src={Images.bg1}
                                             class="image10 img-responsive" />
                                            <div class="carousel-caption d-block">
                                                <div class="container  pl-0">
                                                    <div class="row title4">
                                                        <h2> Cyberpunk 2077</h2>
                                                        <h2>Steam Key</h2>
                                                </div>
                                                <div class="row">
                                                    <h5 class="date">October 10, 2020</h5>
                                                </div>
                                                <div class="vertical row">
                                                </div>
                                                <div class="row">
                                                    <p>PLATFORMS</p>
                                                    <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                                </div>
                                                <div class="row genre">
                                                    <p>GENRE</p>
                                                    <div class="genre-menu1">Action</div>
                                                    <div class="genre-menu2">Strategy</div>
                                                    <div class="genre-menu3">Strategy</div>
                                                </div>
                                                <div class="row">
                                                    <h3>29.90 &#x20bc;</h3>
                                                    <button class="buy btn-link">BUY</button>
                                                </div>
                                            </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img  src={Images.image1} class="d-block w-100 image1 img-responsive"/>
                                    <img src={Images.dfg1} class="image2 img-responsive"/>
                                        <div class="carousel-caption d-block">
                                            <div class="container pl-0">
                                                <div class="row title5">
                                                    <h2> PlayerUnknown’s
                                                        Battlegrounds </h2>
                                                    <h2> PC Steam Key
                                                    </h2>
                                                </div>
                                                <div class="row ">
                                                    <h5 class="date">October 10, 2020</h5>
                                                </div>
                                                <div class="vertical row">
                                                </div>
                                                <div class="row">
                                                    <p>PLATFORMS</p>
                                                    <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                                </div>
                                                <div class="row genre">
                                                    <p>GENRE</p>
                                                    <div class="genre-menu1">Action</div>
                                                    <div class="genre-menu2">Strategy</div>
                                                    <div class="genre-menu3">Strategy</div>
                                                </div>
                                                <div class="row">
                                                    <h3>29.90 &#x20bc;</h3>
                                                    <button class="buy btn-link">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div class="carousel-item">
                                <img src={Images.image52png} class="image7 d-block w-100 img-responsive" />
                                    <img src={Images.image53} class="image8 img-responsive" />
                                        <div class="carousel-caption d-block">
                                            <div class="container pl-0">
                                                <div class="row title6">
                                                    <h2> Grand Theft Auto 5</h2>
                                                    <h2>Rockstar </h2>
                                                </div>
                                                <div class="row">
                                                    <h5 class="date">October 10, 2020</h5>
                                                </div>
                                                <div class="vertical row">
                                                </div>
                                                <div class="row">
                                                    <p>PLATFORMS</p>
                                                    <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                                </div>
                                                <div class="row genre">
                                                    <p>GENRE</p>
                                                    <div class="genre-menu1">Action</div>
                                                    <div class="genre-menu2">Strategy</div>
                                                    <div class="genre-menu3">Strategy</div>
                                                </div>
                                                <div class="row">
                                                    <h3>29.90 &#x20bc;</h3>
                                                    <button class="buy btn-link">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div id="specials">
        <div class="container">
            <h3>SPECIALS</h3>
            <hr class="line4 ml-0" />
                <div class="slide hi-slide">
                    <div class="hi-prev"><i class="fas fa-chevron-circle-left fa-2x"></i></div>
                    <div class="hi-next"><i class="fas fa-chevron-circle-right fa-2x"></i></div>
                    <ul>

                        <li><img class="w-100" src={Images.Rectangle62} alt="Img 1"/>

                        </li>
                        <div class="caption">
                            <h1>
                                Star Wars Squadrons PC Origin Key
                            </h1>
                            <p class="date">October 10, 2020</p>
                            <div class="vertical">

                            </div>
                            <p class="game-text">This game is a multi-player video TPS, FPS game being released and
                                being
                                developed by Bluehole.
                                In the game, nearly 100 players start the game in an airplane.
                                You can easily spend your in-game with UC and buy many new features and packages that
                                will
                                provide extra advantages. </p>
                            <div class="row">
                                <h6>PLATFORMS</h6>
                                <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                            <div class="w-100"></div>
                                            <h6>LANGUAGES</h6>
                                            <p class="language">English</p>
                                            <p class="language">Turkish</p>
                            </div>
                            <div class="row genre">
                                <h6>GENRE</h6>
                                <div class="genre-menu1">Action</div>
                                <div class="genre-menu2">Strategy</div>
                            </div>
                            <div class="row">
                                <h3>19.50 &#x20bc;</h3>
                                <button class="buy btn-link">BUY</button>
                            </div>


                        </div>


                        <li><img src="images/Rectangle 61.png" alt="Img 2"/></li>

                        <li><img src="images/image 28.png" alt="Img 3"/></li>

                        <li><img src="images/Rectangle 63.png" alt="Img 4"/></li>

                    </ul>
                </div>
        </div>
    </div>

    <div id="icons">
        <div class="container">
            <div class="row firstrow mr-0">
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img src={Images.image34} class="icon-img1" />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img2" src={Images.image32} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box"><img class="icon-img3" src={Images.image39} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img4" src={Images.image38} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img1" src={Images.image34} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img2" src={Images.image32} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img4" src={Images.image38}  />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img3" src={Images.image39} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img2" src={Images.image32} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img1" src={Images.image34} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img4" src={Images.image38} />
                        </div>
                    </a>
                </div>
                <div class="col-md-2 mb-3">
                    <a class="box" href="">
                        <div class="icon-box">
                            <img class="icon-img3" src={Images.image39} />
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div id="discounted">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h3>DISCOUNTED</h3>
                    <hr class="line1 ml-0" />
                </div>
                <div class="col-6">
                    <div class="row justify-content-end mr-0">
                        <button class="viewMore">View more</button>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle62}  />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name">
                                    <a href="">
                                        Star Wars Squadrons PC Origin Key
                                    </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle61} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name">
                                    <a href=""> Star Wars Squadrons PC Origin Key
                                    </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle63} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name">
                                    <a href="">
                                        Star Wars Squadrons PC Origin Key
                                    </a>
                                </p>

                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle64} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href="">Star Wars Squadrons PC Origin Key
                                </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle65} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href="">
                                    Star Wars Squadrons PC Origin Key
                                </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle66} />
                            <div class="overlay"></div>
                        </a>
                                <div class="row">
                                    <div class="col-9">
                                        <p class="game-name"><a href=""> Star Wars Squadron PC Origin Key
                                        </a>
                                        </p>
                                    </div>
                                    <div class="col-3 justify-content-end">
                                        <button class="btn btn-primary"><img class="vector"
                                                                             src={Images.vectorsvg} /></button>
                                    </div>
                                </div>
                                <div class="">
                                    <p class="date">October 10, 2020</p>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <div class="sale">
                                            <p>-15%</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="price">
                                            <p>15.50&#x20bc;</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="old-price">
                                            <s>25.50&#x20bc;</s>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle67} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href=""> Star Wars Squadrons PC Origin Key </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="game-image" src={Images.rectangle68} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href=""> Star Wars Squadrons PC Origin Key
                                </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="sale">
                                    <p>-15%</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="price">
                                    <p>15.50&#x20bc;</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="old-price">
                                    <s>25.50&#x20bc;</s>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
            </div>
        </div>
    </div>
    <div id="carousel">
        <div class="container-fluid px-0">
            <div id="secondCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li class="carousel-indicator" data-target="#secondCarousel" data-slide-to="0" class="active"></li>
                    <li class="carousel-indicator" data-target="#secondCarousel" data-slide-to="1"></li>
                    <li class="carousel-indicator" data-target="#secondCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-responsive image3" src={Images.rectangle109}
                             alt="First slide"/>
                            <img src={Images.image50} class="img-responsive image4"/>
                                <div class="carousel-caption d-block">
                                    <div class="container pl-0">
                                        <div class="row">
                                            <h2 class="">Destroy All Humans!
                                            </h2>
                                        </div>
                                        <div class="row">
                                            <h5 class="date">October 10, 2020</h5>
                                        </div>
                                        <div class="vertical row">
                                        </div>
                                        <div class="row">
                                            <p>PLATFORMS</p>
                                            <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                        </div>
                                        <div class="row genre">
                                            <p>GENRE</p>
                                            <div class="genre-menu1">Action</div>
                                            <div class="genre-menu2">Strategy</div>
                                            <div class="genre-menu3">Strategy</div>
                                        </div>
                                        <div class="row">
                                            <h3>29.90 &#x20bc;</h3>
                                            <button class="buy btn-link">BUY</button>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-responsive image3" src={Images.rectangle110}
                             alt="Second slide" />
                            <img src="images/PUBG-Character-PNG-Transparent-Picture 1.png"
                                 class="img-responsive image5" />
                                <div class="carousel-caption d-block">
                                    <div class="container pl-0">
                                        <div class="row">
                                            <h2 class="">Destroy All Humans!
                                            </h2>
                                        </div>
                                        <div class="row">
                                            <h5 class="date">October 10, 2020</h5>
                                        </div>
                                        <div class="vertical row">
                                        </div>
                                        <div class="row">
                                            <p>PLATFORMS</p>
                                            <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                        </div>
                                        <div class="row genre">
                                            <p>GENRE</p>
                                            <div class="genre-menu1">Action</div>
                                            <div class="genre-menu2">Strategy</div>
                                            <div class="genre-menu3">Strategy</div>
                                        </div>
                                        <div class="row">
                                            <h3>29.90 &#x20bc;</h3>
                                            <button class="buy btn-link">BUY</button>
                                        </div>
                                    </div>
                                </div>
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100 img-responsive image3" src={Images.rectangle122}
                             alt="Third slide" />
                            <img src="images/dd94nor-bc6621a5-69b7-49b8-af0f-12b1cb1879be 1.png"
                                 class="img-responsive image6" />
                                <div class="carousel-caption d-block">
                                    <div class="container pl-0">
                                        <div class="row">
                                            <h2 class="">Destroy All Humans!
                                            </h2>
                                        </div>
                                        <div class="row">
                                            <h5 class="date">October 10, 2020</h5>
                                        </div>
                                        <div class="vertical row">
                                        </div>
                                        <div class="row">
                                            <p>PLATFORMS</p>
                                            <img class="icon1" src={Images.image18svg} />
                                                    <img class="icon2" src={Images.image19svg} />
                                                    <img class="icon3" src={Images.image42svg}/>
                                        </div>
                                        <div class="row genre">
                                            <p>GENRE</p>
                                            <div class="genre-menu1">Action</div>
                                            <div class="genre-menu2">Strategy</div>
                                            <div class="genre-menu3">Strategy</div>
                                        </div>
                                        <div class="row">
                                            <h3>29.90 &#x20bc;</h3>
                                            <button class="buy btn-link">BUY</button>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="new">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h3>NEW PRODUCTS</h3>
                    <hr class="line3 ml-0" />
                </div>
                <div class="col-6">
                    <div class="row justify-content-end mr-0">
                        <button class="viewMore">View more</button>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="new-game-image" src={Images.rectangle85} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href=""> Star Wars Squadrons PC Origin Key
                                </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>

                        <div class="price-new">
                            <p>15.50&#x20bc;</p>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="new-game-image" src={Images.rectangle86} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href=""> Star Wars Squadrons PC Origin Key
                                </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>

                        <div class="price-new">
                            <p>15.50&#x20bc;</p>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="new-game-image" src={Images.rectangle87} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name"><a href="">
                                    Star Wars Squadrons PC Origin Key
                                </a>
                                </p>
                            </div>
                            <div class="col-3 justify-content-end">
                                <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                            </div>
                        </div>
                        <div class="">
                            <p class="date">October 10, 2020</p>
                        </div>

                        <div class="price-new">
                            <p>15.50&#x20bc;</p>
                        </div>
                    </div>
                    <hr class="line2" />
                </div>
                <div class="col-md-3">
                    <div class="game">
                        <a href="">
                            <img class="new-game-image" src={Images.rectangle88} />
                                <div class="overlay"></div>
                        </a>
                        <div class="row">
                            <div class="col-9">
                                <p class="game-name">
                                    <a href=""> Star Wars Squadrons PC Origin Key</a>
                                </p>
                        </div>
                        <div class="col-3 justify-content-end">
                            <button class="btn btn-primary"><img class="vector" src={Images.vectorsvg} /></button>
                        </div>
                    </div>
                    <div class="">
                        <p class="date">October 10, 2020</p>
                    </div>

                    <div class="price-new">
                        <p>15.50&#x20bc;</p>
                    </div>
                </div>
                <hr class="line2" />
            </div>
        </div>
    </div>
</div>
</div>
);
}

export default Home;
