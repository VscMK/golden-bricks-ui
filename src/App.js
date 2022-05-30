import React from 'react';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin-page';
import AirpaysPage from './pages/airpays-page';
import UsersPage from './pages/users-page';
import InspectionsPage from './pages/inspections-page';
import Profile from './components/profile';
import GondolasPage from './pages/gondolas-page';
import ColoniesPage from './pages/colonies-page';
import CreateApiaryPage from './pages/create-apiary-page';
import CreateGondolaPage from './pages/create-gondola-page';
import CreateColonyPage from './pages/create-colony-page';
import UpdateApiaryPage from './pages/update-apiary-page';
import UpdateColonyPage from './pages/update-colony';

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
        <Route path='/create-apiary' element={<CreateApiaryPage />} />
        <Route path='/update-apiary' element={<UpdateApiaryPage />} />
        <Route path='/gondolas-page' element={<GondolasPage />} />  
        <Route path='/create-gondola' element={<CreateGondolaPage />} />
        <Route path='/colonies-page' element={<ColoniesPage />} /> 
        <Route path='/create-colony' element={<CreateColonyPage />} />
        <Route path='/update-colony' element={<UpdateColonyPage />} />
        {/* <div className="App">
        < LoginPage />
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;
