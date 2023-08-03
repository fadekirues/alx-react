import React from "react";
// comment out for test
// import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from '../Notifications/Notifications'
function App() {
  return (
    <>
    <Notifications/>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
