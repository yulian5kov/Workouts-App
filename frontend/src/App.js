import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
//import Home from './pages/Home'
import Entrance from './pages/Entrance'
import Register from './pages/Register';
import Login from './pages/Login';
// import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Entrance />} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/register" 
              element={<Register />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

