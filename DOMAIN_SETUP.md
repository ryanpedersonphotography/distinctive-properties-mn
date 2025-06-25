# Domain Setup Instructions for distinctivepropertiesmn.com

## Option 1: Manual Setup (Recommended for Security)

### Step 1: Login to GoDaddy
1. Go to https://www.godaddy.com
2. Sign in to your account
3. Go to "My Products" → "Domains"
4. Find **distinctivepropertiesmn.com** and click "DNS"

### Step 2: Update DNS Records
Delete any existing A or CNAME records for @ and www, then add:

**A Record (for root domain):**
- Type: A
- Name: @
- Value: 75.2.60.5
- TTL: 600 seconds

**CNAME Record (for www):**
- Type: CNAME
- Name: www
- Value: distinctive-properties-mn.netlify.app
- TTL: 600 seconds

### Step 3: Connect Domain in Netlify
1. Go to https://app.netlify.com/sites/distinctive-properties-mn/settings/domain
2. Click "Add custom domain"
3. Enter: distinctivepropertiesmn.com
4. Click "Verify"
5. Netlify will automatically set up SSL

## Option 2: Using the API Script

**IMPORTANT**: Keep your API credentials secure!

1. Set environment variables (do not save in any file):
   ```bash
   export GODADDY_KEY='your_key_here'
   export GODADDY_SECRET='your_secret_here'
   ```

2. Run the setup script:
   ```bash
   ./setup-godaddy-domain.sh
   ```

3. Follow the Netlify steps shown in the script output

## Verification

After setup, verify your DNS is working:
```bash
# Check root domain
dig distinctivepropertiesmn.com

# Check www subdomain
dig www.distinctivepropertiesmn.com

# Check in browser (may take 1-2 hours)
open https://distinctivepropertiesmn.com
```

## Troubleshooting

- **SSL Certificate**: Netlify automatically provisions Let's Encrypt SSL
- **Propagation Time**: DNS changes can take 1-48 hours (usually 1-2 hours)
- **Mixed Content**: Ensure all resources use HTTPS after domain is connected

## Current Status
- Netlify Site: https://distinctive-properties-mn.netlify.app ✅
- Custom Domain: distinctivepropertiesmn.com (pending setup)
- SSL: Will be auto-configured by Netlify