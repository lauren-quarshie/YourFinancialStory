# Figma Embedding Guide

This guide explains how to embed your Monthly Financial Review prototype into Figma using different methods.

## Method 1: Direct Figma Embed (Recommended)

### Step 1: Host Your Prototype
1. Build the Figma-optimized version:
   ```bash
   # Use FigmaApp.tsx as entry point
   npm run build
   ```

2. Host on a public URL (Vercel, Netlify, etc.)
   ```bash
   # Example with Vercel
   vercel --prod
   ```

### Step 2: Embed in Figma
1. In Figma, go to **Resources** > **Plugins** > **Embed**
2. Or use the **FigJam** embed widget
3. Paste your hosted URL
4. Set dimensions: **375×812** for mobile or **1200×800** for desktop

### Step 3: Configure Embed Settings
```
URL: https://your-domain.com/?figma=true
Width: 375px (mobile) or 1200px (desktop)  
Height: 812px (mobile) or 800px (desktop)
Allow same-origin: Yes
```

## Method 2: Figma Plugin Development

### Create a Custom Plugin
1. Use `FigmaPluginApp.tsx` as the UI
2. Create `manifest.json`:
   ```json
   {
     "name": "Monthly Financial Review",
     "id": "financial-review-prototype",
     "api": "1.0.0",
     "main": "code.js",
     "ui": "ui.html",
     "capabilities": [],
     "enableProposedApi": false,
     "editorType": ["figma"]
   }
   ```

3. Create `code.js`:
   ```javascript
   figma.showUI(__html__, { 
     width: 375, 
     height: 812,
     themeColors: true 
   });
   
   figma.ui.onmessage = msg => {
     if (msg.type === 'ui-ready') {
       console.log('Financial Review UI ready');
     }
   };
   ```

4. Create `ui.html`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Monthly Financial Review</title>
     <style>
       body { margin: 0; padding: 0; overflow: hidden; }
       #root { width: 100%; height: 100vh; }
     </style>
   </head>
   <body>
     <div id="root"></div>
     <script src="figma-plugin-bundle.js"></script>
   </body>
   </html>
   ```

## Method 3: Interactive Component in Figma

### Step 1: Create Interactive Frames
1. Create frames for each slide (375×812 for mobile)
2. Use Figma's **Smart Animate** between frames
3. Add **Overlay** interactions for action buttons

### Step 2: Component Structure
```
📁 Monthly Financial Review Components
├── 🎯 Welcome Slide
├── 💰 Total Spending Slide  
├── 📊 Top Categories Slide
├── 🏦 Savings Slide
├── 📱 Transactions Slide
├── 🛍️ Biggest Purchase Slide
├── 💡 Fun Facts Slide
└── 🎉 Summary Slide
```

### Step 3: Add Interactions
- **On Click** → Navigate to next frame
- **On Swipe** → Smart animate to next slide
- **Action Buttons** → Show overlay with feedback

## Method 4: Figma Embed Widget (FigJam)

### For FigJam Boards
1. Add **Embed** widget to your FigJam board
2. Paste your prototype URL
3. Resize to desired dimensions
4. Enable **Show in presentation mode**

### Embed Code for External Sites
```html
<iframe 
  src="https://your-prototype-url.com/figma" 
  width="375" 
  height="812"
  frameborder="0"
  allowfullscreen>
</iframe>
```

## Best Practices for Figma

### Sizing Guidelines
- **Mobile**: 375×812px (iPhone 13/14 size)
- **Desktop**: 1200×800px or 1440×900px
- **Tablet**: 768×1024px (iPad size)

### Performance Tips
- Use the optimized `FigmaApp.tsx` entry point
- Minimize external dependencies
- Enable Figma's **Fast refresh** if available
- Test embed loading times

### User Experience
- Add clear navigation hints
- Include device toggle for responsive testing
- Provide interaction feedback
- Add loading states for better UX

## Troubleshooting

### Common Issues
1. **Embed not loading**: Check CORS headers and HTTPS
2. **Slow performance**: Use the lightweight `FigmaPluginApp.tsx`
3. **Interaction issues**: Test in Figma's preview mode
4. **Sizing problems**: Use fixed dimensions and test scaling

### Debug Mode
Add `?debug=true` to your URL to enable:
- Console logging
- Performance metrics  
- Interaction tracking
- Error boundaries

## Example URLs

```
Production: https://your-app.com/figma
Development: http://localhost:3000/figma
Plugin Version: https://your-app.com/plugin
```

## Next Steps

1. Choose your preferred embedding method
2. Deploy your prototype to a public URL
3. Test the embed in Figma thoroughly
4. Share with your team for feedback
5. Consider creating interactive Figma components for design handoff

---

💡 **Pro Tip**: Use Figma's **Dev Mode** to inspect the embedded prototype and extract exact CSS values for implementation.