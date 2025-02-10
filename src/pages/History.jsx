import React, { useEffect, useState } from "react";

const History = () => {
  const [patientHistory, setPatientHistory] = useState([]);

  // Load history from local storage on page load
  useEffect(() => {
    const historyData = JSON.parse(localStorage.getItem("patientHistory")) || [];
    setPatientHistory(historyData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
        Your Prediction History
      </h2>

      {patientHistory.length === 0 ? (
        <p className="text-center text-gray-600">No history available.</p>
      ) : (
        <table className="w-full border-collapse border border-teal-600">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="p-2 border border-teal-500">Date</th>
              <th className="p-2 border border-teal-500">Age</th>
              <th className="p-2 border border-teal-500">Diagnosis</th>
              <th className="p-2 border border-teal-500">Readmission</th>
            </tr>
          </thead>
          <tbody>
            {patientHistory.map((patient) => (
              <tr key={patient.id} className="text-center border border-teal-500">
                <td className="p-2 border border-teal-500">{patient.date}</td>
                <td className="p-2 border border-teal-500">{patient.age}</td>
                <td className="p-2 border border-teal-500">{patient.diagnosis}</td>
                <td className="p-2 border border-teal-500">{patient.readmission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
