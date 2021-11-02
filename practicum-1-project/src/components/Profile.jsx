import React, { useContext, useState, useEffect } from "react";
import "../styles.css";

import ProfileBox from "./profileBox/profilebox";

import axios from "axios";

// import Navbar from "./Navbar";

import { AppContext } from "./context";

const Profile = (props) => {
  const { payload } = useContext(AppContext);

  const [roomHostId, updateHostId] = useState([]);
  const [roomMemberId, updateMemberId] = useState([]);

  const [roomHostData, updateHostData] = useState([]);
  const [roomMemberData, updateMemberData] = useState([]);

  const id = payload.sub;
  // console.log(id)

  function dataFetch() {
    roomHostId.forEach((id) => {
      axios.get("http://localhost:4000/roomdata/" + id).then((res) => {
        console.log(res.data);
        updateHostData((prevState) => {
          return [...prevState, res.data];
        });
      });
    });

    roomMemberId.forEach((id) => {
      axios.get("http://localhost:4000/roomdata/" + id).then((res) => {
        console.log(res.data);
        updateMemberData((prevState) => {
          return [...prevState, res.data];
        });
      });
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/data/" + id)
      .then((res) => {
        updateHostId(res.data.roomHost);
        updateMemberId(res.data.roomMember);

        dataFetch();

        // console.log("hello");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <Navbar /> */}

      <div id="profile">
        <div id="profile-card">
          <div className="profile-card__img">
            <img
              className="profile__img"
              src={payload.picture}
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
                    <p>{payload.name}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label>Email</label>
                  </div>
                  <div className="col">
                    <p>{payload.email}</p>
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

              {roomHostData.map((data, index) => (
                <ProfileBox name={data.name} />
              ))}


              <h2 className="room-heading">enrolled rooms</h2>

              {roomMemberData.map((data, index) => (
                <ProfileBox name={data.name} />
              ))}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
