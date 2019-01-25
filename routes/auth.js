const express = require("express");
let router = express.Router();
import { verifyToken } from '../middleware/auth'

// Middleware
router.all('*', verifyToken)

router.post("/", (req, res) => {
  // do stuff here
});

/// EXPORT //////////////////////////////////////////////
module.exports = router;
/////////////////////////////////////////////////////////
