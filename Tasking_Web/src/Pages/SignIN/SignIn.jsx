// Pages/SignIN/SignIn.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../../components/SignInForm/Form";


const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("userData")) || [];

    const sameUser = user.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (sameUser) {
      localStorage.setItem("currentUser", JSON.stringify(sameUser));

      alert("Login successful!");
      onSignIn(sameUser);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignIn;
