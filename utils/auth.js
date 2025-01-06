const { verify } = require("jsonwebtoken");

function verifyToken(token, secretKey) {
  try {
    return verify(token, secretKey);
  } catch (error) {
    return false;
  }
}

export { verifyToken };
