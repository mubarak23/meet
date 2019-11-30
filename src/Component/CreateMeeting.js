import React, { Component } from "react";

class CreatMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    };
    this.onCreateSubmit = this.onCreateSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onCreateSubmit(event) {
    event.preventDefault();
    const body = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    };
    console.log(body);
  }
  render() {
    //console.log("Checking Test");
    return (
      <div className="container">
        <div className="col-10 offset-2">
          <h3 className="lead">Create Meeting</h3>
          <form className="form-group" onSubmit={this.onCreateSubmit}>
            <div>
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                required
                onChange={this.onFieldChange}
                placeholder="Meeting Title"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                required
                onChange={this.onFieldChange}
                placeholder="Meeing Description"
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                className="form-control"
                onChange={this.onFieldChange}
                required
                placeholder="Meeing Description"
              />
            </div>
            <br></br>
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
