# Supplementary Materials for Submission 354: 3DV 2026

## **📁 TLDR: Open index.html to view the supplementary materials**

**Paper Title:** Diffusion-Denoised Hyperspectral Gaussian Splatting for Hyperspectral 3D Reconstruction

## Overview

This supplementary materials package contains comprehensive experimental details, ablation studies, and extended results that support the findings presented in our main paper. The materials are organized in an interactive HTML format for easy navigation and review.

## What's Included

### 1. Main Visualizations
- **Qualitative Videos**: Two key demonstration videos showcasing our DD-HGS framework
  - `wavelength_sweep_anacampserous.mp4`: Wavelength sweep visualization
  - `diffusion_effect.mp4`: Diffusion model effects demonstration
- **Method Overview Figure**: Visual representation of our framework architecture

### 2. Detailed Scene Results
- **BaySpec Dataset Results**: Comprehensive quantitative comparisons across multiple scenes
- **Surface Optics Dataset Results**: Extended evaluation on surface optics data
- **Performance Metrics**: PSNR, SSIM, SAM, and RMSE scores for all methods

### 3. Ablation Studies
- **Positional Encoding Analysis**: Impact of different encoding frequencies (L=5, L=10)
- **Spectral Loss Weight Investigation**: Effects of varying spectral loss weights (w₃ = 0.1, 0.2, 0.3)
- **Diffusion Steps Analysis**: Performance comparison across different diffusion step counts (10, 500, 1000)

### 4. Implementation Details
- **Training Configuration**: Learning rates, optimizer settings, loss weights
- **Architecture Specifications**: U-Net diffusion model details, wavelength encoder parameters
- **Hardware Requirements**: GPU specifications and memory usage

### 5. Evaluation Metrics
- **Performance Benchmarks**: Runtime analysis, memory consumption, inference speed
- **Autoencoder Baselines**: Comparison with traditional reconstruction approaches
- **Method Comparisons**: Comprehensive evaluation against state-of-the-art NeRF and 3DGS methods

## How to Navigate the Supplementary Materials

### Step 1: Open the Materials
1. Open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge)
2. The page will load with all sections collapsed by default for clean navigation

### Step 2: Navigate Using the Table of Contents
- **Main Table of Contents**: Located at the top of the page, provides links to all major sections
- **Sub-Table of Contents**: Available within major sections for quick navigation to subsections
- **Anchor Links**: Click any TOC link to automatically scroll to the corresponding section

### Step 3: Explore Content Sections
- **Collapsible Sections**: Each major section can be expanded/collapsed by clicking the section header
- **Subsections**: Related content is grouped together (e.g., BaySpec and Surface Optics under Detailed Scene Results)
- **Interactive Elements**: Videos, tables, and figures are embedded for easy viewing

### Step 4: Review Key Results
1. **Start with Main Visualizations**: Watch the demonstration videos to understand the qualitative improvements
2. **Examine Detailed Results**: Review the comprehensive quantitative comparisons in tables
3. **Analyze Ablation Studies**: Understand the contribution of each component through systematic analysis
4. **Check Implementation Details**: Verify the technical specifications and training procedures

### Step 5: Access Supporting Materials
- **Videos**: Embedded directly in the page with fallback download links
- **Images**: High-resolution figures and comparison images
- **Tables**: Formatted results tables with proper metric annotations (↑ for higher is better, ↓ for lower is better)

## Technical Requirements

- **Browser**: Modern web browser with HTML5 support
- **Video Codecs**: H.264/AAC for video playback
- **JavaScript**: Enabled for interactive collapsible sections
- **MathJax**: For rendering mathematical equations

## File Structure

```
nerfies.github.io/
├── index.html              # Main supplementary materials page
├── static/
│   ├── style.css          # Styling and layout
│   ├── script.js          # Interactive functionality
│   ├── videos/            # Demonstration videos
│   └── images/            # Figures and comparison images
└── README.md              # This file
```

## Acknowledgments

We would like to thank the authors of Hyperspectral Neural Radiance Fields (Chen et al., 2024) for providing the BaySpec and Surface Optics dataset used in our experiments.

**Note**: All quantitative results, ablation studies, and implementation details presented in this supplementary package directly support the claims and contributions made in our main paper submission.