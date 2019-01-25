import { verifyToken } from '../libs/auth';

function _m(req, res, next) {
  // TODO: create a file with token-free URLs or pass somewhere
  let token = (req.method === 'POST') ? req.body.token : null

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Access denied."
    })
  }

  verifyToken(token)
    .then((decoded) => {
      req.user = decoded
      next()
    }).catch((err) => {
      res.status(401).json({
        success: false,
        message: "Access denied."
      })
    });
}

/// EXPORT //////////////////////////////////////////////
module.exports = _m;
/////////////////////////////////////////////////////////