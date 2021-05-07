import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import CustomInput from "../../../components/customInput/CustomInput";
import CustomSelect from "../../../components/customSelect/CustomSelect";
import { BUSINESS_TYPE } from "../Signup.constants";

const BusinessDetails = ({ handleChangeSection, handleChangePage }) => {
    //-----------------------------------------------------------------
    //STATE
    //-----------------------------------------------------------------
    const formik = useFormik({
        initialValues: {
            businessName: "",
            businessPhoneNumber: "",
            businesssType: "",
            rcNumber: "",
            cacNumber: "",
            other: "",
            businessAddress: "",
            businessHomeOwnerAddress: ""
        },
        validationSchema: Yup.object({
            businessName: Yup.string().required("Business Name is required"),
            businessPhoneNumber: Yup.string().required("Business Phone Number is required"),
            businessType: Yup.string().required("Business Type is required"),
            businessAddress: Yup.string().required("Business Address is required"),
            businessHomeOwnerAddress: Yup.string().required("Business owner home address is required")
        })
    });
    const { handleBlur, handleChange, handleSubmit, values, touched, errors, setFieldValue } = formik;
    const { businessName, businessPhoneNumber, businesssType, rcNumber, cacNumber, other, businessAddress, businessHomeOwnerAddress } = values;

    return (
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
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={businessName} name="businessName" id="businessName" error={errors.businessName} touched={touched.businessName} />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        <span className="asterik">*</span>Business Phone Number
                    </label>
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={businessPhoneNumber} name="businessPhoneNumber" id="businessPhoneNumber" error={errors.businessPhoneNumber} touched={touched.businessPhoneNumber} />
                </div>
                <div className="form-field">
                    <label htmlFor="">
                        <span className="asterik">*</span>Type of Business
                    </label>
                    <CustomSelect options={BUSINESS_TYPE} placeholder="Select business type" value={businesssType} name="businesssType" id="businesssType" />
                </div>
                <div className="form-field">
                    <label htmlFor="">RC Number</label>
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={rcNumber} name="rcNumber" id="rcNumber" />
                </div>
                <div className="form-field">
                    <label htmlFor="">CAC Number</label>
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} value={cacNumber} name="cacNumber" id="cacNumber" />
                </div>
                <div className="form-field">
                    <label htmlFor="">Other Lending platform you use</label>
                    <CustomInput handleChange={handleChange} handleBlur={handleBlur} />
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
    );
};

export default BusinessDetails;
