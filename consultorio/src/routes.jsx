import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import { Scheduling } from './pages/Scheduling/Scheduling';

export default function Router(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/scheduling" element={<Scheduling/>} />
      </Routes>
    </BrowserRouter>
  );
}