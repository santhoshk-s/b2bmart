import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
function App() {
  const user = true

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={user?<Home />:<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
