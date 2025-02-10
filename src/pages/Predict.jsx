import React from "react";

const PredictorForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-teal-600  mb-4">
          Hospital Readmission Predictor
        </h2>
        <form className="grid grid-cols-2 gap-4">
          {[
            "Age",
            "Time in Hospital",
            "Number of Lab Procedures",
            "Number of Procedures",
            "Number of Medications",
            "Number of Outpatient Visits",
            "Number of Inpatient Visits",
            "Number of Emergency Visits",
            "Medical Specialty",
            "Diagnosis 1",
            "Diagnosis 2",
            "Diagnosis 3",
            "Glucose Test",
            "AIC Test",
            "Change in Medication",
            "Diabetes Medication",
          ].map((label) => (
            <div key={label}>
              <label className="block text-gray-700 font-medium">{label}:</label>
              <select className="w-full p-2 border rounded-lg focus:ring focus:ring-green-300">
                <option>0</option>
                <option>Normal</option>
                <option>Yes</option>
                <option>No</option>
                <option>Missing</option>
                <option>Circulatory</option>
              </select>
            </div>
          ))}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-teal-600  text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700"
            >
              Predict
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PredictorForm;
