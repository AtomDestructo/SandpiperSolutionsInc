import React, { Component } from "react";

// Component exports the Home page structure to be rendered in the 'App' function
export class Home extends Component {
    render() {
        return (
            <>
                <h1>Under Construction!</h1>
                <img
                    src="/media/imgtest.png"
                    width={"150px"}
                    alt={"Hard Hat"}
                />
                <div className="row">
                    <div className="col-md">Home</div>
                    <div className="col-md">Test</div>
                </div>
            </>
        );
    }
}

export default Home;
