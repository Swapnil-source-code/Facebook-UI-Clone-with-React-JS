import '../Home/Home-style.css'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import MainContent from '../MainContent/MainContent'
import RightSideBar from '../RightSideBar/RightSideBar'
import Navbar from '../Navbar/Navbar'
const Home = () => {
  
  
  return (
    <>
      <Navbar/>
      <div className="container">
        <LeftSideBar />
        <MainContent/>
        <RightSideBar/>
      </div>
    </>
  )
}

export default Home