

const profileQuery = 
{
    GET_USER_PROFILE:   `SELECT * FROM users WHERE userid = $1 `,
    UPDATE_USER_PROFILE: `UPDATE users SET firstname = $2, lastname = $3, phone = $4, gender = $5 WHERE userid = $1;`,
    //CREATE_USER_PROFILE: `INSERT INTO users (userid, firstname, lastname, phone, gender, dateofbirth, createdat, updatedat) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
}

module.exports = profileQuery;

//    GET_USER:  `SELECT * FROM users WHERE phone = $1 ;`,

