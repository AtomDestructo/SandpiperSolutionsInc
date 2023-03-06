import React, { Component } from "react";
import "../Styles/main.css";

// Component exports the Contact page structure to be rendered in the 'App' function
export class Contact extends Component {
    render() {
        return (
            <>
                <br />
                <div class="text-center font-a31 fs-1 fade-in-image"> Contact Us</div>
                <br />
                <div class="col-12 bg15">
                <div class="row " >
                <div class="col-6">
                    <div class="text-right font-a11 w3-animate-left">Operating Location (Calgary, AB)</div>
                </div>
                    <div class="col-6 text-left">
                        <ul className="list-unstyled">
                        <li className="mb-2 ">
                            <div className="font-a21 w3-animate-right">SandPiper Solutions Inc.</div>
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Suite 168, 315 -5155 – 130th Avenue S. E.
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Calgary, Alberta T2Z 0N3
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">Phone:</li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Email: info@sandpiper.ca
                        </li>
                        </ul>
                    </div>
                </div>
                <hr class="hr-b"></hr>
                <div class="row" >
                <div class="col-6">
                    <div class="text-right font-a11 w3-animate-left">Career Opportunities</div>
                </div>
                    <div class="col-6 text-left ">
                        <ul className="list-unstyled ">
                        <li className="mb-2 ">
                            <div className="font-a21 w3-animate-right">SandPiper Solutions Inc.</div>
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Suite 168, 315 -5155 – 130th Avenue S. E.
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Calgary, Alberta T2Z 0N3
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">Phone:</li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Email: info@sandpiper.ca
                        </li>
                        </ul>
                    </div>
                </div>
                <hr class="hr-b"></hr>
                <div class="row" >
                <div class="col-6">
                    <div class="text-right font-a11 w3-animate-left">Investor Relations and Corporate Communication</div>
                </div>
                    <div class="col-6 text-left">
                        <ul className="list-unstyled">
                        <li className="mb-2 ">
                            <div className="font-a21 w3-animate-right">SandPiper Solutions Inc.</div>
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Suite 168, 315 -5155 – 130th Avenue S. E.
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Calgary, Alberta T2Z 0N3
                        </li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">Phone:</li>
                        <li className="mb-2 font-a33 text-left fs-5 w3-animate-right">
                            Email: info@sandpiper.ca
                        </li>
                        </ul>
                    </div>
                
                </div>
                </div>
                    <div class="row " >
                        <br />
                        <hr/>
                        <div class="font-a22 text-right fs-4 bg7">*SandPiper Solutions Inc. maintains this internet website as an informal information service only. </div>
                    </div>
            </>
        );
    }
}

export default Contact;
