
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Header from './components/header/Header'
// import { StaticCard } from './StaticCard';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Appointment from './components/appointment/Appointment';
import Sample from './components/homesample/Sample';
import Upload from './components/upload/Upload';
import Advantage from './components/advantage/Advantage';
import Cart from './components/cart/Cart'
import Partner from './components/partner/Partner'
import Healthcheck from './components/healthcheck/Healthcheck';
import Diagnostic from './components/diagnostic/Diagnostic';
import About from './components/about/About'
import Pathology from './components/pathology/Pathology';
import Radiology from './components/radiology/Radiology';
import Cardiology from './components/cardiology/Cardiology';
import Healthcare from './components/healthcare/Healthcare';
import Tests from './components/test/Tests';
import Amenity from './components/amenity/Amenity';
import Servicecard from './components/servicecard/Servicecard';
import Testdetails from './components/testdetails/Testdetails';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      {/* <StaticCard></StaticCard> */}
      <Routes>
        <Route path="/"  exact element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/appoint" element={<Appointment/>}></Route>
        <Route path="/sample" element={<Sample/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/plan" element={<Advantage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/partner" element={<Partner/>}></Route>
        <Route path="/check" element={<Healthcheck/>}></Route>
        <Route path="/diagnos" element={<Diagnostic/>}></Route>
        <Route path="/pathology" element={<Pathology/>}></Route>
        <Route path="/radiology" element={<Radiology/>}></Route>
        <Route path="/cardiology" element={<Cardiology/>}></Route>
        <Route path="/care" element={<Healthcare/>}></Route>
        <Route path="/tests" element={<Tests/>}></Route>
        <Route path="/ame" element={<Amenity/>}></Route>
        <Route path="/serve" element={<Servicecard/>}></Route>
    <Route path="/details" element={<Testdetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
