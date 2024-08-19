import '../Profile/Profile-style.css'
import cover from '../../assets/images/cover.png'
import profile from '../../assets/images/profile.png'
import member1 from '../../assets/images/member-1.png'
import member2 from '../../assets/images/member-2.png'
import member3 from '../../assets/images/member-3.png'
import member4 from '../../assets/images/member-4.png'
import member5 from '../../assets/images/member-5.png'
import member6 from '../../assets/images/member-6.png'
import member7 from '../../assets/images/member-7.png'
import member8 from '../../assets/images/member-8.png'
import member9 from '../../assets/images/member-9.png'
import addfriends from '../../assets/images/add-friends.png'
import message from '../../assets/images/message.png'
import more from '../../assets/images/more.png'
import feeling from '../../assets/images/feeling.png'
import profilejob from '../../assets/images/profile-job.png'
import profilehome from '../../assets/images/profile-home.png'
import profilestudy from '../../assets/images/profile-study.png'
import profilelocation from '../../assets/images/profile-location.png'
import photo1 from '../../assets/images/photo1.png'
import photo2 from '../../assets/images/photo2.png'
import photo3 from '../../assets/images/photo3.png'
import photo4 from '../../assets/images/photo4.png'
import photo5 from '../../assets/images/photo5.png'
import photo6 from '../../assets/images/photo6.png'

import profilepic from '../../assets/images/profile-pic.png'
import livevideo from '../../assets/images/live-video.png'
import photo from '../../assets/images/photo.png'

import feedimage1 from '../../assets/images/feed-image-1.png'
import feedimage2 from '../../assets/images/feed-image-2.png'
import feedimage3 from '../../assets/images/feed-image-3.png'
import feedimage4 from '../../assets/images/feed-image-4.png'
import feedimage5 from '../../assets/images/feed-image-5.png'

import like from '../../assets/images/like.png'
import likeblue from '../../assets/images/like-blue.png'
import comments from '../../assets/images/comments.png'
import share from '../../assets/images/share.png'



const Profile = () => {
  
  
  return (
    <>
      <div className="profile-container">
        <img src={cover} className="cover-img" />

        <div className="profile-details">
          <div className="pd-left">
            <div className="pd-row">
              <img src={profile} className="pd-image" />
              <div>
                <h3>Jack Nicholson</h3>
                <p>120 Friends - 20 Mutual</p>
                <img src={member1} alt />
                <img src={member2} alt />
                <img src={member3} alt />
                <img src={member4} alt />
              </div>
            </div>
          </div>
          <div className="pd-right">
            <button><img src={addfriends} />Friends</button>
            <button><img src={message} />Message</button>
            <br />
            <a href><img src={more} /></a>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-col">
            <div className="profile-intro">
              <h3>Intro</h3>
              <p className="intro-text">Believe in yourself and you can do unbelievable things <img src={feeling} /></p>
              <hr />
              <ul>
                <li><img src={profilejob} />Director of Universal Media</li>
                <li><img src={profilestudy} />Studied at ABC University</li>
                <li><img src={profilestudy} />Went to DSP Bangalore</li>
                <li><img src={profilehome} />Lives in Mumbai, India</li>
                <li><img src={profilelocation} />From Mumbai, India</li>
              </ul>
            </div>
            <div className="profile-intro">
              <div className="title-box">
                <h3>Photo</h3>
                <a href="#">All Photo</a>
              </div>
              <div className="photo-box">
                <div><img src={photo1} /></div>
                <div><img src={photo2} /></div>
                <div><img src={photo3} /></div>
                <div><img src={photo4} /></div>
                <div><img src={photo5} /></div>
                <div><img src={photo6} /></div>
              </div>
            </div>
            <div className="profile-intro">
              <div className="title-box">
                <h3>Friends</h3>
                <a href="#">All Friends</a>
              </div>
              <p>125 (10 mutual)</p>
              <div className="friends-box">
                <div><img src={member1} /><p>Joseph N</p></div>
                <div><img src={member2} /><p>Nathan N</p></div>
                <div><img src={member3} /><p>Geroge D</p></div>
                <div><img src={member4} /><p>Francis K</p></div>
                <div><img src={member5} /><p>Anthoney E</p></div>
                <div><img src={member6} /><p>Maichael A</p></div>
                <div><img src={member7} /><p>Edward A</p></div>
                <div><img src={member8} /><p>Bradon C</p></div>
                <div><img src={member9} /><p>James Doe</p></div>
              </div>
            </div>
          </div>

          <div className="post-col">
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
          </div>
        </div>

                
      </div>
    </>
  )
}

export default Profile