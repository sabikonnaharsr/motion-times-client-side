import React from 'react';
import {Link} from 'react-router-dom';
const TermsAndCondition = () => {
    return (
        <div>
            <h1>Terms and Condition</h1>
            <p>Go back to Sign Up: <Link to= '/signup'>Sing Up</Link> </p>
        </div>
    );
};

export default TermsAndCondition;