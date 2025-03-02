"use client";

import { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    // Last name validation
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    // Date of birth validation (between 1900 and 2021)
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    else {
      const dobYear = new Date(formData.dob).getFullYear();
      if (dobYear < 1900 || dobYear > 2021) {
        newErrors.dob = "Date of Birth must be between 1900 and 2021.";
      }
    }
    // Grade validation
    if (!formData.grade) newErrors.grade = "Grade is required.";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, submit the form data
    if (Object.keys(formErrors).length === 0) {
      onAddStudent(formData);
      setFormData({ firstName: "", lastName: "", dob: "", grade: "" });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-xl border border-gray-300">
      <h2 className="text-2xl text-center font-semibold mb-6 text-black">Add a New Student</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-black">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${errors.firstName ? "border-red-500" : "border-gray-300"} shadow-sm text-black`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-black">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${errors.lastName ? "border-red-500" : "border-gray-300"} shadow-sm text-black`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-black">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${errors.dob ? "border-red-500" : "border-gray-300"} shadow-sm text-black`}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Grade Dropdown */}
        <div className="mb-6">
          <label htmlFor="grade" className="block text-sm font-medium text-black">Grade</label>
          <select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className={`w-full p-3 rounded-md border ${errors.grade ? "border-red-500" : "border-gray-300"} shadow-sm text-black`}
          >
            <option value="">Select a Grade</option>
            {[...Array(12)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
          {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
