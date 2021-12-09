import React, { useContext, useState, useEffect } from "react";
import "../styles.css";
import { Redirect } from "react-router-dom";

import ProfileBox from "./profileBox/profilebox";

import axios from "axios";

// import Navbar from "./Navbar";
import { AppContext } from "./context";

const Profile = (props) => {
  const { payload } = useContext(AppContext);

  console.log(payload);

  const [run, updateRun] = useState(false);

  const [roomHostId, updateHostId] = useState([]);
  const [roomMemberId, updateMemberId] = useState([]);

  const [redirect, updateRedirect] = useState(null);

  const id = payload.sub;
  // console.log(id)

  async function getData() {
    await axios
      .get("http://localhost:4000/data/" + id)
      .then((res) => {
        const dH = res.data.roomHost;
        const dM = res.data.roomMember;
        updateHostId(dH);
        updateMemberId(dM);

        updateRun(true);

        // console.log("Id updated!");
        // console.log(roomHostId);
        // console.log(roomMemberId);

        // console.log("hello");
      })
      .catch((err) => {
        console.log(err);
      });
    return 1;
  }

  useEffect(() => {
    getData();
  }, []);

  function createroom() {
    updateRedirect("/createroom");
  }

  if (redirect) {
    return <Redirect to={redirect} />;
  }

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
            <div>
              <button
                id="btnEdit"
                className="btn btn-success edit-profile epbtn"
              >
                <i className="fas fa-user-edit"></i> Edit Profile
              </button>

              <button
                id="btnCreate"
                className="btn btn-success edit-profile epbtn"
                onClick={createroom}
              >
                <i className="fas fa-user-edit"></i> Create Room
              </button>
            </div>

            {run && (
              <div>
                {" "}
                <h1 className="room-heading">Your Rooms</h1>
                <ProfileBox id={roomHostId} email = {payload.email} edit={true} />{" "}
              </div>
            )}

            {run && (
              <div>
                <h1 className="room-heading">Enrolled Rooms</h1>

                <ProfileBox id={roomMemberId} email = {payload.email} sub={payload.sub} edit={false} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
