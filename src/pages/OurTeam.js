import React, { Component } from "react";

// Component exports the Home page structure to be rendered in the 'App' function
export class OurTeam extends Component {
    render() {
        return (
            <>
                <br />
            <div class="font-a31 text-center fs-1 w3-animate-left"> Our Team </div>
            <hr/>
            <div class="container-fluid bg15">
                <div class="row " >
                    <div class="col-3 text-right font-a11 w3-animate-right">
                        <div>  Person 1 </div>
                    </div>
                    <div class="col-6 text-left fs-5 fade-in-image " >
                        <p>Person 1 words</p>
                    </div>
                    <div class="col-3 bg4 justify-content-center font-a32 w3-animate-top" >
                    </div>
                </div>
                <br/>
                <hr/>
                <div class="row " >
                <div class="col-3 text-right font-a11 w3-animate-left ">
                    <div>  Person 2 </div>
                    </div>
                    <div class="col-6 text-left fs-5 fade-in-image " >
                        <p>Person 1 words</p>
                    </div>
                    <div class="col-3 bg3 justify-content-center bgcolors w3-animate-top" >
                    </div>
                </div>
                <br/>
                <hr/>
                <div class="row " >
                <div class="col-3 text-right font-a11 w3-animate-right">
                    <div>  Person 3 </div>
                    </div>
                    <div class="col-6 text-left fs-5 fade-in-image " >
                        <p>Person 1 words</p>
                    </div>
                    <div class="col-3 bg5 justify-content-center font-a32  w3-animate-top" >
                    </div>
                </div>
                </div>
                <br/>
            </>
        )
    }
}