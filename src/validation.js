
function Validation(values) {
    const errors = {}
    const regexMail = /\S+@\S+\.\S+/;
    const regexPassword = /[a-zA-Z0-9][^a-zA-Z0-9]/;
    const regexPhone = /^\d{11,15}$/;

    if (!values.name) {
        errors.name = "Name Required"
    }
    else if (values.name.length < 3) {
        errors.name = "Password must contain at least 3 char..."
    }
    else if (!values.email) {
        errors.email = "Email Required"
    }
    else if (!regexMail.test(values.email)) {
        errors.email = "Incorrect Mail"
    }
    else if (!values.password) {
        errors.password = "Password Required"
    }
    else if (values.password.length < 8) {
        errors.password = "Password must contain at least 8 char..."
    }
    else if (!regexPassword.test(values.password)) {
        errors.password = "Password must contain a number, symbol, uppercase letter"
      }
    else if (!values.tel) {
        errors.tel = "Phone Required"
    }
    else if (!regexPhone.test(values.tel)) {
        errors.tel = "Incorrect Number"
    }

   return errors;
   
}
export default Validation