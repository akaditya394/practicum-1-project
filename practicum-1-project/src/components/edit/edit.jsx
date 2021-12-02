import React, { useState, useEffect } from "react";
import ToDoItem from "./item";
import InputArea from "./input";
import axios from "axios";

import "./edit.css"
import { useAlert } from 'react-alert'


function Edit(props) {


  const alert = useAlert()

    // console.log("Hello edit room")


    const roomId = props.location.state.roomId;
    // console.log(roomId)


    const [run, updateRun] = useState(false);

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    const [roomName, updateName] = useState("")
    const [roomPurpose, updatePurpose] = useState("")

    const [removedItems, updateRemoves] = useState([]);
    const [newItems, updateNew] = useState([]);

    async function getData() {
        await axios
            .get("http://localhost:4000/roomdata/" + roomId)
            .then((res) => {
                console.log(res.data)

                updateName(res.data.name)
                updatePurpose(res.data.purpose)
                setItems(res.data.members)

                // console.log(roomName )
                // console.log(roomPurpose )
                // console.log(items )
                
       updateRun(true)


                // console.log("hello");
            })
            .catch((err) => {
                console.log(err);
            });
        // return 1;
    }

    useEffect(() => {
        getData();
    }, []);

    // return <div>hi</div>

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        

    }

    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        updateNew((prevState)=>{
            return [...prevState, inputText];
        })
        setInputText("");
  

    }

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
        updateRemoves((prevState)=>{
            return [...prevState,items[id]]
        })

    }
    function UpdateRoomPost() {
        axios
      .post("http://localhost:4000/editroom/edit", {
        roomId: roomId,
        allMembers: items,
        newMembers: newItems,
        removedItems: removedItems
      })
      .then((response) => {
        // console.log(response);
        alert.show('Room Updated')
      })
      .catch(err=>console.log(err))
      ;

    }

    return (
        <div className="containeredit">
            <div className="headingedit">

                <h1>{roomName} </h1>

            </div>
            <div>
                <p>  <strong> Purpose  : </strong>   {roomPurpose}</p>
            </div>
            <div className="headingedit">
                <h1>Members</h1>

            </div>

            <InputArea item={inputText} change={handleChange} arrayAdd={addItem} />
            <div>
                <ul>
                    {run && (items.map((todoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))) }
                </ul>
            </div>

            <button onClick={UpdateRoomPost} >Update Room</button>
        </div>
    );
}

export default Edit;
