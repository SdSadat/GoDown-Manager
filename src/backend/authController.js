const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: bcrypt.hashSync('user@example.com', 8) 
  }
];


exports.login = (req, res) => {
  const { email, password } = req.body;


  const user = users.find(u => u.email === email);

  if (!user){
    console.log('User not found');
     return res.status(404).json({ message: 'User not found' });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid){
    console.log('Invalid password');
    return res.status(401).json({ auth: false, token: null });
  }

  console.log('User authenticated');

  const token = jwt.sign({ id: user.id }, 'myKey', {
    expiresIn: 86400 
  });

  res.status(200).json({ auth: true, token });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, 'myKey', (err, decoded) => {
    if (err){ 
      console.log('Failed to authenticate token', err);
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    };
    console.log('token', token);
    req.userId = decoded.id;
    next();
  });
};
