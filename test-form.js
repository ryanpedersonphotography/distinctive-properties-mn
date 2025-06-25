import puppeteer from 'puppeteer';

(async () => {
  console.log('Testing contact form on https://distinctivepropertiesmn.com...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Enable request interception to log form submissions
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.method() === 'POST' && request.url().includes('distinctivepropertiesmn.com')) {
        console.log('Form submission detected:');
        console.log('URL:', request.url());
        console.log('Data:', request.postData());
      }
      request.continue();
    });
    
    // Navigate to contact page
    await page.goto('https://distinctivepropertiesmn.com/contact', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    console.log('Page loaded successfully');
    
    // Wait for form to be visible
    await page.waitForSelector('form[name="contact"]', { timeout: 10000 });
    console.log('Form found');
    
    // Fill out the form
    await page.type('#name', 'Test User');
    await page.type('#email', 'test@example.com');
    await page.type('#phone', '555-0123');
    await page.type('#propertyAddress', '123 Test St, Brainerd, MN');
    
    // Check services
    const checkboxes = await page.$$('input[type="checkbox"]');
    if (checkboxes.length > 0) {
      await checkboxes[0].click();
      console.log('Selected first service');
    }
    
    await page.type('#preferredDate', '2025-02-01');
    await page.type('#message', 'This is a test submission from Puppeteer');
    
    console.log('Form filled out');
    
    // Submit the form
    await page.click('button[type="submit"]');
    console.log('Form submitted');
    
    // Wait for response
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check for success message
    const successMessage = await page.$('.form-success');
    const errorMessage = await page.$('.form-error');
    
    if (successMessage) {
      const text = await page.evaluate(el => el.textContent, successMessage);
      console.log('✅ Success:', text);
    } else if (errorMessage) {
      const text = await page.evaluate(el => el.textContent, errorMessage);
      console.log('❌ Error:', text);
    } else {
      console.log('⚠️ No clear success or error message found');
    }
    
    // Check Netlify Forms dashboard
    console.log('\n📊 Check form submissions at:');
    console.log('https://app.netlify.com/sites/distinctive-properties-mn/forms');
    
  } catch (error) {
    console.error('Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();