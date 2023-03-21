const {webkit, chromium, firefox} = require('playwright');

(async () => {
    for (const browserType of [webkit, firefox, chromium]) {
      const browser = await browserType.launch();         // запуск каждого браузера
      const page = await browser.newPage();                 // откроем страницу
      await page.goto('https://github.com/microsoft/playwright');  // данного сайта
      await page.screenshot({                                   
        path: `screenshot-${browserType.name()}.png`,  // сохраняем скриншот 
      });
      await browser.close();                                         // закрываем браузер 
      console.log('success: ' + browserType.name()); // чтобы отследить прогресс
    };
  } )();