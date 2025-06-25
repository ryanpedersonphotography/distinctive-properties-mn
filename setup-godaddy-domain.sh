#!/bin/zsh

# GoDaddy Domain Setup for Netlify
# This script helps configure DNS records for your domain

echo "GoDaddy Domain Configuration for Netlify"
echo "========================================"
echo ""
echo "SECURITY NOTICE: Never share your API credentials!"
echo ""

# Domain to configure
DOMAIN="distinctivepropertiesmn.com"

# Netlify site details
NETLIFY_SUBDOMAIN="distinctive-properties-mn"
NETLIFY_DOMAIN="${NETLIFY_SUBDOMAIN}.netlify.app"

echo "Configuring domain: $DOMAIN"
echo "Pointing to Netlify: $NETLIFY_DOMAIN"
echo ""

# Check if credentials are set
if [ -z "$GODADDY_KEY" ] || [ -z "$GODADDY_SECRET" ]; then
    echo "ERROR: GoDaddy API credentials not found in environment"
    echo ""
    echo "To use this script securely:"
    echo "1. Export your credentials (DO NOT commit these to git!):"
    echo "   export GODADDY_KEY='your_key_here'"
    echo "   export GODADDY_SECRET='your_secret_here'"
    echo ""
    echo "2. Then run this script again"
    exit 1
fi

# GoDaddy API endpoint
API_BASE="https://api.godaddy.com/v1/domains"

# Function to make API calls
godaddy_api() {
    local method=$1
    local endpoint=$2
    local data=$3
    
    curl -s -X "$method" \
        -H "Authorization: sso-key ${GODADDY_KEY}:${GODADDY_SECRET}" \
        -H "Content-Type: application/json" \
        "${API_BASE}${endpoint}" \
        ${data:+-d "$data"}
}

# Check if domain exists
echo "Checking domain status..."
DOMAIN_INFO=$(godaddy_api GET "/${DOMAIN}")

if [ -z "$DOMAIN_INFO" ]; then
    echo "ERROR: Could not retrieve domain information"
    exit 1
fi

echo "Domain found!"
echo ""

# DNS records for Netlify
echo "Setting up DNS records for Netlify..."

# Create A record pointing to Netlify's load balancer
A_RECORD='[{
    "type": "A",
    "name": "@",
    "data": "75.2.60.5",
    "ttl": 600
}]'

# Create CNAME record for www
CNAME_RECORD='[{
    "type": "CNAME",
    "name": "www",
    "data": "'${NETLIFY_SUBDOMAIN}'.netlify.app",
    "ttl": 600
}]'

echo "1. Setting A record for root domain..."
godaddy_api PUT "/${DOMAIN}/records/A/@" "$A_RECORD"

echo "2. Setting CNAME record for www..."
godaddy_api PUT "/${DOMAIN}/records/CNAME/www" "$CNAME_RECORD"

echo ""
echo "DNS Configuration Complete!"
echo ""
echo "Next steps:"
echo "1. Go to Netlify: https://app.netlify.com/sites/${NETLIFY_SUBDOMAIN}/settings/domain"
echo "2. Click 'Add custom domain'"
echo "3. Enter: ${DOMAIN}"
echo "4. Netlify will automatically provision an SSL certificate"
echo ""
echo "DNS propagation may take up to 48 hours, but usually completes within 1-2 hours."
echo ""
echo "To verify DNS propagation:"
echo "  dig ${DOMAIN}"
echo "  dig www.${DOMAIN}"