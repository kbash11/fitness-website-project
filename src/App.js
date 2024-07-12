import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DietPlanPage from './pages/DietPlanPage';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import WorkoutPlanPage from './pages/WorkoutPlanPage';
import AskAi from './pages/AskAi';
import PrivateRoute from './components/PrivateRoute';
import ExcerciseDetails from './pages/ExcerciseDetails';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/dashboard" element={
          <PrivateRoute >
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/diet" 
        element={
          <PrivateRoute >
            <DietPlanPage />
          </PrivateRoute>
        } />
        <Route path="/workout" element={
          <PrivateRoute >
            <WorkoutPlanPage/>
          </PrivateRoute>
        } />
        <Route path="/ai" element={
          <PrivateRoute >
            <AskAi/>
          </PrivateRoute>
        } />
        <Route path="/exercise/:id" element={
          <PrivateRoute >
            <ExcerciseDetails/>
          </PrivateRoute>
        } />
        <Route path="/about" element={<About  />} />
        <Route path="/contact" element={<Contact  />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
