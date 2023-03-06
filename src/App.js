import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { About } from "./pages/About";
import { Subsidiaries } from "./pages/Subsidiaries";
import { InvestorRelations } from "./pages/InvestorRelations";
import { Contact } from "./pages/Contact";
import { Disclaimer } from "./pages/Disclaimer.js";
import { Legal } from "./pages/Legal.js";
import { Privacy } from "./pages/Privacy.js";
import { TermsOfUse } from "./pages/TermsOfUse.js";
import { MissionAndVision } from "./pages/MissionAndVision.js";
import { CoreValues } from "./pages/CoreValues.js";
import { OurTeam } from "./pages/OurTeam.js";
import { Pages } from "./pages/Route.js";
import PageNotFound from './pages/PageNotFound.js';
import ContactUs  from "./pages/Components/Sections/ContactUs.js";
import Copyright  from "./pages/Components/Sections/Copyright.js";
import Links  from "./pages/Components/Sections/Links.js";
import LandAck from './pages/Components/Sections/LandAcknowledge.js';
import Navbar from './pages/Components/Sections/Navbar.js';
import "./JS/jquery-3.6.3.js";
import "./Styles/bootstrap.css";
import "./Styles/main.css";
import "./Styles/w3.css";



function App() {
    return (
        <>
            <div className="App">
                <Navbar/>
                <Pages/>
                <ContactUs/>
                <hr/>
                <br />
                <Links/>
                <br/>
                <hr/>
                <LandAck/>
                <hr/>
                <br/>
                <Copyright/>
            </div>
        </>
        );
    }
        export default App;
