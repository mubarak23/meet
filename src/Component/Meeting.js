import React, { Component } from 'react';
import Nav from './MeetingNav'
import Creat_Meeting from './Component/Create.meeting'
import Active_Meeting from './Component/Active.Meeting'

class Meeting extends Component {

    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-4 col-sm-4">
                     <Nav />         
        <Route path="/create_meeting" exact component={Creat_Meeting}/>
        <Route path="/active_meeting" exact component={Active_Meeting}/>
                   </div>
               </div> 
           </div>
        );
    }
}

export default Meeting;