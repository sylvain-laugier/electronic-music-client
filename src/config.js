// this is where you set everything up

const config = {
  credentials: {
    password: process.env.REACT_APP_CLIENT_CRED,
    key: process.env.REACT_APP_KEY_CRYPT,
  },
};

module.exports = config;
