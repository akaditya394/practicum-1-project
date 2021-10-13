import React from "react";
import Navbar from "./Navbar";
import "../styles.css";

const CreateRoom = () => {
  return (
    <div>
    <Navbar />
      <div className="create-room">
        <form>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Room Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Purpose
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Purpose"
              />
            </div>
          </div>

          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label for="">Add people</label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Member's email"
                  aria-label="Member's email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary" type="button">
                    + Add User
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Create Room
              </button>
            </div>
          </div>
        </form>

        <div className="member-list">
          <h6>Room Host - xyz@.com</h6>

          <ul>
            <li>
              <input type="checkbox" name="" id="" checked /> ab@cd.com
            </li>
            <li>
              <input type="checkbox" name="" id="" checked /> ab@cd.com
            </li>
            <li>
              <input type="checkbox" name="" id="" checked /> ab@cd.com
            </li>
            <li>
              <input type="checkbox" name="" id="" checked /> ab@cd.com
            </li>
            <li>
              <input type="checkbox" name="" id="" checked /> ab@cd.com
            </li>
            <li>
              <input type="checkbox" name="" id="" checked /> ab@cd.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
