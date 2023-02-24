
// // const { verifyPhoneNumber } = require("./profileUtils");

// // exports.profile = async (req, res) => {
// //     let body = req.body;
// //     let phone_number = body.phone_no;
// //      console.log(phone_number);
// //     try 
// //     { 
// //          if (verifyPhoneNumber(phone_number))
// //          {
// //            console.log('Phone number is correctly formatted');
// //          } else 
// //          {
// //            console.log('Phone number is not correctly formatted');
// //          }
// //     }
// //     catch 
// //     {
// //         console.log('Phone number is not correctly formatted');
// //     }
// // }




// //const express = require('express');
// //const router = express.Router();
// console.log("hey")

// router.get('/profile', (req, res) => {
//   res.send('This is an example route');
// });

// module.exports = router;
const {pool} = require("../Configuration/db");


exports.profile = async (req, res) => {
   //let user = await pool.query(`SELECT * FROM users WHERE phone = '+919360535027'`);
   let body = req.body;
   let userid = body.userid;
   
   console.log(userid);
   res.status(200).json(user);
}