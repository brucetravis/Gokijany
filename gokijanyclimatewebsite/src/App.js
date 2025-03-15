import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Eventdetail from "./pages/events/eventdetails/Eventdetail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/events/:eventId"} element={<Eventdetail/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
