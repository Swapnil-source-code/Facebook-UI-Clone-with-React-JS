import './RightSideBar-style.css'
import advertisement from '../../assets/images/advertisement.png'
import member1 from '../../assets/images/member-1.png'
import member2 from '../../assets/images/member-2.png'
import member3 from '../../assets/images/member-3.png'



const RightSideBar = () => {
  
  
  return (
    <>
      <div className="right-sidebar">
        <div className="sidebar-title">
          <h4>Event&#39;s</h4>
          <a href="#">See All</a>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>18</h3>
            <span>March</span>
          </div>
          <div className="right-event">
            <h4>Social Media</h4>
            <p> <i className="fa-solid fa-location-dot"> </i> Willson Tech Park</p>
            <a href="#">More Info</a>
          </div>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>22</h3>
            <span>June</span>
          </div>
          <div className="right-event">
            <h4>Mobile Marketing</h4>
            <p><i className="fa-solid fa-location-dot"> </i> Willson Tech Park</p>
            <a href="#">More Info</a>
          </div>
        </div>
        <hr />
        <div className="sidebar-title">
          <h4>Sponsored</h4>
          <a href="#">Close</a>
        </div>
        <img src={advertisement} className="sidebar-ads" />
        <hr />
        <div className="sidebar-title">
          <h4>Conversation</h4>
          <a href="#">Hide Chat</a>
        </div>
        <div className="online-list">
          <div className="online">
            <img src={member1} alt />
          </div>
          <p>Alison Mina</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src={member2} alt />
          </div>
          <p>Jack Aston</p>
        </div>
        <div className="online-list">
          <div className="online">
            <img src={member3} alt />
          </div>
          <p>Samona Rose </p>
        </div>
      </div>
    </>
  )
}

export default RightSideBar