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
	await page.setViewport({ width: 1280, height: 800 });
	await page.goto('http://localhost:9527');
	await page.focus('#count');
	await page.type('#count', 'admin');
	await page.type('#password', '123456');
	await page.click('#login-btn');
	await page.waitForNavigation();
	console.log('btn');
	await page.goto('http://localhost:9527/#/marketing/activityManagement');
	// await page.waitForNavigation();
	// await page.waitForTimeout(2000);

	try {
		console.log('11');
		const btn = await page.waitForSelector('#adda');
		console.log('oooo', btn);
		await btn.click();
	} catch (err) {
		console.log('err', err);
	}
})();
