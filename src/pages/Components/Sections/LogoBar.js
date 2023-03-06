import React, { Component } from "react";

export class LogoBar extends Component {
    render() {
         return (
            <>
            <div class="col-5 right font-a1">
            <h1>Welcome to</h1>
            </div>

            <div class="container-fluid">
                <div class="row " >
                    <div class="col-3 right">
                    </div>
                    <div class="col-4 right font-a2"  >
                    <div class="font-a2" > SandPiper</div>
                    </div>
                    <div class="col-5 left font-a3">
                    <div class="font-a3" >Solutions Inc.</div>
                    </div>
                </div>
            </div>

            {/*}<div> 
                <a class="navbar-brand mb-0 h1" >
                    <img class="img-thumbnail " src="/media/IMG_1613.jpg" width="200em" height="200em" alt="Main logo" />
                </a>
            </div>{*/}
            </>
        );
    }
}

export default LogoBar;
