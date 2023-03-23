const {webkit, chromium, firefox, devices} = require('playwright'); 

(async () => {
    const browser = await chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();                                                                          
    const page = await context.newPage();
    page.on('frameattached', frame => console.log('frames: ' + page.frames().length)); 
    page.on('framedetached', frame => console.log('frames: ' + page.frames().length));    
    page.on('request', request => console.log(request.method() + ' ' +  request.url()));   
    page.on('response', response => console.log(response.status() + ' ' +  response.url()))    
    page.route('**/*', route => {                               // перехват всех событий
        if (route.request().frame().parentFrame())    // если у запроса есть фрейм 
          route.abort();                                               // не будем пускать рекламные блоки во фреймах
        else
          route.continue();                                        // иначе разрешаем продолжиться
      });         
    await page.goto('https://theverge.com'); 
    const page2 = await context.newPage();
    await page2.goto('https://bbc.com');
  })();