import React, {useState} from "react";
import "../styles.css";
import Navbar from "./Navbar";

const Profile = (props) => {

const [profile, setProfile] = useState({
  image: "https://image.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg",
  name: "Mr Bean",
  email: "mrbean@gmail.com",
  roomMember: ["math","science"],
  roomHost: ["Something 1","Something 2"]
})

setProfile({
  image: props.picture,
  name: props.name,
  email: props.email,
  roomMember: ["math","science"],
  roomHost: ["Something 1","Something 2"]
})

  return (
    <div>
      <Navbar />

      <div id="profile">
        <div id="profile-card">
          <div className="profile-card__img">
            <img
              className="profile__img"
              src={profile.image}
              alt="profile card"
            />
          </div>
          <div className="profile-content">
            <div className="box-profile">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <label>Full Name </label>
                  </div>
                  <div className="col">
                    <p>{profile.name}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label>Email</label>
                  </div>
                  <div className="col">
                    <p>{profile.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <button className="btn btn-success edit-profile epbtn">
                <i className="fas fa-user-edit"></i> Edit Profile
              </button>
            </p>
            <div className="rooms">
              <h2 className="room-heading">your rooms</h2>

              <div className="box">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <label className="label">{profile.roomHost[0]}</label>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block box-btn">
                        edit
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block box-btn">
                        schedule
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <label className="label">{profile.roomHost[1]}</label>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block box-btn">
                        edit
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block box-btn">
                        schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="room-heading">enrolled rooms</h2>

              <div className="box">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <label className="label">{profile.roomMember[0]}</label>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block box-btn">
                        see schedule
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-danger btn-block box-btn">
                        remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4">
                      <label className="label">{profile.roomMember[1]}</label>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block box-btn">
                        see schedule
                      </button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-danger btn-block box-btn">
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
