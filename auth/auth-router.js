const router = require('express').Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, process.env.JWT_SECRET, options);

}

module.exports = router;
