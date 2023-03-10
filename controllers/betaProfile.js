const { validatePhoneNumber } = require("./profileUtils");
const { pool } = require("../Configuration/db");
const { v4: uuid_v4 } = require("uuid");
const {
  httpStatusCodes,
  ApiError,
  AuraException,
} = require("../utils/auraUtils/AuraError");
const authQuery = require("../utils/SQL/SQLQuery");
const errorMessage = require("../utils/messages/errorMessages");
const Message = require("../utils/messages/messages");
const { AuraResponse } = require("../utils/auraUtils/Aura");

// exports.profile = async (req, res) => {
  //let user = await pool.query(`SELECT * FROM users WHERE phone = '+919360535027'`);
   
  //8, or 9
  //  res.status(200).json(lastname);

  //------------------------------------------------------------------

//   try {
//     // Extract user profile details from request body
//     const { firstname, lastname, phone, gender, dateofbirth } = req.body;
//     // Validation checks
    
//     // Inserting into DB
//     await pool.query('BEGIN');

//     const user_id = body.id;

//     console.log(user_id);
//     const values = [
//       user_id,
//       firstname,
//       lastname,
//       phone,
//       gender,
//       dateofbirth,
//       current_time,
//       current_time,
//     ];
//     await pool.query(authQuery.UPDATE_USER_PROFILE, values);

//     await pool.query('COMMIT');

//     // Return success response
//     console.log("User msg updated succesfully");
//     AuraResponse(res, httpStatusCodes.OK, Message.SUCCESS, successResponse);
//   } catch (er) {
//     console.log("3");
//     await pool.query('ROLLBACK');
//     console.log(er.message);
//     console.log("nope");
//     // Return error response
//     new AuraException(res, er, httpStatusCodes.BAD_REQUEST, er.message);
//   } finally {
//     console.log("API ended!");
//   }
// };


const updateUserProfile = require('./profileUtils');

exports.profile = async (req, res) => {
  let body = req.body;
  let current_time = new Date().getTime();
  console.log("1");

  try {
    const { firstname, lastname, phone, gender, dateofbirth } = req.body;
    const user_id = body.user_id; // assuming user ID is stored in body.id after authentication
    console.log("tried");
    await updateUserProfile(user_id, { firstname, lastname, phone, gender, dateofbirth });

    AuraResponse(res, httpStatusCodes.OK, Message.SUCCESS, successResponse);
  } catch (err) {
    console.error(`Error updating user profile: ${err.message}`);
    AuraResponse(res, httpStatusCodes.INTERNAL_SERVER_ERROR, Message.ERROR, err.message);
  }
};







