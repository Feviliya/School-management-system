import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDash from './pages/admin/AdminDash';
function App() {
  return (
    <Routes>
      <Route path='/admin/login' element={<AdminLogin></AdminLogin>}></Route>
      <Route path='/admin/dashboard' element={<AdminDash></AdminDash>}></Route>
    </Routes>
  );
}

export default App;
