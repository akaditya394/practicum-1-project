
function ProfileBox(props){

    return (<div className="box">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-4">
          <label className="label">{props.name}</label>
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
    </div>)
}

export default ProfileBox

