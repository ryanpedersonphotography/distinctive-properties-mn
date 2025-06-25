import puppeteer from 'puppeteer';

async function testContactForm() {
  console.log('🚀 Testing contact form with dummy data...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    // Navigate to contact page
    console.log('📍 Navigating to: https://distinctivepropertiesmn.com/contact');
    await page.goto('https://distinctivepropertiesmn.com/contact', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for form to load
    await page.waitForSelector('.contact-form', { visible: true });
    console.log('✅ Contact form loaded\n');
    
    // Fill out the form with dummy data
    console.log('📝 Filling form with dummy data:');
    
    // Name
    await page.type('input[name="name"]', 'John Doe');
    console.log('   ✓ Name: John Doe');
    
    // Email
    await page.type('input[name="email"]', 'john.doe@example.com');
    console.log('   ✓ Email: john.doe@example.com');
    
    // Phone
    await page.type('input[name="phone"]', '218-555-1234');
    console.log('   ✓ Phone: 218-555-1234');
    
    // Property Address
    await page.type('input[name="propertyAddress"]', '456 Lakeshore Drive, Brainerd, MN 56401');
    console.log('   ✓ Property: 456 Lakeshore Drive, Brainerd, MN 56401');
    
    // Select services
    const services = ['Real Estate Photography', 'Aerial/Drone Photography', '3D Matterport Tours'];
    for (const service of services) {
      const labels = await page.$$('label.checkbox-label');
      for (const label of labels) {
        const text = await page.evaluate(el => el.textContent, label);
        if (text.includes(service)) {
          const checkbox = await label.$('input[type="checkbox"]');
          if (checkbox) {
            await checkbox.click();
            console.log(`   ✓ Service: ${service}`);
            break;
          }
        }
      }
    }
    
    // Preferred Date (3 days from now)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 3);
    const dateStr = futureDate.toISOString().split('T')[0];
    await page.type('input[name="preferredDate"]', dateStr);
    console.log(`   ✓ Preferred Date: ${dateStr}`);
    
    // Message
    const message = 'I have a beautiful lakefront property that I need photographed for listing. The property features 4 bedrooms, stunning lake views, and a private dock. I would like both interior and exterior shots, as well as aerial footage to showcase the waterfront location.';
    await page.type('textarea[name="message"]', message);
    console.log('   ✓ Message: [Property details provided]');
    
    // Take screenshot before submission
    await page.screenshot({ path: 'test-form-filled.png' });
    console.log('\n📸 Screenshot saved: test-form-filled.png');
    
    // Submit the form
    console.log('\n🚀 Submitting form...');
    await Promise.all([
      page.waitForResponse(response => response.url().includes('distinctivepropertiesmn.com') && response.status() === 200, { timeout: 15000 }),
      page.click('button[type="submit"]')
    ]);
    
    // Wait a bit for the success message
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check for success message
    const successElement = await page.$('.form-success');
    if (successElement) {
      const successText = await page.$eval('.form-success p', el => el.textContent);
      console.log('\n✅ SUCCESS! Form submitted successfully');
      console.log(`📧 Message: "${successText}"`);
      
      // Take screenshot of success
      await page.screenshot({ path: 'test-form-success.png' });
      console.log('📸 Success screenshot saved: test-form-success.png');
    } else {
      // Check for error
      const errorElement = await page.$('.form-error');
      if (errorElement) {
        const errorText = await page.$eval('.form-error p', el => el.textContent);
        console.log('\n❌ ERROR: Form submission failed');
        console.log(`⚠️  Message: "${errorText}"`);
      } else {
        console.log('\n⚠️  No success or error message found');
      }
    }
    
    console.log('\n📊 Form submission should now appear in:');
    console.log('   https://app.netlify.com/sites/distinctive-properties-mn/forms');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    
    // Take error screenshot
    const pages = await browser.pages();
    if (pages.length > 0) {
      await pages[0].screenshot({ path: 'test-form-error.png' });
      console.log('📸 Error screenshot saved: test-form-error.png');
    }
  } finally {
    await browser.close();
    console.log('\n✅ Test completed');
  }
}

// Run the test
console.log('Distinctive Properties MN - Contact Form Test');
console.log('============================================\n');
testContactForm();