class LoginPage {
	get usernameInput() {
		return $('#username');
	}
	get passwordInput() {
		return $('#password');
	}
	get loginButton() {
		return $('#loginButton');
	}

	async login(username: string, password: string) {
		await this.usernameInput.setValue(username);
		await this.passwordInput.setValue(password);
		await this.loginButton.click();
	}
}

export default new LoginPage();
