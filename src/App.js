
import './App.css';
import Multisteps from './components/Multisteps';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { Analytics } from '@mui/icons-material';
import Sale from './components/Sale';
import DashboardLayoutBasic from './components/DashboardLayoutBasic';
// import DashboardLayoutBasic from './components/';

function App() {
  const landingTour=localStorage.getItem('landingTourCompleted');
  console.log("landingTour:", landingTour); 
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={landingTour === "landingTourCompleted" ? <DashboardLayoutBasic/> : <Multisteps /> }>
          {/* <Route path="/" element={<Homepage/>}/> */}
          <Route path='/analysic' element={<Analytics/>}/>
          <Route path='/sale' element={<Sale/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
