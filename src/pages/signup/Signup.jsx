import React, { useReducer, useRef, useEffect } from "react";
import CustomSelect from "../../components/customSelect/CustomSelect";
import logo from "../../assets/images/PayhippoLogo.png";
import { GENDER_OPTIONS, MARITAL_STATUS, HAQ, BUSINESS_TYPE } from "./Signup.constants";
import "./Signup.scss";

const initialState = {
    activeSection: 1,
    headerIsSticky: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "increase_section":
            return {
                ...state,
                activeSection: state.activeSection + 1
            };
        case "stick_header":
            return {
                ...state,
                headerIsSticky: true
            };
        case "unstick_header":
            return {
                ...state,
                headerIsSticky: false
            };
        default:
            throw new Error();
    }
};

const Signup = ({ handleChangePage }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { activeSection, headerIsSticky } = state;
    const headerRef = useRef(null);

    const handleScrollScreen = () => {
        if (headerRef.current.getBoundingClientRect().top <= 0) {
            dispatch({ type: "stick_header" });
        } else {
            dispatch({ type: "unstick_header" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollScreen);

        return () => window.removeEventListener("scroll", handleScrollScreen);
    }, []);

    return (
        <div id="signup">
            <div className="signup">
                <header className={headerIsSticky ? "signup__header sticky" : `signup__header`} ref={headerRef}>
                    <img src={logo} alt="" />
                </header>

                {activeSection === 1 && (
                    <form className="signup__body" noValidate onSubmit={() => dispatch({ type: "increase_section" })} style={{ width: "100%" }}>
                        <section className="signup__body__title">
                            <h2>Tell us about yourself</h2>
                            <p>(Personal Details)</p>
                        </section>
                        <section className="signup__body__fields">
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>
                                    First name
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>
                                    Last name
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Gender
                                </label>

                                <CustomSelect options={GENDER_OPTIONS} placeholder="Select gender" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Date of Birth
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Marital Status
                                </label>
                                <CustomSelect options={MARITAL_STATUS} placeholder="Select your marital status" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Highest attained qualification
                                </label>
                                <CustomSelect options={HAQ} placeholder="Select" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Email
                                </label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="">
                                    <span className="asterik">*</span>Phone Number
                                </label>
                                <input type="text" />
                            </div>
                        </section>

                        <section className="signup__body__footer">
                            <button className="btn btn-blue" type="submit" onClick={() => dispatch({ type: "increase_section" })}>
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

                {activeSection === 2 && (
                    <form className="signup__body" onSubmit={() => dispatch({ type: "increase_section" })}>
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
                            <button className="btn btn-blue" type="submit" onClick={() => dispatch({ type: "increase_section" })}>
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

                {activeSection === 3 && (
                    <form className="signup__body" noValidate onSubmit={() => dispatch({ type: "increase_section" })} style={{ width: "100%" }}>
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
                            <button className="btn btn-blue" type="submit" onClick={() => dispatch({ type: "increase_section" })}>
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
