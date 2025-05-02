import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      alert("Login successful!");
      onSignIn(matchedUser);
    } else {
      alert("Invalid email or password!");
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
