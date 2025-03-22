import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "USA",
    state: "USA",
    gender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-800">
      <div className="bg-green-800 p-8  w-full max-w-lg">
        <h1 className="text-white text-center text-2xl mb-6 font-bold">
          GET IN TOUCH WITH US
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="text-white block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Country and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white block mb-1">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
              </select>
            </div>
            <div>
              <label className="text-white block mb-1">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="USA">USA</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
              </select>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-white block mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender} className="flex items-center text-white">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-white block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-2 border border-gray-300 rounded h-24 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
