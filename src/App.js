import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components";
/*import Top from "./components/Top";
import Home from "./pages/Home"; */
const App = () => {
  return (
    <div className="app dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
