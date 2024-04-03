import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import AddNotePage from "./pages/AddNotePage";
import NoPage from "./pages/not-found/NoPage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/add" element={<AddNotePage />}></Route>
        <Route path="/*" element={<NoPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
