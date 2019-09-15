const router = require('express').Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
  .then(saved => {
    res.status(201).json(saved);
  })
  .catch(error => {
    res.status(500).json(error);
  })
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
  .first()
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        message: `Welcome ${user.username}!`,
      });
    } else {
      res.status(401).json({
        message: 'Invalid Credentials'
      })
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
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
