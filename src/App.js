import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePlan from "./component/pages/createPlan";
import Plan from "./component/pages/plan";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<CreatePlan />} />
        <Route exact path="/plan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
