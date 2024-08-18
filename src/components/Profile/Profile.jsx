import '../Profile/Profile-style.css'
import cover from '../../assets/images/cover.png'
import profile from '../../assets/images/profile.png'
import member1 from '../../assets/images/member-1.png'
import member2 from '../../assets/images/member-2.png'
import member3 from '../../assets/images/member-3.png'
import member4 from '../../assets/images/member-4.png'
import addfriends from '../../assets/images/add-friends.png'
import message from '../../assets/images/message.png'
import more from '../../assets/images/more.png'


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

                
      </div>
    </>
  )
}

export default Profile