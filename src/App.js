import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Like from "./pages/Like";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  useEffect(() => {
    const d = localStorage.getItem("l");
    if (!d) {
      return [];
    }
    return setlovepic(JSON.parse(d));
  }, []);
  let [lovepic, setlovepic] = useState(JSON.parse(localStorage.getItem("l")));

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Homepage lovepic={lovepic} setlovepic={setlovepic} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/like"
          element={<Like lovepic={lovepic} setlovepic={setlovepic} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
