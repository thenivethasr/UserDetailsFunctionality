const { pool } = require("../Configuration/db");
const { getAsBoolean, AuraMessage, SqlQuery } = require("../utils/auraUtils/Aura");
const errorMessage = require("../utils/messages/errorMessages");
const profileQuery = require("../utils/SQL/SQLQuery");
const Message = require("../utils/messages/messages");
const AuraConstants = require("../utils/auraUtils/AuraConstants");
const { httpStatusCodes, ApiError, AuraException } = require("../utils/auraUtils/AuraError");
const updateUserProfile = require('./profileUtils');
const { AuraResponse } = require("../utils/auraUtils/Aura");


exports.profile = async (req, res) => {
  let body = req.body;
  let phone = body.phone;
  let firstname = body.firstname;
  let lastname = body.lastname;
  let gender = body.gender;
  let dateofbirth = body.dateofbirth;
  let userid = body.userid;

  let current_time = new Date().getTime();
  console.log(lastname);

try {
 // Retrieve the user profile
    const userProfile = await pool.query(profileQuery.GET_USER_PROFILE, [userid]);

  //Update the user profile
    if (userProfile.rows.length > 0)
    {
    const { userid } = userProfile.rows[0];
  //  Replace the placeholders with the actual values 

    await pool.query(profileQuery.UPDATE_USER_PROFILE, [userid, firstname, lastname, phone, gender]);
    console.log('User profile updated successfully');
    AuraResponse(res, httpStatusCodes.OK, Message.SUCCESS);
   } 
   else 
   {
    console.log('User profile not found');
    AuraResponse(res, httpStatusCodes.NOT_FOUND, Message.NOT_FOUND);
   }
 } 
  catch (err) 
  { 
  await pool.query('ROLLBACK');
  console.error(err.message);
  new AuraException(res, err, httpStatusCodes.BAD_REQUEST, err.message);
  }
   finally 
  {
  console.log("API Ended");
  }
}

//-----------------------------------------------------Get the user profile using userid that is been provided--------------------------

exports.getProfile = async (req, res) => 
{
  try 
  {
  let body = req.body;
  let userid = body.userid;

  var result = await pool.query(profileQuery.GET_USER_PROFILE, [userid]);
  //console.log(result);
  console.log("Data retrived using userid");
  AuraResponse(res, httpStatusCodes.OK, Message.SUCCESS, result);
  } 
  catch(err)
  {
    console.log(err.message);
    new AuraException(res, err, httpStatusCodes.BAD_REQUEST, err.message);
  } 
  finally 
  {
    console.log("API Ended");
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------