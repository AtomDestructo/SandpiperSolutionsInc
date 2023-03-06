import React, { Component } from 'react';

export class Disclaimer extends Component {
    render() {
        return(
            <>
            <br/>
            
            <div class="font-a31 text-center fs-1 w3-animate-left"> SandPiper Solutions Inc. Disclaimer</div>
            <hr/>
                <div class="row " >
                    <div class="col-3 text-right font-a11 w3-animate-right">
                        <div>  Disclaimer</div>
                    </div>
                    <div class="col-6 text-left fs-5 fade-in-image " >
                        <p>Please read this disclaimer ("disclaimer") carefully before using [website] website (“website”, 
                        "service") operated by [name] ("us", 'we", "our").</p>
                        <p>The content displayed on the website is the intellectual property of the [name]. You may not 
                        reuse, republish, or reprint such content without our written consent.</p>
                        <p>All information posted is merely for educational and informational purposes. It is not intended 
                        as a substitute for professional advice. Should you decide to act upon any information on this 
                        website, you do so at your own risk.</p>
                        <p>While the information on this website has been verified to the best of our abilities, we cannot 
                        guarantee that there are no mistakes or errors.</p>
                        <p>We reserve the right to change this policy at any given time, of which you will be promptly 
                        updated. If you want to make sure that you are up to date with the latest changes, we advise 
                        you to frequently visit this page.</p>
                    </div>
                    <div class="col-3 bg16 justify-content-center font-a32 w3-animate-top" >
                    </div>
                </div>
            </>
        )    
    }
}
