// handle api request
const routes = require('./../routes'); // modular

// test
const request = require('supertest');

// another app because don't want to touch the original
const app = require('./setup');

// things about chat, need authenticate
// app.use('/api/v1/chat', routes.chat);

// get chat users
test(`get chat users`, (done) => {
  request(app)
    .get('/api/v1/chat/users')
    //
    .expect(200, done);
});

// get chat user
test(`get chat user`, (done) => {
  request(app)
    .get('/api/v1/chat/users/someFakeUserId')
    //
    .expect(200, done);
});

// post chat user
test(`post chat user`, (done) => {
  request(app)
    .post('/api/v1/chat/users/someFakeUserId')
    //
    .expect(200, done);
});
