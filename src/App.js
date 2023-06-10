
import './App.css';
import { Navbar } from './Navbar';
import Header from './Header'
import { StaticCard } from './StaticCard';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home';
import Appointment from './Appointment';
import Sample from './Sample';
import Upload from './Upload';
import Advantage from './Advantage';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <StaticCard></StaticCard>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/appoint" element={<Appointment/>}></Route>
        <Route path="/sample" element={<Sample/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/plan" element={<Advantage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
