import React from "react";
import logo from "../../assets/images/PayhippoLogo.png";
import "./Signin.scss";

import CustomInput from "../../components/customInput/CustomInput";
import CustomButton from "../../components/customButton/CustomButton";

import { useFormik } from "formik";
import * as Yup from "yup";

const Signin = ({ handleChangePage }) => {
    //-----------------------------------------------------------------
    //STATE
    //-----------------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            phoneNumber: ""
        },
        validationSchema: Yup.object({
            phoneNumber: Yup.string().required("Please enter your phone number")
        })
    });
    const { handleBlur, handleChange, handleSubmit, values, touched, errors, setFieldValue } = formik;
    const { phoneNumber } = values;

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
                        <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={phoneNumber} name="phoneNumber" id="phoneNumber" error={errors.phoneNumber} touched={touched.phoneNumber} />
                    </div>

                    <section className="signin__body__footer">
                        <CustomButton onClick={handleChangePage} disabled={!(formik.isValid && formik.dirty)}>
                            Submit
                        </CustomButton>
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
