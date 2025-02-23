import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Features from './pages/features/Features';
import Contacts from './pages/contacts/Contacts';
import Mission from './pages/mission/Mission';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Hero from './pages/hero/Hero';
import Why from './pages/whyus/Why';
import Who from './pages/who/Who';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={"/who"} element={<Who/>}/>
          <Route path={"hero"} element={<Hero/>}/>
          <Route path={"/"} element={<Landing/>}/>
          <Route path={"/whyus"} element={<Why/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/mission"} element={<Mission/>}/>
          <Route path={"/features"} element={<Features/>}/>
          <Route path={"/contacts"} element={<Contacts/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
