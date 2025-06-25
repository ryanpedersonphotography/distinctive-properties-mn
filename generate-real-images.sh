#!/bin/zsh

# Generate real images for Distinctive Properties MN using Replicate
source /Users/ryanpederson/Dev/websites/.env

# Budget tracking
BUDGET=5.00
COST_PER_IMAGE=0.035
TOTAL_COST=0
IMAGE_COUNT=0

echo "Generating real estate images with Replicate API..."
echo "Budget: \$$BUDGET"
echo "---"

# Function to generate image
generate_image() {
    local prompt=$1
    local output_file=$2
    
    echo "Generating: $output_file"
    
    # Check budget
    NEW_COST=$(echo "$TOTAL_COST + $COST_PER_IMAGE" | bc)
    if (( $(echo "$NEW_COST > $BUDGET" | bc -l) )); then
        echo "Budget limit reached! Skipping remaining images."
        return 1
    fi
    
    # Generate with Replicate SDXL
    replicate run stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b \
        prompt="$prompt, professional real estate photography, high quality, 8k, photorealistic" \
        negative_prompt="cartoon, illustration, low quality, blurry" \
        width=1024 \
        height=768 \
        num_outputs=1 \
        > /tmp/replicate_output.txt
    
    # Extract URL and download
    IMAGE_URL=$(grep -o 'https://[^"]*' /tmp/replicate_output.txt | head -1)
    
    if [ ! -z "$IMAGE_URL" ]; then
        wget -q "$IMAGE_URL" -O "$output_file"
        echo "✓ Generated $output_file"
        TOTAL_COST=$NEW_COST
        ((IMAGE_COUNT++))
        echo "Cost: \$$TOTAL_COST / \$$BUDGET"
        echo "---"
        return 0
    else
        echo "✗ Failed to generate $output_file"
        return 1
    fi
}

# Create directories
mkdir -p public/images/{hero,services,gallery}

# Generate hero images
generate_image "Luxury lakefront home Minnesota Brainerd Lakes golden hour aerial view modern architecture waterfront dock" "public/images/hero/hero-main.jpg"

generate_image "Professional real estate photographer with camera equipment at luxury lake house golden hour Minnesota" "public/images/hero/hero-services.jpg"

# Generate service images
generate_image "Aerial drone view Minnesota lake properties luxury homes shoreline Brainerd Lakes region" "public/images/services/aerial-drone.jpg"

generate_image "Modern luxury home interior professional photography setup high-end staging Minnesota style" "public/images/services/interior-photo.jpg"

generate_image "3D Matterport virtual tour technology setup in luxury home professional scanning equipment" "public/images/services/matterport-3d.jpg"

generate_image "Professional videographer filming luxury Minnesota lake house with cinema camera golden hour" "public/images/services/video-production.jpg"

# Generate gallery samples
generate_image "Stunning Minnesota lake house exterior professional real estate photography Brainerd Lakes luxury" "public/images/gallery/lake-house-1.jpg"

generate_image "Elegant modern home interior luxury living room lake views Minnesota high-end staging" "public/images/gallery/interior-1.jpg"

generate_image "Aerial view Minnesota waterfront property private beach dock boat lift Brainerd Lakes" "public/images/gallery/aerial-1.jpg"

generate_image "Twilight real estate photography luxury Minnesota home warm window glow professional" "public/images/gallery/twilight-1.jpg"

echo "---"
echo "Generation complete!"
echo "Total images generated: $IMAGE_COUNT"
echo "Total cost: \$$TOTAL_COST"
echo "Remaining budget: \$$(echo "$BUDGET - $TOTAL_COST" | bc)"

# Clean up
rm -f /tmp/replicate_output.txt