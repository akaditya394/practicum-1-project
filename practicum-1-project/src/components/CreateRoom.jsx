import React from "react";
import Navbar from "./Navbar";
import "../styles.css";

const CreateRoom = () => {
  return (
    <div className="room-creation">
      <Navbar />
      <div className="create-room">
        <div className="room-plate">
          <h2 className="create-room-heading">create your custom room</h2>
          <div>
            <input
              type="text"
              className="form-input"
              size="140"
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="form-input"
              size="140"
              placeholder="Purpose"
            ></input>
          </div>
          {/* <div>
            <input
              type="email"
              className="form-input"
              size="140"
              multiple
              placeholder="Type in the email of the participant you want to add in the room"
            ></input>
          </div> */}
          <div>
            <button type="button" className="btn-createroom">
              Create Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
