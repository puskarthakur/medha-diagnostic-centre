
import './App.css';
import { Navbar } from './Navbar';
// import Header from './Header'
// import { StaticCard } from './StaticCard';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home';
import Appointment from './Appointment';
import Sample from './Sample';
import Upload from './Upload';
import Advantage from './Advantage';
import Cart from './Cart'
import Partner from './components/partner/Partner'
import Healthcheck from './Healthcheck';
import Diagnostic from './Diagnostic';
import About from './components/about/About'
import Pathology from './Pathology';
import Radiology from './Radiology';
import Cardiology from './Cardiology';
import Homecare from './Homecare';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Header></Header> */}
      {/* <StaticCard></StaticCard> */}
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/appoint" element={<Appointment/>}></Route>
        <Route path="/sample" element={<Sample/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/plan" element={<Advantage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/partner" element={<Partner/>}></Route>
        <Route path="/check" element={<Healthcheck/>}></Route>
        <Route path="/diagnos" element={<Diagnostic/>}></Route>
        <Route path="/patho" element={<Pathology/>}></Route>
        <Route path="/radio" element={<Radiology/>}></Route>
        <Route path="/cardio" element={<Cardiology/>}></Route>
        <Route path="/care" element={<Homecare/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
