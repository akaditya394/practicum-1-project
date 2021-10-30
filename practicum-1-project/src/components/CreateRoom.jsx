import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles.css";
import axios from "axios";

const CreateRoom = () => {
  const [email, updateEmail] = useState("");
  const [roomName, updateName] = useState("");
  const [roomPurpose, updatePurpose] = useState("");

  const [emailList, updateList] = useState([]);

  console.log(emailList);
  console.log(email);

  function handleClickAdd() {
    updateList((prevState) => {
      return [...prevState, email];
    });
    updateEmail("");
  }

  function AddList() {
    const roomInfo = {
      name: roomName,
      purpose: roomPurpose,
      members: emailList,
    };
    axios
      .post("http://localhost:4000/createroom/createroom", {
        roomInfo: roomInfo,
        googleId: null,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(err=>console.log("Some error in post req"))
      ;

    updateList([]);
    updateName("");
    updatePurpose("");
  }

  return (
    <div className="room-creation">
      <Navbar />
      <div className="create-room">
        <div className="room-plate">
          <h2 className="create-room-heading">create your custom room</h2>
          <div>
            <input
              name="roomName"
              value={roomName}
              onChange={(e) => {
                updateName(e.target.value);
              }}
              type="text"
              className="form-input"
              size="140"
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input
              name="roomPurpose"
              value={roomPurpose}
              onChange={(e) => {
                updatePurpose(e.target.value);
              }}
              type="text"
              className="form-input"
              size="140"
              placeholder="Purpose"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="form-input"
              onChange={(e) => {
                updateEmail(e.target.value);
              }}
              value={email}
              size="130"
              placeholder="Members' email"
            ></input>
            <button onClick={handleClickAdd}>+ Add User</button>
          </div>

          <div>
            <button type="button" className="btn-createroom" onClick={AddList}>
              Create Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
