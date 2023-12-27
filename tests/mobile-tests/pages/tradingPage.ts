class TradingPage {
	get tradingPageLink() {
		return $('#tradingPageLink');
	}
	get sharePriceInput() {
		return $('#sharePriceInput');
	}
	get confirmOrderButton() {
		return $('#confirmOrderButton');
	}
	get orderConfirmation() {
		return $('#orderConfirmation');
	}

	get stopLossOrderTypeButton() {
		return $('~stopLossOrderType');
	}
	get lowerLimitInput() {
		return $('~lowerLimitInput');
	}
	get orderConfirmationMessage() {
		return $('~orderConfirmationMessage');
	}

	async navigateTo() {
		await this.tradingPageLink.click();
	}

	async placeOrder(orderType: string, price: string) {
		await $(`#orderType-${orderType}`).click();
		await this.sharePriceInput.setValue(price);
		await this.confirmOrderButton.click();
	}

	async confirmOrder() {
		await this.confirmOrderButton.click();
	}

	async verifyOrderConfirmation() {
		await expect(this.orderConfirmationMessage).toBeDisplayed();
	}

	async isOrderConfirmed() {
		await expect(this.orderConfirmation).toBeDisplayed();
	}

	async setLowerLimit(price: string) {
		await this.lowerLimitInput.setValue(price);
	}

	async chooseOrderType(orderType: string) {
		if (orderType === 'Stop Loss') {
			await this.stopLossOrderTypeButton.click();
		}
	}
}

export default new TradingPage();
