import React from 'react';
import "../Registration/Registration.css"
function Registration() {
    return (
        <body>
            <div className="container">
                <header>Sign Up</header>

                <form action="#">
                    <div className="form">
                        <div className="details personal">
                            <span className="title">Personal Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Enter your name" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Date of Birth</label>
                                    <input type="date" placeholder="Enter birth date" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Email</label>
                                    <input type="text" placeholder="Enter your email" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Mobile Number</label>
                                    <input type="number" placeholder="Enter mobile number" required></input>
                                </div>


                                <div className="input-field">
                                    <label>Password</label>
                                    <input type="text" placeholder="Enter your password" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Confirm Password</label>
                                    <input type="text" placeholder="Confirm Password" required></input>
                                </div>

                            </div>
                        </div>

                        <div className="details fitness">
                            <span className="title">Fitness Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label>Gender</label>
                                    <select required>
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="input-field">
                                    <label>Height</label>
                                    <input type="number" placeholder="Enter height" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Weight</label>
                                    <input type="number" placeholder="Enter weight" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Goal Weight</label>
                                    <input type="number" placeholder="Enter goal weight" required></input>
                                </div>

                                <div className="input-field">
                                    <label>Gym Experience</label>
                                    <select required>
                                        <option disabled selected>Select experience level</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Expert</option>
                                    </select>
                                </div>

                                <div className="input-field">
                                    <label>Fitness Goal</label>
                                    <input type="text" placeholder="Enter your main fitness goal" required></input>
                                </div>

                            </div>

                            <div className="button">
                                <input type="submit" value="Register"></input>
                            </div>

                            <span className="title">Already have an account? Click here</span>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default Registration;