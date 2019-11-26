import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetingNav extends Component {

    render() {
        return (
            <div>
                <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active">
                    Create Meeting
                </a>
                <a href="#" className="list-group-item list-group-item-action">Signup for Meeting</a>
                <a href="#" className="list-group-item list-group-item-action">View Active Meeting</a>
                <a href="#" className="list-group-item list-group-item-action">View Meeting Member</a>
                </div>
            </div>
        );
    }
}

export default MeetingNav;<div>
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div></div>