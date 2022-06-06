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
import UpdateApiaryForm from './pages/update-apiary-page/update-apiary-form';
import GondolasPage from './pages/gondolas-page';
import CreateInspectionsForm from './pages/inspections-page/create-inspections-form';
//import CreateGondolaForm from './pages/create-gondola-page/create-gondola-form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/admin-page' element={<AdminPage />} />
        <Route path='/airpays-page' element={<AirpaysPage />} />
        <Route path='/users-page' element={<UsersPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/inspections-page' element={<InspectionsPage />} />
        <Route path='/create-apiary' element={<CreateAirpayForm />} />
        <Route path='/update-apiary' element={<UpdateApiaryForm />} />
        <Route path='/gondolas-page' element={<GondolasPage />} />  
        <Route path='/create-inspections' element={<CreateInspectionsForm/>}/>

        
        {/* <div className="App">
        < LoginPage />
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;
