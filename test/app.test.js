const request = require('supertest');
const app = require('../index');

describe('Calculator API', () => {
    test('adds 2 + 3', async () => {
        const res = await request(app).get('/add/2/3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(5);
    });
});