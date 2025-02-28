import { useState } from "react";

export default function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", dob: "", grade: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.dob || !formData.grade) {
      alert("All fields are required!");
      return;
    }
    onAddStudent(formData);
    setFormData({ firstName: "", lastName: "", dob: "", grade: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h3 className="text-lg font-semibold">Add Student</h3>
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="border p-2 w-full" />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="border p-2 w-full mt-2" />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="border p-2 w-full mt-2" />
      <input type="number" name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} required className="border p-2 w-full mt-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Student</button>
    </form>
  );
}
