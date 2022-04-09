const request = require('supertest');

const auth = require('./auth-router');

const server = require('../api/server.js');


describe('Authentication', () => {
  
    describe('GET /api/jokes', () => {

		it('should return a list of jokes to a logged in user', () => {
            return request(server)
                .get('api/jokes')
                .then(res => {
                    expect(res.status).toBe(200);
                    expect(res.type).toBe('application/json');
                    expect(res.body.length).toBe(0);
                })
		})
		xit('should return status code 401 for unauthenticated user', () => {
			return request(auth)
				.get('/')
				.then(res => {
					expect(res.status).toBe(401);
				})
		})
	});
})
