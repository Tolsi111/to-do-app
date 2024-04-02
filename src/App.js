import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddNotePage from "./pages/AddNotePage";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/add" element={<AddNotePage />}></Route>
        <Route path="/*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
