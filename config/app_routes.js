const path = require('path');
const express = require('express');
const request = require('request');

require('dotenv').config()

module.exports = (app) => {
  app.use('/', express.static('public'));
  app.use('/images', express.static('public/static/images'));
  app.use('/css', express.static('public/static/css'));
  app.use('/js', express.static('public/static/js'));
  app.use('/fonts', express.static('public/static/fonts'));
  app.use('/static', express.static('public/static'));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/static/dist/index.html'));
    return;
  });
};

