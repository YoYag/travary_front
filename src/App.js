import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="m-auto w-1280px flex flex-col items-center ...">
      <Router>
        <Header />
        Learn React
        <Footer />
      </Router>
    </div>
  );
}

export default App;
