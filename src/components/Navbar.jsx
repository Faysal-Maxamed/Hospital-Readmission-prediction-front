import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  const MenuItems = () => (
    <>
      <li><Link to="/" className="text-teal-600 font-semibold hover:text-teal-800">Home</Link></li>
      <li><Link to="/about" className="hover:text-teal-600">About</Link></li>
      <li><Link to="/predict" className="hover:text-teal-600">Predict</Link></li>
      <li><Link to="/history" className="hover:text-teal-600">History</Link></li>
      <li><Link to="/contact" className="hover:text-teal-600">Contact</Link></li>
      {isAuthenticated ? (
        <li className="cursor-pointer text-red-600 font-bold hover:text-red-800" onClick={handleLogout}>Logout</li>
      ) : (
        <li><Link to="/login" className="hover:text-teal-600">Login</Link></li>
      )}
    </>
  );

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-teal-600 text-white text-sm py-2 flex justify-between px-6 md:px-12">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><FaPhone /> +252 61438877</span>
          <span className="flex items-center gap-1"><FaEnvelope /> hellomedic@gmail.com</span>
        </div>
        <div className="flex gap-3">
          <FaFacebook className="cursor-pointer hover:text-gray-300" />
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaLinkedin className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center px-6 md:px-12 py-4">
          <div className="text-teal-600 text-xl font-bold">HOSPITAL READMISSION PREDICTION</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700">
            <MenuItems />
          </ul>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="text-2xl text-teal-600" /> : <FaBars className="text-2xl text-teal-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col bg-white shadow-lg py-4 px-6 text-gray-700">
            <MenuItems />
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
