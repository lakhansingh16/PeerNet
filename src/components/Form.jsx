/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { set } from "react-hook-form";
const Form = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [program, setProgram] = useState("");
  const [subjects, setSubjects] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const inputChange = (inputType, value) => {
    switch (inputType) {
      case "name": {
        if (value.trim().length !== 0) {
          setName(value);
        }
        break;
      }
      case "id": {
        if (value.trim().length !== 0) {
          setId(value);
        }
        break;
      }

      case "program":
        if (value.trim().length !== 0) {
          setProgram(value);
        }
        break;
      case "subjects": {
        if (value.trim().length !== 0) {
          const newSubjects = value.split(",");
          setSubjects(newSubjects);
        }
        break;
      }
      case "email":
        {
          if(value.trim().length !== 0) {
            setEmail(value);
          }else{
            console.log("REGEX VALIDATION FAILED")
          }
        }
        break;

      case "phone": {
        if (value.trim().length !== 0) {
          setPhone(value);
        }
        break;
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const peerData =   {
      student_id: id,
      student_name: name,
      student_program: program,
      student_topics: subjects,
      email:email,
      phone:phone,
    }
    props.onFormSubmit(peerData);
    alert('You were added on peerConnect')
    setEmail('');
    setName('');
    setId('');
    setProgram('');
    setSubjects('');
    setPhone('');
  };
  return (
    <>
      <h1 className="md:text-[2rem] text-[1.5rem] font-semibold text-[#6528F7] text-center mt-20">
        Enlist on PeerNet
      </h1>
      <form
        className="flex flex-col align-middle justify-center w-full smd:w-[70%] mx-auto border border-[#6528F7] p-4  md:p-16 my-8 md:gap-4 gap-2 rounded-lg"
        onSubmit={handleSubmit}
        id="enlist"
      >
        <input
          className="border border-[#A076F9] h-[2.5rem] px-2 rounded-md text-[#6528F7]"
          type="text"
          name=" name"
          value={name}
          required
          placeholder="Full name"
          onChange={(e) => {
            inputChange("name", e.target.value);
          }}
        />

        <input
          className="border border-[#A076F9] h-[2.5rem] px-2 rounded-md text-[#6528F7]"
          type="text"
          value={id}
          required
          placeholder="College/university ID"
          onChange={(e) => {
            inputChange("id", e.target.value);
          }}
        />
        <input
          className="border border-[#A076F9] h-[2.5rem] px-2 rounded-md text-[#6528F7]"
          type="text"
          value={program}
          required
          placeholder="Academic Program"
          onChange={(e) => {
            inputChange("program", e.target.value);
          }}
        />
        <input
          className="border border-[#A076F9] h-[2.5rem] px-2 rounded-md text-[#6528F7]"
          type="text"
          value={subjects}
          required
          placeholder="Subjects(comma-separated)"
          onChange={(e) => {
            inputChange("subjects", e.target.value);
          }}
        />
        <input
          className="border border-[#A076F9] h-[2.5rem] px-2 rounded-md text-[#6528F7]"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            inputChange("email", e.target.value);
          }}
        />
        <input
          className="border border-[#A076F9] h-[2.5rem] px-2 rounded-md text-[#6528F7]"
          type="tel"
          value={phone}
          required
          placeholder="Phone Number"
          onChange={(e) => {
            inputChange("phone", e.target.value);
          }}
        />
        <button
          className="bg-[#6528F7] text-white py-2 px-4 font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
