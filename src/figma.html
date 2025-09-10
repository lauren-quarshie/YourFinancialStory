<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Monthly Financial Review - Figma Embed</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      background: #f8f9fa;
    }
    
    #root {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .figma-embed {
      width: 375px;
      height: 812px;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      background: #000;
    }
    
    @media (max-width: 400px) {
      .figma-embed {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
      }
    }
    
    /* Loading state */
    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-size: 18px;
    }
    
    .spinner {
      width: 24px;
      height: 24px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-right: 12px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div id="root">
    <div class="figma-embed">
      <div class="loading">
        <div class="spinner"></div>
        Loading Monthly Financial Review...
      </div>
    </div>
  </div>

  <script type="module">
    // Dynamically import and render the Figma app
    import('./FigmaPluginApp.js').then(module => {
      const FigmaPluginApp = module.default;
      
      // Remove loading state
      const loadingElement = document.querySelector('.loading');
      if (loadingElement) {
        loadingElement.remove();
      }
      
      // Render the app
      const container = document.querySelector('.figma-embed');
      if (container && FigmaPluginApp) {
        container.innerHTML = '';
        // This would need to be adapted based on your build system
        // For now, it's a placeholder for the actual React rendering
      }
    }).catch(error => {
      console.error('Failed to load Financial Review:', error);
      document.querySelector('.loading').innerHTML = '❌ Failed to load prototype';
    });
    
    // Notify parent frame that we're ready (for Figma plugin)
    if (window.parent !== window) {
      window.parent.postMessage({
        pluginMessage: {
          type: 'embed-ready',
          size: { width: 375, height: 812 }
        }
      }, '*');
    }
  </script>
</body>
</html>