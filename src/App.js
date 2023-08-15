import './App.css';
import {useRef} from "react";
import UserName from "./UserName";
import {Button} from "@mui/material";
import UserCredentials from "./UserCredentials";
import {validateField} from "./ValidationUtil";

function App() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(firstNameRef.current.value, 'firstName')
        console.log(lastNameRef.current.value, 'lastName')
        console.log(emailRef.current.value, 'email')
        console.log(passwordRef.current.value, 'password')
    }
    const handleInput = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        let validationResult = validateField(fieldName, fieldValue);
        if (validationResult) {
            alert(validationResult)
        }
    }

    return (<div className="App">
        <h2>Enter user information</h2>
        <form onSubmit={handleSubmit}>
            <UserName firstNameRef={firstNameRef} lastNameRef={lastNameRef} validateInput={handleInput}/>
            <UserCredentials emailRef={emailRef} passwordRef={passwordRef} validateInput={handleInput}/>
            <Button type='submit' variant="outlined">Submit</Button>
        </form>
    </div>);
}

export default App;
