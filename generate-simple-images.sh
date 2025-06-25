#!/bin/zsh

# Simple image generation using Replicate API directly
source /Users/ryanpederson/Dev/websites/.env

echo "Generating images with Replicate API..."

# Create directories
mkdir -p public/images/{hero,services,gallery}

# For now, let's create some placeholder images with ImageMagick
# Later we can replace with actual AI-generated images

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Creating placeholder images with ImageMagick..."
    
    # Hero images
    convert -size 1920x1080 xc:'#1a365d' -gravity center -fill white -pointsize 60 \
        -annotate +0+0 'Luxury Lakefront Properties' public/images/hero/hero-main.jpg
    
    convert -size 1200x800 xc:'#2d3748' -gravity center -fill white -pointsize 40 \
        -annotate +0+0 'Professional Photography' public/images/hero/hero-services.jpg
    
    # Service images
    convert -size 1200x800 xc:'#3182ce' -gravity center -fill white -pointsize 40 \
        -annotate +0+0 'Aerial Drone Services' public/images/services/aerial-drone.jpg
    
    convert -size 1200x800 xc:'#4a5568' -gravity center -fill white -pointsize 40 \
        -annotate +0+0 'Interior Photography' public/images/services/interior-photo.jpg
    
    convert -size 1200x800 xc:'#2b6cb0' -gravity center -fill white -pointsize 40 \
        -annotate +0+0 '3D Matterport Tours' public/images/services/matterport-3d.jpg
    
    convert -size 1200x800 xc:'#2c5282' -gravity center -fill white -pointsize 40 \
        -annotate +0+0 'Video Production' public/images/services/video-production.jpg
    
    # Gallery images
    convert -size 800x600 xc:'#2d3e50' -gravity center -fill white -pointsize 30 \
        -annotate +0+0 'Lake House Example' public/images/gallery/lake-house-1.jpg
    
    convert -size 800x600 xc:'#34495e' -gravity center -fill white -pointsize 30 \
        -annotate +0+0 'Interior Example' public/images/gallery/interior-1.jpg
    
    convert -size 800x600 xc:'#16a085' -gravity center -fill white -pointsize 30 \
        -annotate +0+0 'Aerial View Example' public/images/gallery/aerial-1.jpg
    
    convert -size 800x600 xc:'#8e44ad' -gravity center -fill white -pointsize 30 \
        -annotate +0+0 'Twilight Photography' public/images/gallery/twilight-1.jpg
    
    echo "✓ Created placeholder images"
else
    echo "ImageMagick not installed. Creating colored placeholder files..."
    
    # Create simple colored rectangles as placeholders
    for dir in hero services gallery; do
        for file in public/images/$dir/*.jpg; do
            [ -f "$file" ] || touch "public/images/$dir/placeholder.jpg"
        done
    done
fi

echo "Done! Images are ready for deployment."