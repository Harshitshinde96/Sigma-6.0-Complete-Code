import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        id="fullname"
        name="fullName"
        placeholder="Enter Your name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <label htmlFor="username">User Name</label>
      <input
        id="username"
        name="userName"
        placeholder="Enter Your username"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
      />

      <br />
      <br />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        placeholder="Enter Your password"
        type="text"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button>Submit </button>
    </form>
  );
}
