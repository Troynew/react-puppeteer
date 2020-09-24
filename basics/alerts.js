/**
 * @name alerts
 *
 * @desc Create an alert dialog and close it again.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
 */
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('http://192.168.43.88:8000/#/claim');
	await page.focus('#autoencoder');
	// await page.keyboard.type('admin');
	// await page.focus('password');
	// await page.keyboard.type('123456');
	await page.type('#autoencoder', 'puppeteer');
})();
