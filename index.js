const puppeteer = require('puppeteer'); //equals to puppeteer library for puppeteer. require means downloded libraries.

(async ()=>{
    const browser = await puppeteer.launch({
        headless:false //it doesn't show you the browser
    }); // create a browser and launch is a function
    const page = await browser.newPage(); //open a new blank page
    await page.goto('https://example.com/'); // Navigate the page to a URL.
    await page.screenshot({path: 'example.png'}); //take a screenshot of that page


    await browser.close();
})();