import { Link } from "react-router-dom";

export default function ContactUs(){
        return (
            <>
            <div> 
{/* footer*/}
    <hr class="hr-a"></hr>
    <footer className="container sbsFooter sbsTopPadding sbsBottomPadding sbsMargin">
    <div className="row justify-content-center">
        <div className="col-md-4 align-self-center orderThird">
        </div>
        <div className="col-md-4 align-self-center orderThird">
            <div class="font-a31 fs-3 ">Contact Us</div>
        </div>
        <div className="col-md-4 align-self-center orderThird">
        </div>
    </div>

    <div className="row justify-content-center">
        <div className="col-md-4 align-self-center orderThird">
            <img src="/media/logoMain.svg" width={"200px"} />
        </div>
        <div className="col-sm-5 align-self-center orderFirst">
            <ul className="list-unstyled">
                <li className="mb-2">
                    <div class="font-a21">SandPiper Solutions Inc.</div>
                </li>
                <li className="mb-2 font-a33">
                    Suite 168, 315 -5155 – 130th Avenue S. E.
                </li>
                <li className="mb-2 font-a33">
                    Calgary, Alberta T2Z 0N3
                </li>
                <li className="mb-2 font-a33">Phone:</li>
                <li className="mb-2 font-a33">
                    Email: info@sandpiper.ca
                </li>
            </ul>
        </div>
        <div className="col-sm-3 align-self-center orderSecond">
                <h4 class="font-a21">Links</h4>
                <ul className="list-unstyled">
                    <li className="mb-2 font-a33">
                        <Link to="/Disclaimer" className="nav-link ">
                            Disclaimer
                        </Link>
                    </li>
                    <li className="mb-2 font-a33">
                        <Link to="/Legal" className="nav-link">
                            Legal
                        </Link>
                    </li>
                    <li className="mb-2 font-a33">
                        <Link
                            to="/Privacy"
                            className="nav-link">
                            Privacy
                        </Link>
                    </li>
                    <li className="mb-2 font-a33">
                        <Link
                            to="/TermsOfUse"
                            className="nav-link">
                            Terms of Use
                        </Link>
                    </li>
                </ul>
            </div>
        </div>    
        <div>
        </div>
    </footer> 
    </div>
    </>
        );
    }
