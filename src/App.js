import './App.css';
import AppLayout from './components/AppLayout';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import adApp from './components/Admin/ad-app';
import { BrowserRouter } from 'react-router-dom';
import Reat, { useState, useEffect, useContext } from 'react';
import { useNavigate, Routes,Route } from 'react-router-dom';

function App() {
  const [ spinner, setSpinner ] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return (
    !spinner && <div className="App">
      <BrowserRouter>
        {/* <AppLayout /> */}
        {/* <SignIn/> */}
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='main/*' element={<AppLayout/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <SignUp/> */}
      <div className='content'>
        {/* <adApp/> */}
      </div>
    </div>
  );
}

export default App;

// useContext