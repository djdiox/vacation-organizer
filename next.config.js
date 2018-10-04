const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
module.exports = {
  ...withTypescript(withSass()),
  serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    mySecret: process.env.MY_SECRET // Pass through env variables
  }
};