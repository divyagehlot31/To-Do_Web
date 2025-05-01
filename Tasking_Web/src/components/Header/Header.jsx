import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ onSwitch, isSignIn, onLogout }) => {
  const [Name , setName] = useState('');

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("UserName"));
    if (userName) {
      setName(userName.Name);
    }
  }, []);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-3">
      <h3 className="navbar-brand">Tasking</h3>
      {isSignIn && <h3 className="navbar-brand">Hello ,{Name}</h3>}
      
      <div className="d-flex align-items-center">
        {isSignIn ? (
          <>
            <button className="btn btn-outline-success mx-1" onClick={() => onSwitch("dashboard")}>Dashboard</button>
            <button className="btn btn-outline-secondary mx-1">Profile</button>
            <button className="btn btn-outline-danger mx-1" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => onSwitch('signup')} className="btn btn-outline-primary mx-1">SignUp</button>
            <button onClick={() => onSwitch('signin')} className="btn btn-outline-primary mx-1">SignIn</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
