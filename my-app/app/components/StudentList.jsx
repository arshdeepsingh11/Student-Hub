"use client";

import { useState, useEffect } from "react";
import StudentForm from "./StudentForm";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the students from the JSON file
    fetch("students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error loading students:", error));
  }, []);

  const handleAddStudent = (newStudent) => {
    // Add the new student to the list and update state
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <section id="students" className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-black">Student List</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {students.length > 0 ? (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left font-semibold text-black">First Name</th>
                <th className="px-4 py-2 text-left font-semibold text-black">Last Name</th>
                <th className="px-4 py-2 text-left font-semibold text-black">Grade</th>
                <th className="px-4 py-2 text-left font-semibold text-black">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-black">{student.firstName}</td>
                  <td className="px-4 py-2 text-black">{student.lastName}</td>
                  <td className="px-4 py-2 text-black">{student.grade}</td>
                  <td className="px-4 py-2 text-black">{student.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students available.</p>
        )}
      </div>
      <StudentForm onAddStudent={handleAddStudent} />
    </section>
  );
};

export default StudentList;
