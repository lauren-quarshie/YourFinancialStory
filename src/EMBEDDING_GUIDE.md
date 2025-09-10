# Financial Wrapped - Website Embedding Guide

This guide explains how to embed your Monthly Financial Review feature into websites using different methods.

## Method 1: Direct React Component Integration

Perfect for React applications. Import the component directly:

```tsx
import FinancialWrappedEmbed from './FinancialWrappedEmbed';

function MyApp() {
  return (
    <div>
      <h1>My Banking App</h1>
      <FinancialWrappedEmbed 
        theme="light"
        onInteraction={(action, data) => {
          console.log('User interaction:', action, data);
          // Track analytics, trigger actions, etc.
        }}
      />
    </div>
  );
}
```

## Method 2: Iframe Embedding

Host the iframe version and embed it anywhere:

### Step 1: Host the iframe version
Use `IframeApp.tsx` as your entry point and build it to be served at `/iframe.html`

### Step 2: Embed using iframe
```html
<iframe 
  src="https://your-domain.com/iframe.html?theme=light" 
  width="100%" 
  height="600" 
  frameborder="0"
  scrolling="no">
</iframe>
```

### Step 3: Handle iframe messages (optional)
```javascript
window.addEventListener('message', function(event) {
  if (event.data.type === 'financial-wrapped-resize') {
    // Auto-resize iframe
    document.querySelector('iframe').style.height = event.data.height + 'px';
  } else if (event.data.type === 'financial-wrapped-interaction') {
    // Handle user interactions
    console.log('User clicked:', event.data.action, event.data.data);
  }
});
```

## Method 3: JavaScript Embed Script

Easiest for non-React websites:

### Option A: Manual initialization
```html
<div id="financial-wrapped"></div>
<script src="https://your-domain.com/financial-wrapped-embed.js"></script>
<script>
  FinancialWrapped.init({
    containerId: 'financial-wrapped',
    baseUrl: 'https://your-domain.com',
    theme: 'light',
    onInteraction: function(action, data) {
      // Handle user interactions
      console.log('User interaction:', action, data);
    }
  });
</script>
```

### Option B: Auto-initialization with data attributes
```html
<div 
  id="my-financial-wrapped" 
  data-financial-wrapped
  data-base-url="https://your-domain.com"
  data-theme="light">
</div>
<script src="https://your-domain.com/financial-wrapped-embed.js"></script>
```

## Method 4: Complete HTML Page

Use `embed.html` for a complete standalone page that can be:
- Hosted directly
- Used as an iframe source
- Customized for specific branding

## Deployment Options

### Option 1: Static Hosting
Deploy your built React app to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Option 2: CDN Distribution
For the JavaScript embed script:
```html
<script src="https://cdn.jsdelivr.net/gh/yourusername/financial-wrapped@main/financial-wrapped-embed.js"></script>
```

### Option 3: NPM Package
Publish as an NPM package for React apps:
```bash
npm install @your-company/financial-wrapped-embed
```

## Customization Options

### Themes
- `light` (default)
- `dark`

### Interaction Tracking
All user interactions are captured and can be forwarded to:
- Google Analytics
- Custom analytics platforms
- Parent application event handlers

### Responsive Design
The embed automatically adapts to container width and includes:
- Mobile-optimized touch gestures
- Responsive layouts
- Auto-height adjustment

## Security Considerations

1. **CORS Configuration**: Ensure your domain allows iframe embedding
2. **Content Security Policy**: Add appropriate CSP headers
3. **Data Privacy**: The embed doesn't collect personal data by default
4. **HTTPS**: Always serve over HTTPS for security

## Examples

### WordPress
```php
// In your theme's functions.php or plugin
function add_financial_wrapped_shortcode() {
    return '<div id="financial-wrapped" data-financial-wrapped data-theme="light"></div>
            <script src="https://your-domain.com/financial-wrapped-embed.js"></script>';
}
add_shortcode('financial_wrapped', 'add_financial_wrapped_shortcode');
```

### Shopify
```liquid
<div id="financial-wrapped" data-financial-wrapped data-theme="light"></div>
<script src="https://your-domain.com/financial-wrapped-embed.js"></script>
```

### Plain HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Financial Dashboard</title>
</head>
<body>
    <h1>Your Financial Year in Review</h1>
    <div id="financial-wrapped"></div>
    
    <script src="https://your-domain.com/financial-wrapped-embed.js"></script>
    <script>
        FinancialWrapped.init({
            containerId: 'financial-wrapped',
            baseUrl: 'https://your-domain.com',
            theme: 'light'
        });
    </script>
</body>
</html>
```