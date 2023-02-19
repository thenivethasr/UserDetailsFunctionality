import jwt from "jsonwebtoken";

const JWT_SECRET = `Something__something1234`

export const signJWT = (payload={},expiry='67h')=>{
    try {
        const token = jwt.sign(payload, JWT_SECRET, {
          expiresIn: expiry,
        });
        return token;
    } catch (error) {
         return null 
    }
}

export const verifyJWT = (token) => {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;  
  } catch (error) {
    console.log(error)
  }
};

