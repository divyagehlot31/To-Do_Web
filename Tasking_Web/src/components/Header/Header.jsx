import React from "react";
// import Signup from "../../UI/Signup";
// import Signin from "../../UI/SignIn";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ onSwitch }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-3">
      <h3 className="navbar-brand">Tasking</h3>
      <div className="d-flex align-items-center">
      <button onClick={() => onSwitch('signup')} className="btn btn-outline-primary mx-1">SignUp</button>

        <button onClick={() => onSwitch('signin')} className="btn btn-outline-primary mx-1">SignIn</button>
      </div>
    </header>
  );
};

export default Header;
