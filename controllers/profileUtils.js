const errorMessage = require("../utils/messages/errorMessages");


//verification of phone number
function verifyPhoneNumber(phone_number) {
  let phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;

  if (phonePattern.test(phone_number)) {
    return errorMessage.PHONE_EVALUATED;
  }

  return null;
}

module.exports = { verifyPhoneNumber } 