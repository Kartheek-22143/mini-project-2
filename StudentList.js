import React, {
  useState,
  useEffect
} from "react";

import axios from "axios";

function StudentList() {

  const [students, setStudents] =
    useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(
      "http://localhost:5000/students"
    );

    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(
      `http://localhost:5000/students/${id}`
    );

    fetchStudents();
  };

  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <div key={student._id}>
          <h4>{student.name}</h4>
          <p>{student.email}</p>
          <p>{student.course}</p>

          <button
            onClick={() =>
              deleteStudent(student._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;