import React from "react";

import logo from "../../assets/images/PayhippoLogo.png";
import "./Signup.scss";

const Signup = () => {
    return (
        <div id="signup">
            <div className="signup">
                <header className="signup__header">
                    <img src={logo} alt="" />
                    <p>Tell us about yourself</p>
                </header>
                <form className="signup__body">
                    <section className="signup__body__fields">
                        <div className="form-field">
                            <label htmlFor="">First name</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Last name</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Gender</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Date of Birth</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Marital Status</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Highest attained qualification</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" />
                        </div>
                    </section>

                    <section className="signup__body__footer">
                        <button className="btn btn-blue">Next</button>
                        {/* <button className="btn btn-blue">Proceed</button> */}
                        <p>
                            Already have an account? <span>Sign in</span>
                        </p>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Signup;
