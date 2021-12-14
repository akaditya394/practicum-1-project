import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from 'react-alert'

import { Redirect } from "react-router-dom";


// import Edit from "../edit/edit"


function ProfileBox(props) {

  console.log("Profile here")
  console.log(props)

  const alert = useAlert()

  const [redirect, updateRedirect] = useState(null);

  const [editRoom, setEditRoom] = useState("yoyo");


  const [data, updateData] = useState([]);

  const edit = props.edit;


  function editFunction(event) {
    console.log("Edit function")

    // console.log(editRoomId)
    setEditRoom(editRoomId)
    const editRoomId = event.target.value;
    // console.log(editRoom);
    updateRedirect("/edit");
    // console.log("inside box ")


  }

  function removeFunction(event) {
    console.log("remove function")
    const roomID = event.target.value;
    const email = props.email;

    axios
      .post("http://localhost:4000/editroom/remove", {
        roomId: roomID,
        email: email
      })
      .then((response) => {
        // console.log(response);
        alert.show('Removed')

        console.log("removed")


        updateData((prevState) => {
          var filteredAry = prevState.filter(e => e._id != roomID)
          return filteredAry;
        })

      })
      .catch(err => console.log("Some error in post "))
      ;
  }


  async function getDataRoom(id) {
    await axios.get("http://localhost:4000/roomdata/" + id)
      .then(res => {
        const d = res.data;
        // console.log("data")
        // console.log(d)
        updateData(prevState => {
          return [...prevState, d]
        })
      })
    return id;
  }


  useEffect(() => {
    const id = props.id;
    // console.log(id);

    id.forEach((element, key) => {
      getDataRoom(element);
      // console.log("element data")
      // console.log(data)
    })
  }, []);

  if (redirect) {
    return <Redirect to={{
      pathname: redirect,
      state: { roomId: editRoom }
    }} />;
  }

  return (
    <div className="box">
      {data.map((element, index) => {
        var query = edit ? props.sub : props.email;
        console.log("Profile meet ")
        console.log(query)
        console.log(props.email)
        console.log(props.sub)

        var queryType = edit ? true : false;
        var meetLink = "http://localhost:4000/" + element._id + "/" + query+"/"+queryType;

        return (<div className="col-md-12">
          <div className="row">
            <div className="col-md-4">

              {/* <h1>{element.name}</h1> */}
              <label className="label">{element.name}</label>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-block box-btn" value={element._id} onClick={edit ? editFunction : removeFunction} >{edit ? "Edit" : "Remove"}  </button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-outline-primary btn-block box-btn">
                <a href={meetLink} target="_blank">
                {edit ? "Start" : "Join"} </a>
              </button>
            </div>
          </div>
        </div>)
      })}
    </div>
  );
}

export default ProfileBox;