import React from "react";
import './Signup.css'

function Signup(props) {
    return(
        <div>
            <h1>Sign Up</h1>
            <div className="grid">
                <div>
                    <input onChange={(e) => props.firstName(e.target.value)} type="text" placeholder="first name"/>
                    <input onChange={(e)=> props.lastName(e.target.value)} type="text" placeholder="last name"/>
                </div>

                <div>
                    <input onChange={(e)=> props.dob(e.target.value)} type="date" placeholder="date of birth"/>
                    <input onChange={(e)=> props.address(e.target.value)} type="text"  placeholder="Address"/>
                </div>

                <div>
                    <input onChange={(e)=> props.city(e.target.value)} type="text"  placeholder="City"/>
                    <input onChange={(e)=> props.state(e.target.value)} type="text"  placeholder="State"/>
                </div>

                <div>
                    <input onChange={(e)=> props.zipcode(e.target.value)} type="text"  placeholder="Zipcode"/>
                    <input onChange={(e)=> props.username(e.target.value)} type="text" placeholder="Username"/>
                </div>

                <div className="email">
                    <input onChange={(e)=> props.email(e.target.value)} type="text"  placeholder="Email"/>
                </div>
                <button onClick={() => props.submitButton()}>Sign Up</button>
   

            </div>

        </div>
    );

}

export default Signup;