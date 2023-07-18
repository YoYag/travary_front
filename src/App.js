import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./routes/Main";
import CreatePlan from "./routes/CreatePlan";
import PlanDetail from "./routes/PlanDetail";

function App() {
  return (
    <div className="m-auto w-1280px flex flex-col items-center ...">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create_plan" element={<CreatePlan />} />
          <Route path="/planDetail" element={<PlanDetail />} />
          Learn React
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
