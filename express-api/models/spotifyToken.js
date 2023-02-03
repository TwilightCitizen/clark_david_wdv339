/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

const {
  Entity,
  Schema,
  Client
} = require('redis-om');

// Definitions

class SpotifyToken extends Entity {
  get isValid() {
    console.log(this.expires_in);
    console.log(new Date().getTime());
    return this.expires_in > new Date().getTime();
  }
}

const schema = new Schema(SpotifyToken, {
  access_token: { type: 'string' },
  token_type: { type: 'string' },
  expires_in: { type: 'number' },
  refresh_token: { type: 'string' },
});

const client = new Client();

// Exports
module.exports = client
  .open('redis://127.0.0.1:6379')
  .then(client => client.fetchRepository(schema));