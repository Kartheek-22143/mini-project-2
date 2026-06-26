import React, { useState } from "react";
import axios from "axios";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/students",
      {
        name,
        email,
        course
      }
    );

    alert("Student Added");

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        placeholder="Course"
        value={course}
        onChange={(e) =>
          setCourse(e.target.value)
        }
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
