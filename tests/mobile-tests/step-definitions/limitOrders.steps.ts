import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import LoginPage from '../pages/loginPage';
import TradingPage from '../pages/tradingPage';

// === Set up === //
Before(async () => {
	const capabilities = browser.capabilities as WebdriverIO.Capabilities;
	const platformName = capabilities.platformName;

	if (platformName === 'Android') {
		// Android-specific setup
	} else if (platformName === 'iOS') {
		// iOS-specific setup
	}
});

// ================ Limit Buy & Limit Sell ============= //
Given('I am a logged-in Plus customer', async () => {
	await LoginPage.login('testuser', 'password');
});

Given('I navigate to the trading page', async () => {
	await TradingPage.navigateTo();
});

When('I choose to place a {string} order', async (traderLocation: string) => {
	await TradingPage.placeOrder(traderLocation, '');
});

When('I set the share price to {string}', async (price: string) => {
	await TradingPage.placeOrder('', price);
});

When('I confirm the order', async () => {
	await TradingPage.isOrderConfirmed();
});

Then('the order should be placed successfully', async () => {
	await TradingPage.isOrderConfirmed();
});

// ================ Stop Loss ============= //

When('I choose to place a "Stop Loss" order', async function () {
	await TradingPage.chooseOrderType('Stop Loss');
});

When('I set the lower limit to {string}', async function (price: string) {
	await TradingPage.setLowerLimit(price);
});

Then('the stop loss order should be placed successfully', async function () {
	await TradingPage.verifyOrderConfirmation();
});

// === Tear down === //
After(async () => {
	const capabilities = browser.capabilities as WebdriverIO.Capabilities;
	const platformName = capabilities.platformName;

	if (platformName === 'Android') {
		// Android-specific setup
	} else if (platformName === 'iOS') {
		// iOS-specific setup
	}
});
