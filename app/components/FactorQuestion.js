import React from 'react'

const FactorQuestion = ({ label, name, values }) => {
  return (
    <div className="mb-4">
    <label className="font-semibold mt-2 block">{label}</label>
    <div className="w-full flex items-center justify-between">

      {["Very Low", "Low", "Nominal", "High", "Very High", "Extra High"].map((level, index) => (
       
       <div key={index} className="flex flex-col items-center">
          <label htmlFor={`${name}-${index}`} className="text-sm">{level}</label>
          <input
            className="mt-1" type="radio"
            id={`${name}-${index}`}
            name={name}
            defaultChecked={index === 2}
            value={values[index] ?? ""}
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default FactorQuestion
