"use client"
import { useState } from "react";
import FlapDiv from "./components/FlapDiv";
import COCOMOFactors from "./components/COCOMOFactors";

export default function Home() {
  const [Effort, setEffort] = useState(null);
  const [Duration, setDuration] = useState(null);
  const [Person, setPerson] = useState(null);
  const [Productivity, setProductivity] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const [constants, setconstants] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const kloc = parseFloat(event.target.kloc.value) || 0;
    const projectType = parseInt(event.target.project_type.value, 10);

    const cocomoConstants = {
      1: { name: "Organic", a: 3.2, b: 1.05, c: 2.5, d: 0.38 },
      2: { name: "Semi-Detached", a: 3.0, b: 1.12, c: 2.5, d: 0.38 },
      3: { name: "Embedded", a: 3.6, b: 1.20, c: 2.5, d: 0.32 },
    };

    if (!cocomoConstants[projectType] || kloc <= 0) {
      alert("Please enter valid KLOC and select a project type.");
      return;
    }

    // List of field names corresponding to the COCOMO factors.
    const factorNames = [
      "reliability",
      "database_size",
      "complexity",
      "runtime_constraints",
      "memory_constraints",
      "vm_volatility",
      "turnaround_time",
      "analyst_capability",
      "applications_experience",
      "software_engineer_capability",
      "vm_experience",
      "programming_experience",
      "software_methods",
      "software_tools"
    ];

    // Multiply only the factor fields to calculate EAF.
    const eaf = factorNames.reduce((acc, name) => {
      const field = event.target[name];
      const value = field ? parseFloat(field.value) : 1.0;
      return acc * (value || 1.0);
    }, 1.0);

    const { a, b, c, d, name } = cocomoConstants[projectType];
    setconstants(`(a: ${a}, b: ${b}, c: ${c}, d: ${d})`)
    const estimatedEffort = a * Math.pow(kloc, b) * eaf;
    const estimatedDuration = c * Math.pow(estimatedEffort, d);
    const estimatedPerson = estimatedEffort / estimatedDuration;
    const estimatedProductivity = estimatedEffort / estimatedPerson;

    setEffort(estimatedEffort.toFixed(2));
    setDuration(estimatedDuration.toFixed(2));
    setPerson(estimatedPerson.toFixed(2));
    setProductivity(estimatedProductivity.toFixed(2));
    setProjectDetails(name);
  };

  return (
    <div>
      <div className="w-[90%] mx-auto bg-blue-100 h-52 mt-10 rounded-lg flex items-center justify-center relative overflow-hidden">
  <div className="text-center z-10">
    <h1 className="text-4xl font-bold text-blue-900">COCOMO Estimator</h1>
    <p className="mt-2 text-lg text-blue-700">
      Effort Estimation Made Simple: Accurately assess your software project requirements.
    </p>
  </div>
  <div className="absolute inset-0 opacity-20">
    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="#ffffff" />
    </svg>
  </div>
</div>


      <form onSubmit={handleSubmit}>
        <div className="w-[90%] mx-auto bg-zinc-100 h-fit flex items-center flex-col mt-20 mb-10 rounded-lg p-5">
          <h1 className="text-xl font-bold text-zinc-800">
            Project Complexity Assessment
          </h1>
          <p className="font-medium mt-2 text-zinc-600">
            Answer the following questions to determine the Effort Adjustment Factor (EAF)
            based on key project attributes.
          </p>
          <FlapDiv>
             <COCOMOFactors />
          </FlapDiv>
         
        </div>
        <div className="w-[90%] mx-auto bg-zinc-100 h-fit flex items-center flex-col mt-20 mb-10 rounded-lg p-5">
          <h1 className="text-xl font-bold text-zinc-800">
            Project Details
          </h1>
          <p className="font-medium mt-2 text-zinc-600">
            Enter additional project information.
          </p>
          <div className="mt-2 flex items-center justify-center">
            <label htmlFor="kloc" className="font-semibold">
              Enter The Kilo Lines of Code (KLOC)
            </label>
            <input
              className="ml-2 bg-zinc-300 rounded-sm font-semibold p-0.5 focus:outline-0"
              type="float"
              id="kloc"
              name="kloc"
            />
          </div>
          <div className="mt-2 flex items-center justify-center">
            <label htmlFor="project_type" className="font-semibold">
              Select Type of Project
            </label>
            <select
              className="ml-2 bg-zinc-300 p-0.5 rounded-sm focus:outline-0"
              id="project_type"
              name="project_type"
            >
              <option value="">Choose</option>
              <option value={1}>Organic</option>
              <option value={2}>Semi-Detached</option>
              <option value={3}>Embedded</option>
            </select>
          </div>
          <button className="px-10 active:bg-blue-600 py-1 mt-5 rounded-md bg-blue-500 font-semibold text-white text-lg text-center">
            Estimate
          </button>
        </div>
      </form>

      {Effort && Duration && (
        <div className="w-[90%] mx-auto bg-zinc-100 h-fit flex items-center flex-col mt-10 mb-20 rounded-lg p-5">
          <h1 className="text-xl font-bold text-zinc-800">Estimation Results</h1>
          <p className="font-medium text-zinc-600">
            Project Type: <strong>{projectDetails} {constants}</strong>
          </p>
          <p className="font-medium text-zinc-600">
            Effort (Person-Months): <strong>{Effort}</strong>
          </p>
          <p className="font-medium text-zinc-600">
            Time Taken (Months): <strong>{Duration}</strong>
          </p>
          <p className="font-medium text-zinc-600">
            Number of Developers: <strong>{Person}</strong>
          </p>
          <p className="font-medium text-zinc-600">
            Productivity (KLOC/Person-Month): <strong>{Productivity}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
