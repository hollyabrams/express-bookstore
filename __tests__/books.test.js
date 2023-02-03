process.env.NODE_ENV = "test"

const request = require('supertest');

const app = require("../app");
const db = require("../db");

let book_isbn;

