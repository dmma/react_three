function UserName({firstNameRef, lastNameRef, validateInput}) {
    return (
        <div>
            <input type='text' name='firstName' ref={firstNameRef} onBlur={validateInput}/>
            <input type='text' name='lastName' ref={lastNameRef} onBlur={validateInput}/>
        </div>
    );
}

export default UserName;