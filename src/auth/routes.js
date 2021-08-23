'use strict';

const express = require('express');
const authRouter = express.Router();


const { users } = require('./models/index.js');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js');




// signup

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user:{
        _id:userRecord.id,
        username:userRecord.username
      },
      token:userRecord.token

    }
     
    console.log('----------------------------------------------');
    console.log(userRecord)
    console.log('----------------------------------------------');
    res.status(201).json(output);
  } catch (e) {
    next(e.message);
  }
});

//signin

authRouter.post('/signin', basicAuth(users), (req, res,next) => {
  console.log('inside login route ppppppppppp');
  const user={
    user:req.user,
    token:req.user.token
  }
console.log(req.user)
  res.status(200).json(req.user);
});


//users

authRouter.get('/users', bearerAuth, async (req, res, next) => {
  const user = await users.findAll({});
  const list = user.map(user => user.username);
  res.status(200).json(list);
});

// secret

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
 await res.status(200).send("Welcome to the secret area!")
});


module.exports = authRouter;