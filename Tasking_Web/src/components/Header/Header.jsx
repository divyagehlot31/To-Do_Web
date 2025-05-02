import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ currentPage, setCurrentPage, isSignedIn, handleLogout, currentUser }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-3">
      <h3 className="navbar-brand">Tasking</h3>
      {isSignedIn && <h3 className="navbar-brand">Hello, {currentUser?.name}</h3>}
      
      <div className="d-flex align-items-center">
        {isSignedIn ? (
          <>
            <button className="btn btn-outline-success mx-1" onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
            <button className="btn btn-outline-secondary mx-1" onClick={() => setCurrentPage("profile")}>Profile</button>
            <button className="btn btn-outline-danger mx-1" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setCurrentPage('signup')} className="btn btn-outline-primary mx-1">SignUp</button>
            <button onClick={() => setCurrentPage('signin')} className="btn btn-outline-primary mx-1">SignIn</button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
