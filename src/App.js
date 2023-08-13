import './App.css';
import {useState} from "react";
import UserName from "./UserName";
import {Button} from "@mui/material";
import UserCredentials from "./UserCredentials";
import {validateField} from "./ValidationUtil";

function App() {
    const [userProfile, setUserProfile] = useState({
        firstName: '',
        firstNameValidationMessage: null,
        lastName: '',
        lastNameValidationMessage: null,
        email: '',
        emailValidationMessage: null,
        password: '',
        passwordValidationMessage: null,
    })

    function handleUserProfileUpdate(event) {
        setUserProfile(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value,
            [event.target.id + 'ValidationMessage']: validateField(event.target.id, event.target.value)
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userProfile, 'userProfile')
    }

    function isSubmitionEnabled() {
        return userProfile.firstName.length !== 0 && userProfile.firstNameValidationMessage == null && userProfile.lastName.length !== 0 && userProfile.lastNameValidationMessage == null && userProfile.email.length > 0 && userProfile.emailValidationMessage == null && userProfile.password.length > 0 && userProfile.passwordValidationMessage == null;
    }

    return (<div className="App">
        <h2>Enter user information</h2>
        <form onSubmit={handleSubmit}>
            <UserName userProfile={userProfile} handleUserProfileUpdate={handleUserProfileUpdate}/>
            <UserCredentials userProfile={userProfile} handleUserProfileUpdate={handleUserProfileUpdate}/>
            <Button type='submit' variant="outlined" disabled={!isSubmitionEnabled()}>Submit</Button>
        </form>
    </div>);
}

export default App;
