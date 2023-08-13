export const validateField = (fieldName, value) => {
    var result;
    switch (fieldName) {
        case 'firstName' :
        case 'lastName' :
            var validLength = value.length >= 2 && value.length <= 10;
            var validContent = /^[a-zA-Z]+$/.test(value);
            return validLength && validContent ? null : 'Wrong ' + fieldName
            break;
        case 'email' :
            var validContent = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
            return validContent ? null : 'Wrong ' + fieldName
            break;
        case 'password' :
            var validContent = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(value);
            return validContent ? null : 'Wrong ' + fieldName
            break;
        default:
            return result;
    }
}