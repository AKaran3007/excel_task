import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStatedemo from "./component/UseState_demo";
import View from "./component/View";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseStatedemo />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
