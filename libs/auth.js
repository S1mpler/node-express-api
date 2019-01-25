import jwt from 'jsonwebtoken';

export function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err || !decoded) return reject(err);

      resolve(decoded)
    });
  });
}

export function createToken(details) {
  const token = jwt.sign(details, process.env.JWT_SECRET);
  return token;
}

export default {
  verifyToken,
  createToken
}