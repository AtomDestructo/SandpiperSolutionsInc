import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home.js";
import { About } from "./About";
import { Subsidiaries } from "./Subsidiaries";
import { InvestorRelations } from "./InvestorRelations";
import { Contact } from "./Contact";
import { Disclaimer } from "./Disclaimer.js";
import { Legal } from "./Legal.js";
import { Privacy } from "./Privacy.js";
import { TermsOfUse } from "./TermsOfUse.js";
import { MissionAndVision } from "./MissionAndVision.js";
import { CoreValues } from "./CoreValues.js";
import { OurTeam } from "./OurTeam.js";
import PageNotFound from './PageNotFound.js';

// Component exports the Home page structure to be rendered in the 'App' function
export class Pages extends Component {
    render() {
        return (
            <>
                <section className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/subsidiaries" element={<Subsidiaries />}/>
                        <Route path="/investors" element={<InvestorRelations />}/>
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/disclaimer" element={<Disclaimer />} />
                        <Route path="/Legal" element={<Legal />} />
                        <Route path="/Privacy" element={<Privacy />} />
                        <Route path="/Termsofuse" element={<TermsOfUse />} />
                        <Route path="/MissionAndVision" element={<MissionAndVision />} />
                        <Route path="/CoreValues" element={<CoreValues />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="/OurTeam" element={<OurTeam />} />
                    </Routes>
                </section>
            </>
        );
    }
}


