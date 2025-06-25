import puppeteer from 'puppeteer';

(async () => {
  console.log('Testing contact form with realistic data...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to contact page
    await page.goto('https://distinctivepropertiesmn.com/contact', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    console.log('📄 Page loaded: Contact form');
    
    // Wait for form
    await page.waitForSelector('form[name="contact"]', { timeout: 10000 });
    
    // Fill with realistic data
    const testData = {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(218) 555-7890',
      address: '4567 Lakeshore Drive, Nisswa, MN 56468',
      message: 'I need professional photos for my lakefront property listing. The home is 3,500 sq ft with beautiful lake views. Looking for both interior/exterior photos and drone footage. Available next week Tuesday-Thursday.'
    };
    
    console.log('✍️  Filling form with:');
    console.log(`   Name: ${testData.name}`);
    console.log(`   Email: ${testData.email}`);
    console.log(`   Phone: ${testData.phone}`);
    console.log(`   Property: ${testData.address}`);
    
    await page.type('#name', testData.name);
    await page.type('#email', testData.email);
    await page.type('#phone', testData.phone);
    await page.type('#propertyAddress', testData.address);
    
    // Select multiple services
    const serviceLabels = await page.$$eval('.checkbox-label', labels => 
      labels.map(label => label.textContent.trim())
    );
    
    console.log('\n📸 Selecting services:');
    // Click Real Estate Photography and Aerial/Drone
    const checkboxes = await page.$$('.checkbox-label input[type="checkbox"]');
    await checkboxes[0].click(); // Real Estate Photography
    await checkboxes[2].click(); // Aerial/Drone
    console.log('   ✓ Real Estate Photography');
    console.log('   ✓ Aerial/Drone Photography');
    
    // Set date to next week
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const dateStr = nextWeek.toISOString().split('T')[0];
    await page.type('#preferredDate', dateStr);
    console.log(`   📅 Preferred date: ${dateStr}`);
    
    await page.type('#message', testData.message);
    
    console.log('\n📤 Submitting form...');
    
    // Submit
    await page.click('button[type="submit"]');
    
    // Wait for response
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check result
    const successMessage = await page.$('.form-success');
    const errorMessage = await page.$('.form-error');
    
    if (successMessage) {
      const text = await page.evaluate(el => el.textContent, successMessage);
      console.log(`\n✅ SUCCESS: ${text}`);
      console.log('\n📊 Form submission stored in Netlify');
      console.log('   View at: https://app.netlify.com/sites/distinctive-properties-mn/forms');
      console.log('\n📧 Email notification will be sent to: rpederson@gmail.com');
      console.log('   (if configured in Netlify dashboard)');
    } else if (errorMessage) {
      const text = await page.evaluate(el => el.textContent, errorMessage);
      console.log(`\n❌ ERROR: ${text}`);
    } else {
      console.log('\n⚠️  No clear response message found');
    }
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();