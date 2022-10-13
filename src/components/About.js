import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="section--about">
        <h3>
          <Link to="/" className="links">
            Home
          </Link>{" "}
          / About
        </h3>
      </section>
      <section className="section--story">
        <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg" />
        <div className="story--container">
          <div className="title--flex">
            <h2 className="story--h2">Our Story</h2>
            <div className="underline"></div>
          </div>
          <p className="texto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
