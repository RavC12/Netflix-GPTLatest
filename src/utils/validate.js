export const checkValidData = (email, password) => {
// const isNameValid = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(name);
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


// if(!isNameValid) return "Full Name is not valid";
if(!isEmailValid) return "Email is not valid";
if(!isPasswordValid) return "Password is not valid";


return null;     // if email and password is valid
}