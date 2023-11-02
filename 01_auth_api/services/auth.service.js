const bcrypt = require('bcrypt');
const db = require('../db');
const jwt = require('jsonwebtoken');

const { NotAuthorizedError, ConflictError } = require('../utils/app-errors');
const { JWT_SECRET, ACCESS_TOKEN_TTL } = process.env;

const signUp = async (credentials) => {
  const { email, password } = credentials;
  const candidate = await db.findOne({ email });

  if (candidate) {
    throw new ConflictError('Email in use.');
  }

  const { id } = await db.createOne({ email, password });

  const access_token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_TTL,
  });

  const refresh_token = jwt.sign({ id }, JWT_SECRET);

  const updatedUser = await db.findByIdAndUpdate(id, {
    access_token,
    refresh_token,
  });

  return updatedUser;
};

const signIn = async (credentials) => {
  const { email, password } = credentials;

  const user = await db.findOne({ email });

  if (!user) {
    throw new NotAuthorizedError('Email or password is wrong');
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError('Email or password is wrong');
  }

  const access_token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_TTL,
  });

  const updatedUser = await db.findByIdAndUpdate(user.id, { access_token });
  return updatedUser;
};

module.exports = {
  signUp,
  signIn,
};
