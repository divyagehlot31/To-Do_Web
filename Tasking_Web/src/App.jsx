import React, { useState } from "react";
import Header from "./components/Header/Header";
import SignUp from "./Pages/SignUP/SignUp";
import SignIn from "./Pages/SignIN/SignIn";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'

const App = () => {
  const [show, setShow] = useState();

  const switchPage = () => {
    switch (show) {
      case "signup":
        return <SignUp />;
      case "signin":
        return <SignIn onSignIn={() => setShow("dashboard")} />;
      case "dashboard":
        return <DashBoard />;
      default:
        return <SignUp />;
    }
  };

  return (
    <>
      <Header onSwitch={setShow} />
      {switchPage()}
      <Footer />
    </>
  );
};

export default App;
