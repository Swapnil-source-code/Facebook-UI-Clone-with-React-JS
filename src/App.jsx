import './App.css'
import Navbar from './components/Navbar/Navbar'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import MainContent from './components/MainContent/MainContent'
import RightSideBar from './components/RightSideBar/RightSideBar'

function App() {
  

  return (
    <>
      <Navbar /> 
      <div className="container">
        <LeftSideBar />
        <MainContent/>
        <RightSideBar/>
      </div>
    </>
  )
}

export default App
