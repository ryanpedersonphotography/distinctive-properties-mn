import puppeteer from 'puppeteer';

async function testContactForm() {
  console.log('🚀 Starting contact form test...');
  
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless mode
    slowMo: 50 // Slow down actions to see what's happening
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });
    
    // Navigate to contact page
    console.log('📍 Navigating to contact page...');
    await page.goto('https://distinctivepropertiesmn.com/contact', {
      waitUntil: 'networkidle2'
    });
    
    // Wait for form to be visible - React form has class
    await page.waitForSelector('.contact-form', { visible: true, timeout: 30000 });
    console.log('✅ Contact form found');
    
    // Fill out the form
    console.log('📝 Filling out form...');
    
    // Name
    await page.type('input[name="name"]', 'Test User');
    
    // Email
    await page.type('input[name="email"]', 'test@example.com');
    
    // Phone
    await page.type('input[name="phone"]', '218-555-0123');
    
    // Property Address
    await page.type('input[name="propertyAddress"]', '123 Test Lake Rd, Brainerd, MN 56401');
    
    // Services - check multiple services
    const services = ['Real Estate Photography', 'Aerial/Drone Photography'];
    for (const service of services) {
      const checkbox = await page.$x(`//label[contains(text(), "${service}")]/input`);
      if (checkbox.length > 0) {
        await checkbox[0].click();
        console.log(`✓ Selected: ${service}`);
      }
    }
    
    // Preferred Date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    await page.type('input[name="preferredDate"]', dateStr);
    
    // Message
    await page.type('textarea[name="message"]', 'This is a test submission from Puppeteer. Testing the Netlify Forms integration for Distinctive Properties website.');
    
    console.log('✅ Form filled out');
    
    // Take screenshot before submission
    await page.screenshot({ 
      path: 'form-before-submit.png',
      fullPage: true 
    });
    console.log('📸 Screenshot saved: form-before-submit.png');
    
    // Submit the form
    console.log('🚀 Submitting form...');
    await page.click('button[type="submit"]');
    
    // Wait for success message
    await page.waitForSelector('.form-success', { 
      visible: true,
      timeout: 10000 
    });
    
    console.log('✅ Form submitted successfully!');
    
    // Take screenshot after submission
    await page.screenshot({ 
      path: 'form-after-submit.png',
      fullPage: true 
    });
    console.log('📸 Screenshot saved: form-after-submit.png');
    
    // Get success message text
    const successText = await page.$eval('.form-success p', el => el.textContent);
    console.log('✉️ Success message:', successText);
    
  } catch (error) {
    console.error('❌ Error during test:', error);
    
    // Take error screenshot
    const page = (await browser.pages())[0];
    if (page) {
      await page.screenshot({ 
        path: 'form-error.png',
        fullPage: true 
      });
      console.log('📸 Error screenshot saved: form-error.png');
    }
  } finally {
    // Wait a bit to see the result
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await browser.close();
    console.log('✅ Test completed');
  }
}

// Run the test
testContactForm().catch(console.error);