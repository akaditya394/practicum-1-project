import React from 'react';
import "../styles.css";

const Profile = () => {
  return (
    <div>

    <div id="profile">
      <div id="profile-card">
        <div className="profile-card__img">
          <img className="profile__img" src="bean.jpeg" alt="profile card" />
        </div>
        <div className="profile-content">
          <div className="col">
            <div className="row">
              <div className="col">
                <label>Full Name </label>
              </div>
              <div className="col">
                <p>Mr. Bean</p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Email</label>
              </div>
              <div className="col">
                <p>mrbean@gmail.com</p>
              </div>
            </div>
          </div>
          <p>
            <button className="btn btn-success edit-profile" >
              <i className="fas fa-user-edit"></i> Edit Profile
            </button>
          </p>
          <div className="rooms">
            <h2 className="room-heading">Your rooms</h2>

            <div className="box">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <label>Maths</label>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-block box-btn">
                      Edit
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-block box-btn">
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <label>Science</label>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-block box-btn">
                      Edit
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-block box-btn">
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="room-heading">Enrolled rooms</h2>

            <div className="box">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <label>Maths</label>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-block box-btn">
                      See Schedule
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-danger btn-block box-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <label>Science</label>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-block box-btn">
                      See Schedule
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-danger btn-block box-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p> @</p>
    </div>
 

    </div>
  )
}

export default Profile;
