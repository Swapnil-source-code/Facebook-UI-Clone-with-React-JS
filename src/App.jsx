import './App.css'
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
    </>
  )
}

export default App
