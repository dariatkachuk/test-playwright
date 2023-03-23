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
      colorScheme: 'dark',
    });                                                                             
    const page = await context.newPage();                
    await page.goto('https://overreacted.io'); 
    await page.waitForTimeout(1000);                    // чтобы было нагляднее переключение
    await page.emulateMedia({                            // переключаем на светлую тему
      colorScheme: 'light',
    });
  } )();