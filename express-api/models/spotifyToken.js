/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import dotenv from 'dotenv';

import {
  Entity,
  Schema,
  Client
} from 'redis-om';

// Environment Configuration

dotenv.config();

const {
  REDIS_SCHEME,
  REDIS_HOST,
  REDIS_PORT
} = process.env;

// Definitions

class SpotifyToken extends Entity {
  get isValid() {
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

await client.open(`${REDIS_SCHEME}://${REDIS_HOST}:${REDIS_PORT}`);

const spotifyTokenRepository = await client.fetchRepository(schema);

// Exports

export default spotifyTokenRepository;