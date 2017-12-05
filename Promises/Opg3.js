const express = require('express');
const app = express();
const PORT = 3000;
const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/photos?albumId=';
const parameters = ['1', '3', '5', '7', '9'];