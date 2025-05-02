import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from '../../components/SignUpForm/Form';

const SignUp = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];              
    const existingUser = users.find((user) => user.email === formData.email);
    
    if (existingUser) {
      alert("User already with this email!");
      return;
    }
    
    // Create id
    const newUser = {
      ...formData,
      id: Date.now().toString()
    };
    
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setFormData({
      id: "",
      name: "",
      email: "",
      mobile: "",
      password: "",
      dob: "",
      gender: "",
    });

    alert("Signup successful!");
  };

  return (
    <div className="container mt-4">
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="number"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;