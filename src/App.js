import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import ListEmloye from "./components/ListEmloye";
import Detailemployee from "./components/Detailemployee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes path="/">
            <Route path="/" element={<FormLogin />} />
            <Route path="employees" element={<ListEmloye />} />
            <Route
              path="detailemployee/:employeeId"
              element={<Detailemployee />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
