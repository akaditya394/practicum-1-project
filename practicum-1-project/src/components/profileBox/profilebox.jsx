import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfileBox(props) {

  const [data, updateData] = useState([]);

  const edit= props.edit;



  async function getDataRoom(id){
    await axios.get("http://localhost:4000/roomdata/"+id)
    .then(res=>{
      const d=res.data;
      console.log(d)
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
        console.log(data)
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
            <button className="btn btn-primary btn-block box-btn">{edit? "Edit" : "Remove" }</button>
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