import React from "react";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Event from "../components/events/events";
import Team from "../components/team/team";
import Events1 from "../components/events/events1";
import Project from "../components/events/Project";

function home()
{
  return (
    <div className="App">
      <Hero />
      <About />
      <Event />
      <Events1/>
      <Project/>
      <Team />
    </div>
  );
}

export default home;
