// Manual form test using fetch API directly
async function testFormSubmission() {
  console.log('🚀 Testing form submission directly...');
  
  const formData = new URLSearchParams({
    'form-name': 'contact',
    'name': 'Test Submission',
    'email': 'test@example.com',
    'phone': '555-0123',
    'propertyAddress': '123 Test St, Brainerd, MN',
    'services': 'Real Estate Photography, Aerial/Drone Photography',
    'preferredDate': '2025-06-26',
    'message': 'This is a test submission to verify Netlify Forms is working correctly.',
    'bot-field': '' // honeypot field
  });

  try {
    const response = await fetch('https://distinctivepropertiesmn.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response OK:', response.ok);
    
    if (response.ok) {
      console.log('✅ Form submitted successfully!');
      console.log('📧 Check your Netlify dashboard for the submission');
      console.log('🔗 https://app.netlify.com/sites/distinctive-properties-mn/forms');
    } else {
      console.log('❌ Form submission failed');
      const text = await response.text();
      console.log('Response:', text.substring(0, 200));
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testFormSubmission();