import React from "react";

import CustomSelect from "../../../components/customSelect/CustomSelect";
import CustomInput from "../../../components/customInput/CustomInput";

import { GENDER_OPTIONS, MARITAL_STATUS, HAQ } from "../Signup.constants";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../Signup.scss";

const PersonalDetails = ({ handleChangeSection, handleChangePage }) => {
    //-----------------------------------------------------------------
    //STATE
    //-----------------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            gender: "",
            dateOfBirth: "",
            maritalStatus: "",
            highestAttainedQualification: "",
            email: "",
            phoneNumber: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Firstname is required"),
            lastName: Yup.string().required("Lastname is required"),
            email: Yup.string().email("Invalid email address").required("Email is Required"),
            phoneNumber: Yup.string().required("Phone number is required")
        })
    });
    const { handleBlur, handleChange, handleSubmit, values, touched, errors, setFieldValue } = formik;
    const { firstName, lastName, email, phoneNumber, dateOfBirth } = values;

    return (
        <form className="signup__body" noValidate onSubmit={handleChangeSection} style={{ width: "100%" }}>
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
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={firstName} name="firstName" id="firstName" error={errors.firstName} touched={touched.firstName} />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        <span className="asterik">*</span>
                        Last name
                    </label>
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={lastName} name="lastName" id="lastName" error={errors.lastName} touched={touched.lastName} />
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
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={dateOfBirth} name="dateOfBirth" id="dateOfBirth" error={errors.dateOfBirth} touched={touched.dateOfBirth} />
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
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={email} name="email" id="email" error={errors.email} touched={touched.email} />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        <span className="asterik">*</span>Phone Number
                    </label>
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={phoneNumber} name="phoneNumber" id="phoneNumber" error={errors.phoneNumber} touched={touched.phoneNumber} />
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
    );
};

export default PersonalDetails;
