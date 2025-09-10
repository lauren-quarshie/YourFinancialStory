# Financial Wrapped - Video Demo Creation Guide

## Quick Start Methods

### Method 1: Automated Demo + Screen Recording

1. **Use the Auto Demo Component**
   - Switch your App.tsx entry point to use `DemoApp.tsx`
   - Start your screen recording software
   - Click "Start Demo" to begin automated demonstration
   - The demo automatically cycles through all features

2. **Recommended Recording Tools:**
   - **Loom** (easiest): loom.com - Records directly to cloud
   - **OBS Studio** (free, professional): obsproject.com
   - **QuickTime Player** (Mac): Press Cmd+Shift+5
   - **Windows Game Bar** (PC): Press Win+G

### Method 2: Manual Recording Script

**Recording Setup:**
1. Open your app in full-screen browser
2. Start screen recording at 1080p or higher
3. Follow this script for best results:

**Recording Script (30-45 seconds total):**

```
0:00-0:03  - Show full app overview (pause briefly)
0:03-0:08  - Focus on iPhone mockup, show mobile swipe gestures
0:08-0:15  - Demonstrate desktop slide transitions
0:15-0:22  - Show actionable recommendations (hover/click effects)
0:22-0:25  - Highlight responsive design (resize window)
0:25-0:30  - Return to full view, end on summary slide
```

### Method 3: Programmatic Video Creation

If you want to generate the video programmatically:

```bash
# Install Puppeteer for automated browser control
npm install puppeteer

# Create recording script
node create-demo-video.js
```

## Recording Settings

### Optimal Settings:
- **Resolution:** 1920x1080 (Full HD)
- **Frame Rate:** 30 FPS minimum, 60 FPS preferred
- **Format:** MP4 (H.264 codec)
- **Audio:** Optional background music (keep subtle)

### Browser Setup:
- Use Chrome/Edge for best performance
- Disable extensions that might interfere
- Clear browser cache before recording
- Use incognito mode to avoid bookmarks/extensions

## Professional Tips

### Visual Quality:
1. **Smooth Movements:** Move cursor slowly and deliberately
2. **Consistent Timing:** Pause 2-3 seconds on each major feature
3. **Clean Background:** Close other applications/tabs
4. **High DPI:** Use retina/high-DPI display for crisp visuals

### Content Flow:
1. **Hook (0-3s):** Show the impressive full view
2. **Mobile Demo (3-10s):** Demonstrate touch interactions
3. **Desktop Features (10-20s):** Show slide transitions and interactions
4. **Value Prop (20-25s):** Highlight actionable insights
5. **Call to Action (25-30s):** End with contact/demo info

## Post-Production

### Editing Software Options:
- **Free:** DaVinci Resolve, OpenShot, iMovie
- **Paid:** Adobe Premiere Pro, Final Cut Pro
- **Online:** Canva Video Editor, Clipchamp

### Enhancement Ideas:
- Add subtle fade-in/fade-out
- Include text overlays highlighting key features
- Add smooth zoom transitions
- Background music (royalty-free)
- Voiceover explaining features

## Platform-Specific Formats

### Social Media:
- **LinkedIn:** 16:9 landscape, max 10 minutes
- **Twitter:** Square (1:1) or 16:9, max 2:20 minutes  
- **Instagram:** Square (1:1) or vertical (9:16)
- **TikTok:** Vertical (9:16), max 3 minutes

### Professional Use:
- **Client Presentations:** 1920x1080, MP4
- **Website Embed:** WebM for smaller file size
- **Email Marketing:** GIF for previews, link to full video

## Automated Recording Script

Here's a Node.js script for fully automated recording:

```javascript
// create-demo-video.js
const puppeteer = require('puppeteer');
const { exec } = require('child_process');

async function createDemoVideo() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-fullscreen', '--disable-web-security']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Navigate to your app
  await page.goto('http://localhost:3000');
  
  // Start screen recording (requires ffmpeg)
  const recording = exec('ffmpeg -f screen -r 30 -s 1920x1080 -i :0.0 demo-output.mp4');
  
  // Automated demo actions
  await page.waitForSelector('.app-mockup-grid');
  await page.waitForTimeout(3000);
  
  // Simulate mobile swipes
  const mobileSlider = await page.$('.mobile-slider');
  if (mobileSlider) {
    await mobileSlider.click();
    await page.waitForTimeout(1000);
    // Add swipe gestures here
  }
  
  // Continue with other demo actions...
  
  await browser.close();
  recording.kill();
}

createDemoVideo();
```

## File Sharing

### Cloud Storage:
- **Google Drive:** Easy sharing, good quality retention
- **Dropbox:** Professional sharing options
- **Vimeo:** Best for business presentations
- **YouTube:** Public demos and marketing

### Direct Download:
- Compress large files with HandBrake
- Use WeTransfer for files over 25MB
- Consider creating multiple formats (MP4, WebM, GIF)

## Troubleshooting

**Common Issues:**
- **Choppy playback:** Increase frame rate or reduce resolution
- **Large file size:** Use H.264 codec with medium compression
- **Audio sync issues:** Record video and audio separately
- **Browser lag:** Close other applications, use dedicated recording browser

**Performance Optimization:**
- Record in sections if experiencing lag
- Use hardware acceleration if available
- Close unnecessary browser tabs
- Disable browser animations during recording

---

Need help with any of these methods? The automated demo component should make it easy to create a professional-looking video demo of your Financial Wrapped feature!