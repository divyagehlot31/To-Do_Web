// Pages/SignIN/SignIn.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "../../components/SignInForm/Form";

const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   const value = e.target.type === "email" ? e.target.value.trim() : e.target.value;
  //   setFormData({ ...formData, [e.target.name]: value });
  // };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // console.log("All users:", users); 
    // console.log("formdata", formData);
    
    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    // console.log("Match user:", matchedUser); 

    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      alert("Login successful!");
      onSignIn(matchedUser);
    } else {
      alert("Invalid user data!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
