const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).send('User already exists');
    }

    user = new User({ username, password, role });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).send({ token });
  } catch (error) {
    res.status(500).send('Error in Saving');
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User Not Exist');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send('Incorrect Password!');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
