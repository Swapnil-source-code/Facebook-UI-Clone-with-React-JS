import '../Navbar/Navbar-style.css'
import logo from '../../assets/images/logo.png'
import notification from '../../assets/images/notification.png'
import inbox from '../../assets/images/inbox.png'
import video from '../../assets/images/video.png'
import search from '../../assets/images/search.png'
import profilepic from '../../assets/images/profile-pic.png'




const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <a href="/index.html"><img src={logo} className="logo" /></a>
          <ul>
            <li><img src={notification} /></li>
            <li><img src={inbox} /></li>
            <li><img src={video} /></li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-box">
            <img src={search} alt="search-img" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-user-icon online" onClick="settingsMenuToggle()">
            <img src={profilepic} alt="profile-pic" />
          </div>
        </div>
        <div className="settings-menu">
          <div id="dark-btn">
            <span />
          </div>
          <div className="settings-menu-inner">
            <div className="user-profile">
              <img src="images/profile-pic.png" />
              <div>
                <p>John Nicholson</p>
                <a href="/profile.html">See your profile</a>
              </div>
            </div>
            <hr />
            <div className="user-profile">
              <img src="images/feedback.png" />
              <div>
                <p>Give Fedback</p>
                <a href="#">Help us to improve the new design</a>
              </div>
            </div>
            <hr />
            <div className="settings-links">
              <img src="images/setting.png" className="setting-icon" />
              <a href="#">Settings &amp; Privacy <img src="images/arrow.png" width="10px" /></a>
            </div>
            <div className="settings-links">
              <img src="images/help.png" className="setting-icon" />
              <a href="#">Help &amp; Support <img src="images/arrow.png" width="10px" /></a>
            </div>
            <div className="settings-links">
              <img src="images/display.png" className="setting-icon" />
              <a href="#">Display &amp; Accessibility <img src="images/arrow.png" width="10px" /></a>
            </div>
            <div className="settings-links">
              <img src="images/logout.png" className="setting-icon" />
              <a href="#">Logout <img src="images/arrow.png" width="10px" /></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar