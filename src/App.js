import React from 'react';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        {/* <div className="App">
        < LoginPage />
        </div> */}
      </Routes>
    </Router>
  );
}

export default App;
