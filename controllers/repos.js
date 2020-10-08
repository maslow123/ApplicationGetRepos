'use strict';
const fetch = require('node-fetch');

const url = 'https://api.github.com';
exports.getRepos = async (req, res) => {
  const { username } = req.params;
  await fetch(`${url}/users/${username}/repos`, {
    method: 'GET',
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  })
};  