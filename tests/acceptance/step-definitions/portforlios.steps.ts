// import { Given, When, Then } from '@wdio/cucumber-framework';
// import { expect } from '@wdio/globals';

import axios from 'axios';
import { AxiosResponse } from 'axios';

let userId: string | undefined = '';
let response: AxiosResponse | undefined;

Given('the user has a valid user ID', () => {
	userId = 'valid_user_id';
});

Given('the user has an invalid user ID', () => {
	userId = 'invalid_user_id';
});

When('the user makes a GET request to /api/mwrr with a valid user ID', async () => {
	try {
		response = await axios.get(`http://api/get_mwrr?user_id=${userId}`);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			response = error.response;
		} else {
			throw error;
		}
	}
});

When(
	'the user makes a GET request to /api/mwrr with an invalid user ID',
	async () => {
		try {
			response = await axios.get(`http://api/get_mwrr?user_id=${userId}`);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				response = error.response;
			} else {
				throw error;
			}
		}
	}
);

When('the user makes a GET request to /api/mwrr without a user ID', async () => {
	try {
		response = await axios.get('http://api/get_mwrr');
	} catch (error) {
		if (axios.isAxiosError(error)) {
			response = error.response;
		} else {
			throw error;
		}
	}
});

Then('the response status code should be {int}', (statusCode: number) => {
	expect(response?.status).toBe(statusCode);
});

Then('the response should contain the user ID', () => {
	expect(response?.data).toHaveProperty('user_id', userId);
});

Then(
	'the response should contain MWRR values for the last week, last month, and last year',
	() => {
		expect(response?.data).toHaveProperty('mwrr_last_week');
		expect(response?.data).toHaveProperty('mwrr_last_month');
		expect(response?.data).toHaveProperty('mwrr_last_year');
	}
);

Then('the response should contain an error message', () => {
	expect(response?.data).toHaveProperty('error');
});
