import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SignUp from "./Pages/SignUP/SignUp";
import SignIn from "./Pages/SignIN/SignIn";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState('signup');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
      setIsSignedIn(true);
      setCurrentPage('dashboard');
    }
  }, []);

  const handleSignIn = (user) => {
    setCurrentUser(user);
    setIsSignedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsSignedIn(false);
    setCurrentPage('signin');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return <SignUp />;
      case 'signin':
        return <SignIn onSignIn={handleSignIn} />;
      case 'dashboard':
        return isSignedIn ? <DashBoard currentUser={currentUser} /> : <SignIn onSignIn={handleSignIn} />;
      case 'profile':
        return isSignedIn ? <Profile currentUser={currentUser} /> : <SignIn onSignIn={handleSignIn} />;
      default:
        return <SignUp />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isSignedIn={isSignedIn} 
        handleLogout={handleLogout}
        currentUser={currentUser}
      />
      <main className="container flex-grow-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}


export default App;
