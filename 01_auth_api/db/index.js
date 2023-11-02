const { Client } = require('pg');
const { AppError } = require('../utils/app-errors');
const bcrypt = require('bcrypt');
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const params = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USERNAME,
  password: DB_PASSWORD,
};

async function createTable() {
  const client = new Client(params);
  try {
    await client.connect();
    const createTableQuery = `
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        access_token VARCHAR(255) ,
        refresh_token VARCHAR(255) 
      )
    `;

    await client.query(createTableQuery);
    console.log('DB Ready to use');
  } catch (error) {
    throw new AppError({
      status: 500,
      message: 'Error database.',
    });
  } finally {
    await client.end();
  }
}

async function findOne({ email }) {
  const client = new Client(params);
  try {
    await client.connect();
    const getUserQuery = 'SELECT * FROM users WHERE email = $1;';
    const user = await client.query(getUserQuery, [email]);
    if (user.rows.length === 0) {
      return null;
    }

    return user.rows[0];
  } catch (error) {
    throw new AppError({
      status: 500,
      message: 'Error to find user',
    });
  } finally {
    await client.end();
  }
}
async function findById(id) {
  const client = new Client(params);
  try {
    await client.connect();
    const getUserQuery = 'SELECT * FROM users WHERE id = $1;';
    const user = await client.query(getUserQuery, [id]);

    if (user.rows.length === 0) {
      return null;
    }

    return user.rows[0];
  } catch (error) {
    throw new AppError({
      status: 500,
      message: 'Error to find user',
    });
  } finally {
    await client.end();
  }
}

async function createOne(userData) {
  const { email, password } = userData;
  const client = new Client(params);
  try {
    await client.connect();
    const createUserQuery = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
    `;

    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await client.query(createUserQuery, [email, hashPass]);

    if (newUser.rows.length === 0) {
      return null;
    }
    return newUser.rows[0];
  } catch (error) {
    throw new AppError({
      status: 500,
      message: 'Error creating new user',
    });
  } finally {
    await client.end();
  }
}

async function findByIdAndUpdate(id, updatedData) {
  const { email, password, access_token, refresh_token } = updatedData;

  const client = new Client(params);

  try {
    await client.connect();
    const updateQuery = `UPDATE users
      SET
        access_token = COALESCE($2, access_token),
        email = COALESCE($3, email),
        password = COALESCE($4, password),
        refresh_token = COALESCE($5, refresh_token)
      WHERE id = $1
      RETURNING *;`;

    const user = await client.query(updateQuery, [
      id,
      access_token,
      email,
      password,
      refresh_token,
    ]);

    if (user.rows.length === 0) {
      return null;
    }

    return user.rows[0];
  } catch (error) {
    throw new AppError({ status: 500, message: 'Error updating user data' });
  } finally {
    await client.end();
  }
}

module.exports = {
  createOne,
  findOne,
  findByIdAndUpdate,
  findById,
  createTable,
};
