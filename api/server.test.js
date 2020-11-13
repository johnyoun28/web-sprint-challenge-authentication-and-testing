const request = require('supertest')
const server = require('./server.js')
const db = require('../database/dbConfig')


beforeEach(async () => {
    await db('users').truncate()
  })

describe('register endpoint', () => {
    it('works', () => {
        return request(server).post('/api/auth/register')
        .expect('Content-Type', /json/)
    })

    
})


describe('login endpoint', () => {
    it('works', () => {
        return request(server).post('/api/auth/register')
        .expect('Content-Type', /json/)
    })

    
})
