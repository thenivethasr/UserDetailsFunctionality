const { pool } = require("../Configuration/db");
const { getAsBoolean, AuraMessage } = require("../utils/auraUtils/Aura");
const errorMessage = require("../utils/messages/errorMessages");
const profileQuery = require("../utils/SQL/SQLQuery");
const Message = require("../utils/messages/messages");
const AuraConstants = require("../utils/auraUtils/AuraConstants");
const { httpStatusCodes, ApiError } = require("../utils/auraUtils/AuraError");

function updateUserProfile(userid, [firstName, lastName, gender, address, phone]) {
  // Retrieve the user's existing profile from the database
  const user = getUserById(userid);
  console.log("!");
  console.log(user);
  // Update the user's profile with the new information
 
  if (firstName) 
  {
    user.firstName = firstName;
  }
  if (lastName) 
  {
    user.lastName = lastName;
  }
  if (gender) 
  {
    user.gender = gender;
  }
  if (address) 
  {
    user.address = address;
  }
  if (phone)
  {
    user.phone = phone;
  }
 
  return user;

} 


async function getUserById(userid)
{
    let user = await pool.query(profileQuery.GET_USER_PROFILE, [userid]);
    return new Promise((resolve, reject) => resolve(user.rowCount !== 0 ? user.rows[0].userid : null));
}





// async function updateUserProfile(user_id, userData) {
//   const { firstname, lastname, phone, gender, dateofbirth } = userData;

//   if (!firstname || !lastname || !phone || !gender || !dateofbirth) {
//     throw new Error("Missing required fields");
//   }

  
//   const updateQuery = `UPDATE users SET firstname = $1, lastname = $2, phone = $3, gender = $4, dateofbirth = $5 WHERE id = $6`;
//   const insertQuery = `INSERT INTO user_profile_updates (user_id, firstname, lastname, phone, gender, dateofbirth) VALUES ($1, $2, $3, $4, $5, $6)`;

//   try {
//     await pool.query(updateQuery, [firstname, lastname, phone, gender, dateofbirth, user_id]);
//     await pool.query(insertQuery, [user_id, firstname, lastname, phone, gender, dateofbirth]);
//     console.log(`User profile updated successfully for user with ID: ${user_id}`);
//   } catch (err) {
//     console.error(`Error updating user profile for user with ID ${user_id}: ${err.message}`);
//     throw err;
//   }
// }

module.exports = updateUserProfile;




