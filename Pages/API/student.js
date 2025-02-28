export default function handler(req, res) {
  const students = [
    { id: 1, firstName: "John", lastName: "Doe", dob: "2006-05-12", grade: "10" },
    { id: 2, firstName: "Jane", lastName: "Smith", dob: "2007-08-21", grade: "9" },
    { id: 3, firstName: "Michael", lastName: "Brown", dob: "2005-11-03", grade: "11" },
    { id: 4, firstName: "Emily", lastName: "Johnson", dob: "2008-02-14", grade: "8" },
    { id: 5, firstName: "Chris", lastName: "Evans", dob: "2006-06-30", grade: "10" }
  ];
  res.status(200).json(students);
}
