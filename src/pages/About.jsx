import React from "react";
import { experiences, skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow pl-2">
          Dilshad
        </span>{" "}
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Self taught MERN stack developer based in Malappuram, Kerala, curious
          to learn more about developing scalable distributed systems, loves
          problem solving and cares about writing readable as well as
          maintainable code
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-11">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>
        </div>
        <div>
          {experiences.map((exp) => (
            <div
              className="block-container flex items-center w-20  h-20"
              key={exp.title}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={exp.icon}
                  alt={exp.title}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                className="ml-[120px] whitespace-nowrap p-3 shadow-lg blue-gradient_text font-medium
            "
              >
                {exp.title}
              </div>
            </div>
          ))}
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default About;
