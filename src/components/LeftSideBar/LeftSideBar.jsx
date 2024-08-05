import '../LeftSideBar/LeftSideBar-style.css'
import news from '../../assets/images/news.png'
import friends from '../../assets/images/friends.png'
import group from '../../assets/images/group.png'
import marketplace from '../../assets/images/marketplace.png'
import watch from '../../assets/images/watch.png'
import candy from '../../assets/images/candy.jpg'
import shortcut1 from '../../assets/images/shortcut-1.png'
import ballpool from '../../assets/images/ball-pool.jpg'
import shortcut2 from '../../assets/images/shortcut-2.png'



const LeftSideBar = () => {
  
  
  return (
    <>
      <div className="left-sidebar">
        <div className="imp-links">
          <a href="#"><img src={news} />Latest News</a>
          <a href="#"><img src={friends} />Friends</a>
          <a href="#"><img src={group} />Group</a>
          <a href="#"><img src={marketplace} />Market Place</a>
          <a href="#"><img src={watch} />Watch</a>
          <a href="#">See More</a>
        </div>
        <div className="shortcut-links">
          <p>Your shortcuts</p>
          <a href="#"><img src={candy} />Candy Crush Saga</a>
          <a href="#"><img src={shortcut1} />Full stack Development</a>
          <a href="#"><img src={ballpool} />8 Ball pool</a>
          <a href="#"><img src={shortcut2} />Website Experts</a>
        </div>
      </div>
    </>
  )
}

export default LeftSideBar