import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SignUp from "./Pages/SignUP/SignUp";
import SignIn from "./Pages/SignIN/SignIn";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [show, setShow] = useState();
  const [signinuser, setsigninUser] = useState(null);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(()=>{
    const currentPage = localStorage.getItem("currentPage");
    const signinuser = JSON.parse(localStorage.getItem("curentUser"));

    if(signinuser){
      setsigninUser(signinuser);
      setShow(currentPage || "dashboard");
      setIsSignIn(true);
    }

  },[])

  // useEffect(() => {
  //   localStorage.setItem("currentUser", JSON.stringify(isSignIn));
  //   localStorage.setItem("currentPage", show);

  // }, [isSignIn, show] );
  
useEffect(() => {
  if (signinuser) {
    localStorage.setItem("currentUser", JSON.stringify(signinuser));
  }
  localStorage.setItem("currentPage", show);
}, [signinuser, show]); 

  const switchPage = () => {
    switch (show) {
      case "signup":
        return <SignUp/>;
      case "signin":
        return <SignIn onSignIn={() => {
          setShow("dashboard");
          setIsSignIn(true);
          
        }} />;
      case "dashboard":
        return <DashBoard/>;
      default:
        return <SignUp/>;
    }
  };

  const handleLogout = () => {
    setShow("signin");
    setIsSignIn(false);
  };

  return (
    <>
      <Header onSwitch={setShow} isSignIn={isSignIn} onLogout={handleLogout} />
      {switchPage()}
      <Footer />
    </>
  );
};


export default App;
