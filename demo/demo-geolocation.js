const {webkit, chromium, firefox, devices} = require('playwright'); 

(async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext({
        geolocation: {
            latitude: 51.508076,
            longitude: -0.0993827,
          },
          permissions: ['geolocation'],
          locale: 'de-DE',
    });                                                                             
    const page = await context.newPage();                
    await page.goto('https://maps.google.com'); 
  } )();