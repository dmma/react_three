import {TextField} from "@mui/material";

function UserCredentials({userProfile, handleUserProfileUpdate}) {
    return (
        <div>
            <TextField id="email"
                       validationid="emailValidationMessage"
                       label="Email"
                       variant="outlined"
                       value={userProfile.email}
                       error={userProfile.emailValidationMessage ? true : false}
                       helperText={userProfile.emailValidationMessage ? userProfile.emailValidationMessage : null}
                       onChange={handleUserProfileUpdate}/>
            <TextField id="password"
                       validationid="passwordValidationMessage"
                       label="Password"
                       type="password"
                       variant="outlined"
                       value={userProfile.password}
                       error={userProfile.passwordValidationMessage ? true : false}
                       helperText={userProfile.passwordValidationMessage ? userProfile.passwordValidationMessage : null}
                       onChange={handleUserProfileUpdate}/>
        </div>
    );
}

export default UserCredentials;