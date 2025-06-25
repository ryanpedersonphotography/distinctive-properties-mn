import puppeteer from 'puppeteer';

async function testForm() {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    console.log('📍 Going to contact page...');
    
    await page.goto('https://distinctivepropertiesmn.com/contact', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });
    
    // Debug: log page title
    const title = await page.title();
    console.log('📄 Page title:', title);
    
    // Wait for React to render
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check if form exists
    const formExists = await page.$('.contact-form') !== null;
    console.log('📋 Form exists:', formExists);
    
    if (!formExists) {
      // Try to find any form
      const anyForm = await page.$('form');
      console.log('🔍 Any form found:', anyForm !== null);
      
      // Log page content for debugging
      const bodyText = await page.$eval('body', el => el.innerText);
      console.log('📝 Page content preview:', bodyText.substring(0, 200) + '...');
    } else {
      // Fill and submit form
      console.log('✅ Form found! Filling it out...');
      
      await page.type('input[name="name"]', 'Puppeteer Test');
      await page.type('input[name="email"]', 'test@puppeteer.com');
      await page.type('textarea[name="message"]', 'Automated test submission');
      
      // Submit
      await page.click('button[type="submit"]');
      
      // Wait for response
      await page.waitForSelector('.form-success, .form-error', { timeout: 10000 });
      
      const success = await page.$('.form-success');
      if (success) {
        console.log('✅ Form submitted successfully!');
        const msg = await page.$eval('.form-success', el => el.textContent);
        console.log('📧 Success message:', msg);
      } else {
        console.log('❌ Form submission failed');
        const error = await page.$eval('.form-error', el => el.textContent);
        console.log('⚠️ Error message:', error);
      }
    }
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
  } finally {
    await browser.close();
  }
}

testForm();