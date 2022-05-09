import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Form } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
//Importing components
import DataFetching from "./Components/DataFetching";

import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark">
        <header className="App-header">
          <NavBar />
        </header>
        <HeroSection />
        <DataFetching />
      </div>
    </BrowserRouter>
  );
}

export default App;
