import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Poslogin from './components/PosLogin/poslogin';
import Loginform from './components/AdminLogin/loginform';
import Cashier from './components/CashierLogin/cashier';
import Topbar from './components/Topbar/topbar';
import Dashboard from './components/Dashboard/dashboard';
import Additem from './components/Additem/additem';
import Removeitem from './components/Removeitem/removeitem';

const NotPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginTop: -58 }}>
        <p style={{ color: '#B85151', fontSize: 30, fontWeight: 700 }}>PAGE NOT FOUND</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotPage />} />
        <Route path="/" element={<Poslogin />} />
        <Route path="/admin" element={<Loginform />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route
          path="/dashboard/*"
          element={
            <>
              <Topbar />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
