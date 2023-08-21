import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
// import Home from './pages/Home'
import Entrance from './pages/Entrance'
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar'
import UserProfile from './pages/UserProfile';
import RoomCreation from './pages/RoomCreation';

function App() {

  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Entrance /> : <Navigate to="/login"/>} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/"/>} 
            />
            <Route 
              path="/register" 
              element={!user ? <Register /> : <Navigate to="/"/>} 
            />
            <Route
              path="/user-profile/:username"
              element={user ? <UserProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="/room-creation"
              element={user ? <RoomCreation /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

