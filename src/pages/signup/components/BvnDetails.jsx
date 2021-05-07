import React from "react";
import CustomInput from "../../../components/customInput/CustomInput";

import { useFormik } from "formik";
import * as Yup from "yup";

const BvnDetails = ({ handleChangeSection, handleChangePage }) => {
    //-----------------------------------------------------------------
    //STATE
    //-----------------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            bvn: ""
        },
        validationSchema: Yup.object({
            bvn: Yup.string().required("Please enter your BVN")
        })
    });
    const { handleBlur, handleChange, handleSubmit, values, touched, errors, setFieldValue } = formik;
    const { bvn } = values;
    return (
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
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={bvn} name="bvn" id="bvn" error={errors.bvn} touched={touched.bvn} />
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
    );
};

export default BvnDetails;
