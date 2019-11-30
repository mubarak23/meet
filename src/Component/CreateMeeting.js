import React, { Component } from "react";

class CreatMeeting extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-10 offset-2">
          <h3 className="lead">Create Meeting</h3>
          <form className="form-group">
            <div>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="Meeting Title"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                required
                placeholder="Meeing Description"
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              value="Creating Meeting"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreatMeeting;
