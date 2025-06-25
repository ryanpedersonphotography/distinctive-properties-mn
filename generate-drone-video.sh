#!/bin/zsh

# Source environment variables
source /Users/ryanpederson/Dev/websites/.env

# Check if REPLICATE_API_TOKEN is set
if [ -z "$REPLICATE_API_TOKEN" ]; then
    echo "Error: REPLICATE_API_TOKEN not found in environment"
    exit 1
fi

echo "Generating drone flyover video from hero image..."

# Create videos directory if it doesn't exist
mkdir -p public/videos

# Run Stable Video Diffusion using Replicate CLI
# Using motion_bucket_id of 127 for smooth drone-like movement
replicate run stability-ai/stable-video-diffusion:3f0457e4619daac51203dedb472816fd4af51f3149fa7a9e0b5ffcf1b8172438 \
  cond_aug=0.02 \
  decoding_t=7 \
  input_image=@public/images/real-photos/DJI_0984.jpg \
  video_length="25_frames_with_svd_xt" \
  sizing_strategy="maintain_aspect_ratio" \
  motion_bucket_id=127 \
  frames_per_second=6 \
  --wait \
  > video-url.txt

# Get the video URL
VIDEO_URL=$(cat video-url.txt | grep -o 'https://[^ ]*' | head -1)
echo "Video generated at: $VIDEO_URL"

# Check if URL is valid
if [ -z "$VIDEO_URL" ]; then
    echo "Error: Failed to get video URL"
    exit 1
fi

# Download the video
curl -L "$VIDEO_URL" -o public/videos/hero-drone-raw.mp4

# Convert to web-optimized format using ffmpeg
echo "Optimizing video for web..."
ffmpeg -i public/videos/hero-drone-raw.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 23 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -movflags +faststart \
  -an \
  public/videos/hero-drone.mp4

# Create a WebM version for better browser compatibility
ffmpeg -i public/videos/hero-drone-raw.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -an \
  public/videos/hero-drone.webm

echo "Video optimization complete!"
echo "Generated files:"
echo "  - public/videos/hero-drone.mp4"
echo "  - public/videos/hero-drone.webm"

# Clean up
rm video-url.txt
rm public/videos/hero-drone-raw.mp4