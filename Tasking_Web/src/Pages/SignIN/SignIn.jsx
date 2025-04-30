import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = ({onSignIn}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = ()=>{

  const user =  JSON.parse(localStorage.getItem("userData"))  || [];

  const sameUser = user.find(
    (user) => user.email === formData.email && user.password === formData.password
  );

  if(sameUser) {
    alert("Login successful!");
  } else {  
    alert("Invalid email or password!");
  }
  onSignIn();
}

  return (
    <div className="container mt-4">
      <h2>SIGNIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" required onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
