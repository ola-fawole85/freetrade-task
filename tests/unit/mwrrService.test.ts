import mwrrService from '../../src/services';
import user from '../../src/user';

describe('MWRR Service', () => {
	it('should calculate the correct MWRR for a given user', () => {
		const userID: string = '123';
		const userData = user.getUserData(userID);
		const mwrr = mwrrService.calculateMWRR(userData);
		expect(mwrr).toEqual({ week: -2, month: 5, year: 30 });
	});
});
