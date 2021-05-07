import React, { useRef, useEffect, useState } from "react";

import CustomSelect from "../../components/customSelect/CustomSelect";
import logo from "../../assets/images/PayhippoLogo.png";
import { BUSINESS_TYPE } from "./Signup.constants";
import "./Signup.scss";

import "./components/PersonalDetails";
import PersonalDetails from "./components/PersonalDetails";
const Signup = ({ handleChangePage }) => {
    //-----------------------------------------------------------------
    //HELPER HOOKS
    //-----------------------------------------------------------------
    const headerRef = useRef(null);

    //-----------------------------------------------------------------
    //STATE
    //-----------------------------------------------------------------
    const [activeSection, setActiveSection] = useState(1);
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    //-----------------------------------------------------------------
    //HELPER FUNCTIONS
    //-----------------------------------------------------------------
    const handleChangeSection = () => {
        setActiveSection(activeSection + 1);
    };

    const handleScrollScreen = () => {
        if (headerRef.current.getBoundingClientRect().top <= 0) {
            setIsHeaderSticky(true);
        } else {
            setIsHeaderSticky(false);
        }
    };

    //-----------------------------------------------------------------
    //SIDE EFFECTS
    //-----------------------------------------------------------------
    useEffect(() => {
        window.addEventListener("scroll", handleScrollScreen);

        return () => window.removeEventListener("scroll", handleScrollScreen);
    }, []);

    return (
        <div id="signup">
            <div className="signup">
                <header className={isHeaderSticky ? "signup__header sticky" : `signup__header`} ref={headerRef}>
                    <img src={logo} alt="" />
                </header>

                {/* ------------------------------------------------------ */}
                {/* Personal Details */}
                {/* ------------------------------------------------------ */}
                {activeSection === 1 && <PersonalDetails handleChangeSection={handleChangeSection} handleChangePage={handleChangePage} />}

                {/* ------------------------------------------------------ */}
                {/* Otp code */}
                {/* ------------------------------------------------------ */}
                {activeSection === 2 && (
                    <form className="signup__body" onSubmit={handleChangeSection}>
                        <section className="signup__body__title">
                            <h2>Verify your Phone Number</h2>
                            <p>
                                We've sent an SMS message with your <br /> verification code to your phone number
                            </p>
                        </section>

                        <section className="signup__body__otp-section">
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>OTP
                                </label>
                                <input type="text" />
                            </div>
                            <span className="link">Resend Otp</span>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={handleChangeSection}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account?{" "}
                                <span className="link" onClick={handleChangePage}>
                                    Sign in
                                </span>
                            </p>
                            <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                        </section>
                    </form>
                )}

                {/* ------------------------------------------------------ */}
                {/* Business Details */}
                {/* ------------------------------------------------------ */}
                {activeSection === 3 && (
                    <form className="signup__body" noValidate onSubmit={handleChangeSection} style={{ width: "100%" }}>
                        <section className="signup__body__title">
                            <h2>Tell us about your business</h2>
                            <p>(Business Details)</p>
                        </section>
                        <section className="signup__body__fields">
                            <div className="form-field">
                                <label htmlFor="">
                                    {" "}
                                    <span className="asterik">*</span>Business Name
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Business Phone Number
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Type of Business
                                </label>
                                <CustomSelect options={BUSINESS_TYPE} placeholder="Select business type" />
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
                                <label htmlFor="">
                                    <span className="asterik">*</span>Business Address
                                </label>
                                <CustomSelect options={BUSINESS_TYPE} placeholder="Select" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Business Owner Home Address
                                </label>
                                <CustomSelect options={BUSINESS_TYPE} placeholder="Select" />
                            </div>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={handleChangeSection}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account?{" "}
                                <span className="link" onClick={handleChangePage}>
                                    Sign in
                                </span>
                            </p>
                            <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                        </section>
                    </form>
                )}

                {/* ------------------------------------------------------ */}
                {/* Bank Verification Number */}
                {/* ------------------------------------------------------ */}
                {activeSection === 4 && (
                    <form className="signup__body" onSubmit={() => console.log("HERE")}>
                        <section className="signup__body__title">
                            <h2>Bank Verification Number</h2>
                            <p>
                                Industry regulations require we collect this <br /> information to verify your identity
                            </p>
                        </section>

                        <section className="signup__body__otp-section">
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>BVN
                                </label>
                                <input type="text" />
                            </div>
                            <span className="link">Can't remember your BVN?</span>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={() => console.log("THERE")}>
                                Next
                            </button>
                            <p className="enquiry">
                                Already have an account?{" "}
                                <span className="link" onClick={handleChangePage}>
                                    Sign in
                                </span>
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
