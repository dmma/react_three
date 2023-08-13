import {TextField} from "@mui/material";

function UserCredentials({emailRef, passwordRef, validateInput}) {
    return (
        <div>
            <input type='email' name='email' ref={emailRef} onBlur={validateInput}/>
            <input type='password' name='password' ref={passwordRef} onBlur={validateInput}/>
        </div>
    );
}

export default UserCredentials;