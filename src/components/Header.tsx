'use client';
import React, { useState, useEffect } from 'react';
import '@styles/styles.css';
import {countries} from '@interfaces/countries'

const HeaderWithModal: React.FC = () => {
  // States for modal visibility and selected country
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('United States');
  const [currency, setCurrency] = useState<string>(countries['United States']);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Load country and currency from localStorage on mount
  useEffect(() => {
    const savedCountry = localStorage.getItem('selectedCountry');
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry);
      setCurrency(countries[savedCountry]);
    }
  }, []);

  // Update currency when country changes
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setCurrency(countries[country] || '');
    localStorage.setItem('selectedCountry', country); // Save to localStorage
  };

  // Save settings and close modal
  const saveSettings = () => {
    toggleModal();
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-4 shadow-md m-[15px]">
        {/* Modal Trigger and Navigation Links */}
        <div className="hidden text-sm font-medium sm:flex space-x-6 ml-auto">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 flex items-center"
            onClick={toggleModal}
          >
            <i className="fa-solid fa-globe mr-2"></i> {selectedCountry}
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Trip Boards</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">List your property</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Help</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">My trips</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Sign in</a>
        </div>

        {/* User Icon for Mobile */}
        <p className="sm:hidden text-gray-700 text-2xl ml-auto">
          <i className="fas fa-user-circle"></i>
        </p>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          id="countryModal"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity"
        >
          <div id="modalContent" className="bg-white rounded-lg shadow-lg p-6 w-96">
            <span
              className="absolute top-2 right-2 text-xl cursor-pointer"
              onClick={toggleModal}
            >
              &times;
            </span>
            <h2 className="text-black text-xl font-semibold mb-4">Display settings</h2>
            <span className="text-sm text-red-500 mb-4 block">
              <strong>⚠️ Changing your region could change your rewards program</strong>
            </span>
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium mb-1 text-black">
                <strong>Region</strong>
              </label>
              <select
                id="country"
                value={selectedCountry}
                style={{ color: 'black' }}
                className="w-full p-2 border border-gray-300 rounded-lg"
                onChange={(e) => handleCountryChange(e.target.value)}
              >
                {Object.keys(countries).map((country) => (
                  <option key={country} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="currency" className="block text-sm font-medium mb-1 text-black">
                <strong style={{ color: 'gray' }}>Currency</strong>
              </label>
              <input
                type="text"
                id="currency"
                value={currency}
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
                style={{ color: 'gray' }}
                disabled
              />
            </div>
            <button
              onClick={saveSettings}
              id="countrysave"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderWithModal;
