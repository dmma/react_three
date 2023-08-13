import {TextField} from "@mui/material";

function UserName({userProfile, handleUserProfileUpdate}) {
    return (
        <div>
            <TextField id="firstName"
                       validationid="firstNameValidationMessage"
                       label="First Name"
                       variant="outlined"
                       value={userProfile.firstName}
                       error={userProfile.firstNameValidationMessage ? true : false}
                       helperText={userProfile.firstNameValidationMessage ? userProfile.firstNameValidationMessage : null}
                       onChange={handleUserProfileUpdate}/>
            <TextField id="lastName"
                       validationid="lastNameValidationMessage"
                       label="Last Name"
                       variant="outlined"
                       value={userProfile.lastName}
                       error={userProfile.lastNameValidationMessage ? true : false}
                       helperText={userProfile.lastNameValidationMessage ? userProfile.lastNameValidationMessage : null}
                       onChange={handleUserProfileUpdate}/>
        </div>
    );
}

export default UserName;