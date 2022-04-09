const request = require('supertest');

const server = require('./server');

describe('the server', () => {
  describe('GET /', () => {

		xit('should run the testing env', () => {
			expect(process.env.DB_ENV).toBe('testing');
		})

		it('should return status code 200', () => {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.status).toBe(200);
				})
		})
	});
})