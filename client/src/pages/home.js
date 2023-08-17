import React from "react";
import { Header } from "../components/header";
import { Data } from "../components/data";
import { About } from "../components/about";
import { Services } from "../components/services";
import { News } from "../components/news";
import { Team } from "../components/team";
import { Contact } from "../components/contact";
import landingPageData from "../data/data.json";

export const Home = () => (
  <div>
    <Header data={landingPageData.Header} />
    <Data data={landingPageData.Features} />
    <About data={landingPageData.About} />
    <Services data={landingPageData.Services} />
    <News data={landingPageData.News} />
    <Team data={landingPageData.Team} />
    <Contact data={landingPageData.Contact} />
  </div>
);
