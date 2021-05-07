import React from "react";

import CustomInput from "../../../components/customInput/CustomInput";

import { useFormik } from "formik";
import * as Yup from "yup";

const OtpDetails = ({ handleChangeSection, handleChangePage }) => {
    //-----------------------------------------------------------------
    //STATE
    //-----------------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            otp: ""
        },
        validationSchema: Yup.object({
            otp: Yup.string().required("Please enter otp")
        })
    });
    const { handleBlur, handleChange, handleSubmit, values, touched, errors, setFieldValue } = formik;
    const { otp } = values;

    return (
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
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={otp} name="otp" id="otp" error={errors.otp} touched={touched.otp} />
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
    );
};

export default OtpDetails;
