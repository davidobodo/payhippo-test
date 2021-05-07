import React from "react";
import logo from "../../assets/images/PayhippoLogo.png";
import "./Signin.scss";

const Signin = ({ handleChangePage }) => {
    return (
        <div id="signin">
            <div className="signin">
                <header className="signin__header">
                    <img src={logo} alt="" />
                </header>

                <form action="" className="signin__body">
                    <section className="signin__body__title">
                        <h2>Log in</h2>
                    </section>

                    <div className="form-field" style={{ marginBottom: "50px" }}>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" />
                    </div>

                    <section className="signin__body__footer">
                        <button className="btn btn-blue" type="submit" onClick={handleChangePage}>
                            Next
                        </button>
                        <p className="enquiry">
                            Don't have an account?{" "}
                            <span className="link" onClick={handleChangePage}>
                                Sign up
                            </span>
                        </p>
                        <p className="copyright-info">&copy; payhippo.ng | Re-Engineering Digital SME Lending | All rights reserved</p>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Signin;
