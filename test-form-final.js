import puppeteer from 'puppeteer';

async function testContactForm() {
  const browser = await puppeteer.launch({
    headless: false, // Show browser to see what's happening
    slowMo: 100 // Slow down actions
  });
  
  try {
    const page = await browser.newPage();
    
    console.log('🚀 Navigating to contact page...');
    await page.goto('https://distinctivepropertiesmn.com/contact', {
      waitUntil: 'networkidle2'
    });
    
    // Wait for form
    await page.waitForSelector('.contact-form', { visible: true });
    console.log('✅ Form loaded');
    
    // Fill form
    console.log('📝 Filling out form...');
    await page.type('input[name="name"]', 'Test Submission');
    await page.type('input[name="email"]', 'test@example.com');
    await page.type('input[name="phone"]', '555-0123');
    await page.type('input[name="propertyAddress"]', '123 Test St, Brainerd, MN');
    
    // Check first two services
    const checkboxes = await page.$$('input[type="checkbox"]');
    if (checkboxes.length >= 2) {
      await checkboxes[0].click();
      await checkboxes[1].click();
    }
    
    await page.type('textarea[name="message"]', 'This is a test submission from Puppeteer');
    
    console.log('📸 Taking screenshot...');
    await page.screenshot({ path: 'form-ready.png' });
    
    // Submit form
    console.log('🚀 Submitting form...');
    await page.click('button[type="submit"]');
    
    // Wait for any result
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check what happened
    const successMsg = await page.$('.form-success');
    const errorMsg = await page.$('.form-error');
    
    if (successMsg) {
      console.log('✅ SUCCESS! Form submitted');
      const text = await page.$eval('.form-success p', el => el.textContent);
      console.log('Message:', text);
    } else if (errorMsg) {
      console.log('❌ ERROR during submission');
      const text = await page.$eval('.form-error p', el => el.textContent);
      console.log('Error:', text);
    } else {
      console.log('⚠️  No clear success/error message');
    }
    
    await page.screenshot({ path: 'form-result.png' });
    
    console.log('\n📊 Check form submissions at:');
    console.log('https://app.netlify.com/sites/distinctive-properties-mn/forms');
    
  } catch (error) {
    console.error('Test error:', error.message);
  } finally {
    await browser.close();
  }
}

testContactForm();