import React from 'react';

class Profile extends React.Component{

    render(){
        this.state = {"name":"Manish Jain",
    "gender":"Male","dateOfBirth":"23/01/1989","aboutMe":"I Rock!!!"};
        return(
            <div class="panel panel-default">
                <span class="row">
                    <label class="col-md-6">Name</label> 
                    <label class="col-md-6">{this.state.name}</label>
                </span>
                <span class="row">
                    <label class="col-md-6">Gender</label> 
                    <label class="col-md-6">{this.state.gender}</label>
                </span>
                <span class="row">
                    <label class="col-md-6">Date of Birth</label> 
                    <label class="col-md-6">{this.state.dateOfBirth}</label>
                </span>
                <span class="row">
                    <label class="col-md-6">About Me</label> 
                    <label class="col-md-6">{this.state.aboutMe}</label>
                </span>
            </div>
        );
    }
}

export default Profile;