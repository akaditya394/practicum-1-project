import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAlert } from 'react-alert'


function ProfileBox(props) {

  // console.log(props)

  const alert = useAlert()


  const [data, updateData] = useState([]);

  const edit= props.edit;


  function editFunction(){
    console.log("Edit function")

  }

  function removeFunction(event){
    console.log("remove function")
    const roomID = event.target.value;
    const email= props.email;
    
    axios
      .post("http://localhost:4000/editroom/remove", {
        roomId: roomID,
        email: email
      })
      .then((response) => {
        // console.log(response);
        alert.show('Removed')

        console.log("removed")


        updateData((prevState)=>{
          var filteredAry = prevState.filter(e => e._id != roomID)
          return filteredAry;
        })

      })
      .catch(err=>console.log("Some error in post "))
      ;
  }


  async function getDataRoom(id){
    await axios.get("http://localhost:4000/roomdata/"+id)
    .then(res=>{
      const d=res.data;
      // console.log("data")
      // console.log(d)
      updateData(prevState=>{
        return [...prevState, d]
      })
    })
    return id;
  }
  

  useEffect(() => {
    const id = props.id;
    console.log(id);

    id.forEach((element,key)=>{
      getDataRoom(element);
      // console.log("element data")
        // console.log(data)
    })
  }, []);

  return (
    <div className="box">
      {data.map((element, index)=>{

        return (<div className="col-md-12">
        <div className="row">
          <div className="col-md-4">

          {/* <h1>{element.name}</h1> */}
            <label className="label">{element.name}</label>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-block box-btn" value={element._id} onClick={edit? editFunction : removeFunction} >{edit? "Edit" : "Remove" }  </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary btn-block box-btn">
              schedule
            </button>
          </div>
        </div>
      </div>)
      })}
    </div>
  );
}


export default ProfileBox;