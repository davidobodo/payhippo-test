import React, { useState } from "react";

import logo from "../../assets/images/PayhippoLogo.png";
import "./Signup.scss";

const Signup = () => {
    const [activeSection, setActiveSection] = useState(1);
    const handleSubmitPersonalDetails = (e) => {
        e.preventDefault();
        setActiveSection(2);
    };

    // const handleConfirmOtp = (e) => {
    //     e.preventDefault();
    //     setActiveSection(3);
    // };
    return (
        <div id="signup">
            <div className="signup">
                <header className="signup__header">
                    <img src={logo} alt="" />
                </header>

                {activeSection === 1 && (
                    <form className="signup__body" noValidate onSubmit={handleSubmitPersonalDetails} style={{ width: "100%" }}>
                        <section className="signup__body__title">
                            <h2>Tell us about yourself</h2>
                            <p>(Personal Details)</p>
                        </section>
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
                            <button className="btn btn-blue" type="submit" onClick={handleSubmitPersonalDetails}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account? <span className="link">Sign in</span>
                            </p>
                            <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                        </section>
                    </form>
                )}

                {activeSection === 2 && (
                    <form className="signup__body" onSubmit={() => setActiveSection(3)}>
                        <section className="signup__body__title">
                            <h2>Verify your Phone Number</h2>
                            <p>
                                We've sent an SMS message with your <br /> verification code to your phone number
                            </p>
                        </section>

                        <section className="signup__body__otp-section">
                            <div className="form-field">
                                <label htmlFor="">OTP</label>
                                <input type="text" />
                            </div>
                            <span className="link">Resend Otp</span>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={() => setActiveSection(3)}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account? <span className="link">Sign in</span>
                            </p>
                            <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                        </section>
                    </form>
                )}

                {activeSection === 3 && (
                    <form className="signup__body" noValidate onSubmit={() => setActiveSection(4)} style={{ width: "100%" }}>
                        <section className="signup__body__title">
                            <h2>Tell us about your business</h2>
                            <p>(Business Details)</p>
                        </section>
                        <section className="signup__body__fields">
                            <div className="form-field">
                                <label htmlFor="">Business Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Business Phone Number</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Type of Business</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">RC Number</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">CAC Number</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Other Lending platform you use</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Business Address</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">Business Owner Home Address</label>
                                <input type="text" />
                            </div>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={() => setActiveSection(4)}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account? <span className="link">Sign in</span>
                            </p>
                            <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                        </section>
                    </form>
                )}

                {activeSection === 4 && (
                    <form className="signup__body" onSubmit={() => setActiveSection(1)}>
                        <section className="signup__body__title">
                            <h2>Bank Verification Number</h2>
                            <p>
                                Industry regulations require we collect this <br /> information to verify your identity
                            </p>
                        </section>

                        <section className="signup__body__otp-section">
                            <div className="form-field">
                                <label htmlFor="">BVN</label>
                                <input type="text" />
                            </div>
                            <span className="link">Can't remember your BVN?</span>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={() => setActiveSection(1)}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account? <span className="link">Sign in</span>
                            </p>
                            <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                        </section>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Signup;
