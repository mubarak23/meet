import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetingNav extends Component {

    render() {
        return (
            <div>
                <div className="list-group">
                <Link to="/create_meeting" className="list-group-item list-group-item-action active">
                    Create Meeting
                </Link>
                <Link href="#" className="list-group-item list-group-item-action">Signup for Meeting</Link>
                <Link to="/active_meeting" className="list-group-item list-group-item-action">View Active Meeting</Link>
                <Link href="#" className="list-group-item list-group-item-action">View Meeting Member</Link>
                </div>
            </div>
        );
    }
}

export default MeetingNav;