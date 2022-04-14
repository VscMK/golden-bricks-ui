import React from 'react';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin-page';
import AirpaysPage from './pages/airpays-page';
import UsersPage from './pages/users-page';
import InspectionsPage from './pages/inspections-page';
import Profile from './components/profile';
import CreateAirpayForm from './pages/airpays-page/create-airpay-form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/admin-page' element={<AdminPage />} />
        <Route path='/airpays-page' element={<AirpaysPage />} />
        <Route path='/users-page' element={<UsersPage />} />
        <Route path='/inspections-page' element={<InspectionsPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-apiary' element={<CreateAirpayForm />} />
        {/* <div className="App">
        < LoginPage />
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;
