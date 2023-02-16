import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { About } from "./pages/About";
import { Subsidiaries } from "./pages/Subsidiaries";
import { InvestorRelations } from "./pages/InvestorRelations";
import { Contact } from "./pages/Contact";
import "./App.css";

// Function 'app' serves as parent component where page are loaded
// Renders top level elements: navbar, footer
function App() {
    return (
        <>
            <div className="App">
                <nav className="navbar navbar-expand-md spsNavBar">
                    <a href="/" className="navbar-brand">
                        <img
                            className="logo"
                            src="/media/imgtest.png"
                            width={"75px"}
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbaritems"
                        aria-controls="navbaritems"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbaritems">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="">
                                    SandPiper Solutions
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/subsidiaries" className="nav-link">
                                    Subsidiaries
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/investors" className="nav-link">
                                    Investor Relations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Page components are mounted under the 'section' tab */}
                <section className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/subsidiaries"
                            element={<Subsidiaries />}
                        />
                        <Route
                            path="/investors"
                            element={<InvestorRelations />}
                        />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </section>
                <hr />
                <footer className="container sbsFooter sbsTopPadding sbsBottomPadding sbsMargin">
                    <div className="row justify-content-center">
                        <div className="col-md-4 align-self-center orderThird">
                            <img src="/media/imgtest.png" width={"200px"} />
                            <p>Instagram Twitter Facebook</p>
                        </div>
                        <div
                            className="col-sm-5 align-self-center orderFirst"
                            style={{ textAlign: "left" }}
                        >
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    SandPiper Solutions Inc.
                                </li>
                                <li className="mb-2">
                                    Suite 168, 315 -5155 – 130th Avenue S.E.
                                </li>
                                <li className="mb-2">
                                    Calgary, Alberta T2Z 0N3
                                </li>
                                <li className="mb-2">Phone:</li>
                                <li className="mb-2">
                                    Email: info@sandpiper.ca
                                </li>
                            </ul>
                        </div>
                        <div
                            className="col-sm-3 align-self-center orderSecond"
                            style={{ textAlign: "left" }}
                        >
                            <h4>Links</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="/subsidiaries"
                                        className="nav-link"
                                    >
                                        Subsidiaries
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/investors" className="nav-link">
                                        Investor Relations
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="row justify-content-center sbsBottomPadding">
                        <div
                            className="col-md-10"
                            style={{ fontSize: 14 + "px" }}
                        >
                            SandPiper Solutions Inc. acknowledges the
                            traditional territories of the Blackfoot and the
                            people of the Treaty 7 Region in Southern Alberta,
                            which includes the Piikani, Kainai and Siksika
                            Nations; the Stoney-Nakoda, including the Chiniki,
                            Bearspaw and Wesley First Nations; and the Tsuut’ina
                            Nation. The City of Chestermere is also home to the
                            Métis Nation of Alberta, Region 3
                        </div>
                    </div>
                    <div>
                        <p>
                            &copy; {"<"}insert copywrite here{">"}
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
