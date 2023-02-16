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
                <nav className="navbar navbar-expand-md">
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
                                    Sandpiper Solutions
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
                <section>
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
                <footer></footer>
            </div>
        </>
    );
}

export default App;
