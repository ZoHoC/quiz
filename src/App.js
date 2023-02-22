import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Menu from "./moduls/Menu/Menu";
import Questions from "./moduls/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quiz" element={<Menu />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
