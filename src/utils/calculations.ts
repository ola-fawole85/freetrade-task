import request from 'supertest';
import app from '../../src/api';

describe('MWRR API', () => {
	it('should return the correct MWRR for a user', async () => {
		const userID: string = '123';
		const response = await request(app).get(`/mwrr/${userID}`);
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual({ week: -2, month: 5, year: 30 });
	});
});
