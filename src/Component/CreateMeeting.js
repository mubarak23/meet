import React, { Component } from "react";

class CreatMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    };
  }
  onChangeField(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    console.log("Checking Test");
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
                onChange={this.onChangeField}
                placeholder="Meeting Title"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                required
                onChange={this.onChangeField}
                placeholder="Meeing Description"
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                onChange={this.onChangeField}
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
