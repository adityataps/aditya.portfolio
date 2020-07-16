import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/about.css';
import './stylesheets/screens.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import flowers from '../images/flowers.jpg'
import name from '../images/name.png'
import me from '../images/me.png'




export const about = () => {
    return(
        <div className={"page"}>

            <BrowserView>
                <img src={flowers}
                    className={"background-image"}
                    alt={"flowers"}
                    style={{zIndex: -5}}
                />
                <div className={"nav-bar"}>
                    <img src={name} className={"nav-name"} alt={"aditya tapshalkar"} style={{float:"left"}}/>
                    <div className={"nav-links-container"}>
                        <Link to={"/"} className={"nav-link"}> home </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <b style={{'text-shadow': '2px 0 red'}}> about </b>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/blog"} className={"nav-link"}> blog </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/projects"} className={"nav-link"}> projects </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/resume"} className={"nav-link"}> résumé </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/contact"} className={"nav-link"}> contact </Link>
                    </div>
                </div>

                <div className={"about-container"}>
                    <div className={"table-row"}>
                        <div className={"table-cell portrait"}>
                            <img src={me} alt={"the only me is me. are you sure the only you is you?"} className={"picture-me"}/>
                        </div>
                        <div className={"table-cell about"} style={{position: 'absolute'}}>
                            <Typist cursor={{blink: true, element: '|'}} className={"typist-header"}>
                                <Typist.Delay ms={750} />
                                System.out.println("
                                <b style={{color: 'red'}}>
                                    hello world!
                                </b>
                                ");
                            </Typist>
                            <div className={"about-text"}>

                                Based in Atlanta, studying AI and user-centric programming
                                at the Georgia Institute of Technology,
                                with a penchant for web development.
                                <br/>
                                <br/>
                                Intrigued by design, human-computer interaction, traveling, fine art,
                                music, photography, and cooking.
                                <br/>
                                <br/>
                                Driven by the unpossible and seeking to be inspired by those around me.

                            </div>
                        </div>
                    </div>
                </div>

            </BrowserView>

            <MobileView>

            </MobileView>

        </div>



    );
};