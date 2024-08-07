import './MainContent-style.css'

import upload from '../../assets/images/upload.png'
import member1 from '../../assets/images/member-1.png'
import member2 from '../../assets/images/member-2.png'
import member3 from '../../assets/images/member-3.png'

import profilepic from '../../assets/images/profile-pic.png'

import livevideo from '../../assets/images/live-video.png'
import photo from '../../assets/images/photo.png'
import feeling from '../../assets/images/feeling.png'

import feedimage1 from '../../assets/images/feed-image-1.png'
import feedimage2 from '../../assets/images/feed-image-2.png'
import feedimage3 from '../../assets/images/feed-image-3.png'
import feedimage4 from '../../assets/images/feed-image-4.png'
import feedimage5 from '../../assets/images/feed-image-5.png'

import like from '../../assets/images/like.png'
import likeblue from '../../assets/images/like-blue.png'
import comments from '../../assets/images/comments.png'
import share from '../../assets/images/share.png'


const MainContent = () => {
  
  
  return (
    <>
      <div className="main-content">
        <div className="story-gallery">
          <div className="story story1">
            <img src={upload} />
            <p>Post Story</p>
          </div>
          <div className="story story2">
            <img src={member1} />
            <p>Alison</p>
          </div>
          <div className="story story3">
            <img src={member2} />
            <p>Jackson</p>
          </div>
          <div className="story story4">
            <img src={member3} />
            <p>Samona</p>
          </div>
        </div>
        <div className="write-post-container">
          <div className="user-profile">
            <img src={profilepic} />
            <div>
              <p>John Nicholson</p>
              <small>Public <i className="fa-solid fa-caret-down" /></small>
            </div>
          </div>
          <div className="post-input-container">
            <textarea rows={3} placeholder="What's your mind, John ?" defaultValue={""} />
            <div className="add-post-links">
              <a href="#"><img src={livevideo} />Live Video</a>
              <a href="#"><img src={photo} />Photo / Video</a>
              <a href="#"><img src={feeling} />Feeling / Activity</a>
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profilepic} />
              <div>
                <p>John Nicholson</p>
                <small>05 June 2024, 15:09 pm</small>
              </div>
            </div>
            <a href="#"><i className="fa-solid fa-ellipsis-vertical" /></a>
          </div>
          <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipiscing elit dictumst non nulla, montes felis aptent eros.</p>
          <img src={feedimage1} className="post-img" />
          <div className="post-row">
            <div className="activity-icons">
              <div><img src={likeblue} />120</div>
              <div><img src={comments} />40</div>
              <div><img src={share} />15</div>
            </div>
            <div className="post-profile-icon">
              <img src={profilepic} /><i className="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profilepic} />
              <div>
                <p>John Nicholson</p>
                <small>05 June 2024, 15:09 pm</small>
              </div>
            </div>
            <a href="#"><i className="fa-solid fa-ellipsis-vertical" /></a>
          </div>
          <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipiscing elit dictumst non nulla, montes felis aptent eros.</p>
          <img src={feedimage2} className="post-img" />
          <div className="post-row">
            <div className="activity-icons">
              <div><img src={likeblue} />120</div>
              <div><img src={comments} />40</div>
              <div><img src={share} />15</div>
            </div>
            <div className="post-profile-icon">
              <img src={profilepic} /><i className="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profilepic} />
              <div>
                <p>John Nicholson</p>
                <small>05 June 2024, 15:09 pm</small>
              </div>
            </div>
            <a href="#"><i className="fa-solid fa-ellipsis-vertical" /></a>
          </div>
          <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipiscing elit dictumst non nulla, montes felis aptent eros.</p>
          <img src={feedimage3} className="post-img" />
          <div className="post-row">
            <div className="activity-icons">
              <div><img src={like} />120</div>
              <div><img src={comments} />40</div>
              <div><img src={share} />15</div>
            </div>
            <div className="post-profile-icon">
              <img src={profilepic} /><i className="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profilepic} />
              <div>
                <p>John Nicholson</p>
                <small>05 June 2024, 15:09 pm</small>
              </div>
            </div>
            <a href="#"><i className="fa-solid fa-ellipsis-vertical" /></a>
          </div>
          <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipiscing elit dictumst non nulla, montes felis aptent eros.</p>
          <img src={feedimage4} className="post-img" />
          <div className="post-row">
            <div className="activity-icons">
              <div><img src={like} />120</div>
              <div><img src={comments} />40</div>
              <div><img src={share} />15</div>
            </div>
            <div className="post-profile-icon">
              <img src={profilepic} /><i className="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-row">
            <div className="user-profile">
              <img src={profilepic} />
              <div>
                <p>John Nicholson</p>
                <small>05 June 2024, 15:09 pm</small>
              </div>
            </div>
            <a href="#"><i className="fa-solid fa-ellipsis-vertical" /></a>
          </div>
          <p className="post-text">Lorem ipsum dolor sit amet consectetur, adipiscing elit dictumst non nulla, montes felis aptent eros.</p>
          <img src={feedimage5} className="post-img" />
          <div className="post-row">
            <div className="activity-icons">
              <div><img src={likeblue} />120</div>
              <div><img src={comments} />40</div>
              <div><img src={share} />15</div>
            </div>
            <div className="post-profile-icon">
              <img src={profilepic} /><i className="fa-solid fa-caret-down" />
            </div>
          </div>
        </div>
        <button type="button" className="load-more-btn">Load More</button>
      </div>
    </>
  )
}

export default MainContent