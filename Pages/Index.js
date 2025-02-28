import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <StudentForm onAddStudent={addStudent} />
        <StudentList students={students} />
      </div>
      <Footer />
    </div>
  );
}
