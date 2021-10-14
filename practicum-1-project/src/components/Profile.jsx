import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
const Profile = () => {
  return (
    <div>
      <Navbar />

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
                      <label className="label">maths</label>
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
                      <label className="label">science</label>
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
                      <label className="label">maths</label>
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
                      <label className="label">science</label>
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
