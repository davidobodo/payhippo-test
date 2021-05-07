import React, { useRef, useEffect, useState } from "react";

import logo from "../../assets/images/PayhippoLogo.png";
import { BUSINESS_TYPE } from "./Signup.constants";
import "./Signup.scss";

import PersonalDetails from "./components/PersonalDetails";
import OtpDetails from "./components/OtpDetails";
import BusinessDetails from "./components/BusinessDetails";
import BvnDetails from "./components/BvnDetails";

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
        if (headerRef.current?.getBoundingClientRect().top <= 0) {
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

                {/* Personal Details */}
                {activeSection === 1 && <PersonalDetails handleChangeSection={handleChangeSection} handleChangePage={handleChangePage} />}

                {/* Otp code */}
                {activeSection === 2 && <OtpDetails handleChangeSection={handleChangeSection} handleChangePage={handleChangePage} />}

                {/* Business Details */}
                {activeSection === 3 && <BusinessDetails handleChangeSection={handleChangeSection} handleChangePage={handleChangePage} />}

                {/* Bank Verification Number */}
                {activeSection === 4 && <BvnDetails handleChangeSection={handleChangeSection} handleChangePage={handleChangePage} />}
            </div>
        </div>
    );
};

export default Signup;
