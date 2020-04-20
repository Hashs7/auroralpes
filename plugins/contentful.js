
/*
// use default environment config for convenience
// these will be set via 'env' property in nuxt.config.js

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
*/

// require('dotenv').config();
const contentful = require('contentful');

/* -------------------- Module -------------------- */
const client = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
});

export default client;
