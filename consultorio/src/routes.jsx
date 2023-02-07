import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Consult } from './pages/Consult/Consult';
import Dashboard from './pages/Dashboard/Dashboard';
import { Scheduling } from './pages/Scheduling/Scheduling';

export default function Router(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/scheduling" element={<Scheduling/>} />
        <Route path="/consult" element={<Consult/>} />
      </Routes>
    </BrowserRouter>
  );
}