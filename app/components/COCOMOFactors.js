import FactorQuestion from "./FactorQuestion";

const COCOMOFactors = () => {
    const factors = [
        { label: "Required Software Reliability – How critical is the reliability of the software system?", name: "reliability", values: [0.75, 0.88, 1.00, 1.15, 1.40] },
        { label: "Size of Application Database – How large and complex is the database used?", name: "database_size", values: [0.94, 1.00, 1.08, 1.16] },
        { label: "Product Complexity – How complex are the functions and interactions within the software?", name: "complexity", values: [0.70, 0.85, 1.00, 1.15, 1.30, 1.65] },
        { label: "Run-time Performance Constraints – What are the performance requirements under heavy loads?", name: "runtime_constraints", values: [1.00, 1.11, 1.30, 1.66] },
        { label: "Memory Constraints – How much memory optimization is required for the system?", name: "memory_constraints", values: [1.00, 1.06, 1.21, 1.56] },
        { label: "Volatility of Virtual Machine Environment – How often does the system need to adapt to different execution environments?", name: "vm_volatility", values: [0.87, 1.00, 1.15, 1.30] },
        { label: "Required Turnaround Time – How quickly must the system respond to changes or updates?", name: "turnaround_time", values: [0.87, 1.00, 1.07, 1.15] },
        { label: "Analyst Capability – What is the experience and skill level of system analysts?", name: "analyst_capability", values: [1.46, 1.19, 1.00, 0.86, 0.71] },
        { label: "Applications Experience – How familiar are developers with similar applications?", name: "applications_experience", values: [1.29, 1.13, 1.00, 0.91, 0.82] },
        { label: "Software Engineer Capability – How skilled and experienced are the engineers working on the project?", name: "software_engineer_capability", values: [1.42, 1.17, 1.00, 0.86, 0.70] },
        { label: "Virtual Machine Experience – What is the team's experience with virtual environments and platforms?", name: "vm_experience", values: [1.21, 1.10, 1.00, 0.90] },
        { label: "Programming Language Experience – How proficient is the team with the required programming languages?", name: "programming_experience", values: [1.14, 1.07, 1.00, 0.95] },
        { label: "Application of Software Engineering Methods – How well are software engineering best practices followed?", name: "software_methods", values: [1.24, 1.10, 1.00, 0.91, 0.82] },
        { label: "Use of Software Tools – To what extent are development tools and automation utilized?", name: "software_tools", values: [1.24, 1.10, 1.00, 0.91, 0.83] }
    ];
    
  
    return (
      <div>
        {factors.map((factor, index) => (
          <FactorQuestion key={index} {...factor} />
        ))}
      </div>
    );
  };
  
  export default COCOMOFactors;