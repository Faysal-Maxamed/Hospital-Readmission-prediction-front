import React from "react";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import bgImage from "../assets/back1.jpeg";

const Home = () => {
  return (
    <div className="font-sans">
    
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[500px] flex items-center" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-teal-900 opacity-50"></div>
        <div className="relative z-10 text-white px-8 max-w-2xl">
          <h1 className="text-4xl font-bold">Complete Healthcare Solution</h1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-6 bg-white text-teal-600 px-6 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200">Learn More</button>
        </div>
      </div>

      {/* Footer (About Page Style) */}
      <footer className="bg-teal-600 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="font-semibold text-lg">About Us</h3>
              <p className="mt-2 text-sm">
                We are committed to providing the best healthcare services, with a focus on improving patient outcomes and enhancing medical prediction technologies.
              </p>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="font-semibold text-lg">Services</h3>
              <ul className="mt-2 text-sm">
                <li>Predicting Hospital Readmission</li>
                <li>Patient Management</li>
                <li>Healthcare Consulting</li>
                <li>Data Analysis</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <p className="mt-2 text-sm">+252 614388</p>
              <p className="text-sm">hellomedic@gmail.com</p>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex gap-4 mt-2">
                <FaFacebook className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          <p>&copy; 2025 Hospital Readmission Prediction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
