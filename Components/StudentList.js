import { useState, useEffect } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/students") // Fetching from API route
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="border-b p-2">
            {student.firstName} {student.lastName} - Grade {student.grade} (DOB: {student.dob})
          </li>
        ))}
      </ul>
    </div>
  );
}
