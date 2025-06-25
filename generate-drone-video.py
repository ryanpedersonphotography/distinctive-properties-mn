#!/usr/bin/env python3
import os
import replicate
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/Users/ryanpederson/Dev/websites/.env')

# Initialize Replicate
api_token = os.getenv('REPLICATE_API_TOKEN')
if not api_token:
    raise ValueError("REPLICATE_API_TOKEN not found in environment")

# Run Stable Video Diffusion
print("Generating drone flyover video...")
output = replicate.run(
    "stability-ai/stable-video-diffusion:3f0457e4619daac51203dedb472816fd4af51f3149fa7a9e0b5ffcf1b8172438",
    input={
        "cond_aug": 0.02,
        "decoding_t": 7,
        "input_image": "https://replicate.delivery/pbxt/JvLi6AZsLxcLEBREFEMGOWBLMvsVXlLwHJaWyCPmJm0IrSKnA/out.png",
        "video_length": "25_frames_with_svd_xt",
        "sizing_strategy": "maintain_aspect_ratio",
        "motion_bucket_id": 127,
        "frames_per_second": 6
    }
)

print(f"Video URL: {output}")

# Download the video
if output:
    response = requests.get(output)
    with open('public/videos/hero-drone-video.mp4', 'wb') as f:
        f.write(response.content)
    print("Video saved to public/videos/hero-drone-video.mp4")