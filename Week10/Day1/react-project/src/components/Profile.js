import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
        firstName: "Deanna",
        lastName: "Masters",
        city: "Marietta",
        profilePic: "https://media-exp1.licdn.com/dms/image/C4D03AQEDKQyQ-YxG9w/profile-displayphoto-shrink_100_100/0/1593993141456?e=1638403200&v=beta&t=F0vggI5vjiG1H-rYuXJs6D1_BtBNNnDD_rFiPR3eyQs",
    }
    
    
    render() {
        return (
            <div>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>City: {this.state.city}</p>
                <img src={this.state.profilePic}></img>
                
            </div>
        )
    }
}