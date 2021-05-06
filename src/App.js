import "./App.css";

import { useState } from "react";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";

function App() {
    //Note: Its a simple application so instead of using "react-router" for navigation i would just use state management
    const [isSignUp, setIsSignUp] = useState(true);

    return <>{isSignUp ? <Signup handleChangePage={() => setIsSignUp(false)} /> : <Signin handleChangePage={() => setIsSignUp(true)} />}</>;
}

export default App;
