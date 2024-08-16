import '../Navbar/Navbar-style.css'
import logo from '../../assets/images/logo.png'
import notification from '../../assets/images/notification.png'
import inbox from '../../assets/images/inbox.png'
import video from '../../assets/images/video.png'
import search from '../../assets/images/search.png'
import profilepic from '../../assets/images/profile-pic.png'
import feedback from '../../assets/images/feedback.png'
import setting from '../../assets/images/setting.png'
import help from '../../assets/images/help.png'
import display from '../../assets/images/display.png'
import logout from '../../assets/images/logout.png'
import arrow from '../../assets/images/arrow.png'
import { useEffect, useState } from 'react';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
          <div className="nav-user-icon online" onClick={() => setIsOpen(!isOpen)}>
            <img src={profilepic} alt="profile-pic" />
          </div>
        </div>
        <div className={`settings-menu ${isOpen ? 'settings-menu-height' : ''}`}>
          <div id="dark-btn"
            className={theme === 'dark' ? 'dark-btn-on' : ''}
            onClick={toggleTheme}
          >
            <span />
          </div>
          <div className="settings-menu-inner">
            <div className="user-profile">
              <img src={profilepic} />
              <div>
                <p>John Nicholson</p>
                <a href="/profile.html">See your profile</a>
              </div>
            </div>
            <hr />
            <div className="user-profile">
              <img src={feedback} />
              <div>
                <p>Give Fedback</p>
                <a href="#">Help us to improve the new design</a>
              </div>
            </div>
            <hr />
            <div className="settings-links">
              <img src={setting} className="setting-icon" />
              <a href="#">Settings &amp; Privacy <img src={arrow} width="10px" /></a>
            </div>
            <div className="settings-links">
              <img src={help} className="setting-icon" />
              <a href="#">Help &amp; Support <img src={arrow} width="10px" /></a>
            </div>
            <div className="settings-links">
              <img src={display} className="setting-icon" />
              <a href="#">Display &amp; Accessibility <img src={arrow} width="10px" /></a>
            </div>
            <div className="settings-links">
              <img src={logout} className="setting-icon" />
              <a href="#">Logout <img src={arrow} width="10px" /></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar