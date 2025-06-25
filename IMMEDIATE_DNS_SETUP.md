# Immediate DNS Setup Instructions

The API key has limited permissions. Please follow these manual steps:

## Step 1: Login to GoDaddy
1. Go to https://www.godaddy.com/en-ph/venture/dashboard
2. Sign in with your account

## Step 2: Find Your Domain
1. Click on "Domains" in your account
2. Find **distinctivepropertiesmn.com**
3. Click "Manage" or "DNS" button

## Step 3: Add These DNS Records

**Delete any existing A or CNAME records for @ and www first**

Then add these exact records:

### A Record (Root Domain)
- **Type:** A
- **Name:** @
- **Points to:** 75.2.60.5
- **TTL:** 600

### CNAME Record (WWW)
- **Type:** CNAME  
- **Name:** www
- **Points to:** distinctive-properties-mn.netlify.app
- **TTL:** 600

## Step 4: Connect in Netlify
1. Go to: https://app.netlify.com/sites/distinctive-properties-mn/settings/domain
2. Click "Add custom domain"
3. Type: distinctivepropertiesmn.com
4. Click "Verify"

## That's it!

- SSL will be automatically configured by Netlify
- DNS changes typically take 1-2 hours to propagate
- Your site will be live at https://distinctivepropertiesmn.com

## Current Live Site
https://distinctive-properties-mn.netlify.app

## Need Different DNS Setup?

If you want to use GoDaddy's API, you may need to:
1. Create a new API key with full permissions
2. Select "Production" environment
3. Grant all domain management permissions