// tests/index.test.js
const request = require('supertest');
const { app, server } = require('../src/index');

describe('Test the root path', () => {
    test('It should respond with "Hello World!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!, Carlos Manuel Cedeño Barrera 2022-0018!!');
    });
});

afterAll(() => {
    server.close();
});
