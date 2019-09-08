import React from "react";
import NavBar from "./components/navbar/NavBar";
import "./App.scss";
import TourList from "./components/tourList/TourList";

function App() {
  return (
    <main>
      <NavBar />
      <TourList />
    </main>
  );
}

export default App;
