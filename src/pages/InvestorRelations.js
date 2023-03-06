import React, { Component } from "react";

// Component exports the Investor Relations page structure to be rendered in the 'App' function
export class InvestorRelations extends Component {
    render() {
        return (
            <>
<div>
    <br />
    <div class="text-center font-a31 fs-1 fade-in-image">Investor Relations:</div>
    <br />
    <br/>
    <div class="row bg15" >
        <div class="col-3 text-right font-a11 w3-animate-right">
            <div> Why invest with SandPiper?</div>
        </div>
        <div class="col-6 text-left fs-5 w3-animate-left" >
                <p>We have a great track record for adding value to any dollar.  We strive on great long-term shareholder value and relationships.
                    We are a highly diversified company with high goals and expectations, creating top value for you as our shareholder.
                    We are committed to meet high demands, while keeping our people, environment safe while maximizing profits.           
                </p>
                <p>
                We have a great track record for adding value to any dollar.  We strive on great long-term shareholder value and relationships.
                We are a highly diversified company with high goals and expectations, creating top value for you as our shareholder.
                We are committed to meet high demands, while keeping our people, environment safe while maximizing profits.</p>
                <p>
                Our leadership team is highly regarded, innovative and proud to be part of the SandPiper team.  
                Our leaders are fearless and they too will roll up their sleeves and dive in where needed and believe in investing themselves into the company.</p>
            </div>
        <div class="col-3 bg10 justify-content-center font-a32 fade-in-image"></div>
        </div>
    </div>
            </>
        );
    }
}

export default InvestorRelations;
