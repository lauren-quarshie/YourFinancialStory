/**
 * Financial Wrapped Embed Script
 * 
 * Usage:
 * <div id="financial-wrapped"></div>
 * <script src="financial-wrapped-embed.js"></script>
 * <script>
 *   FinancialWrapped.init({
 *     containerId: 'financial-wrapped',
 *     baseUrl: 'https://your-domain.com',
 *     theme: 'light',
 *     onInteraction: function(action, data) {
 *       console.log('Interaction:', action, data);
 *     }
 *   });
 * </script>
 */

(function(global) {
    'use strict';

    const FinancialWrapped = {
        init: function(options) {
            const config = {
                containerId: 'financial-wrapped',
                baseUrl: window.location.origin,
                theme: 'light',
                onInteraction: function() {},
                ...options
            };

            const container = document.getElementById(config.containerId);
            if (!container) {
                console.error('Financial Wrapped: Container element not found');
                return;
            }

            // Add loading state
            container.innerHTML = `
                <div style="
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    height: 400px; 
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                ">
                    <div style="
                        width: 40px; 
                        height: 40px; 
                        border: 3px solid #f3f3f3; 
                        border-top: 3px solid #030213; 
                        border-radius: 50%; 
                        animation: spin 1s linear infinite;
                    "></div>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;

            // Create iframe
            const iframe = document.createElement('iframe');
            iframe.style.cssText = `
                width: 100%;
                border: none;
                min-height: 600px;
                background: transparent;
                display: none;
            `;
            iframe.src = config.baseUrl + '/iframe.html?theme=' + config.theme;
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('frameborder', '0');

            // Handle messages from iframe
            const messageHandler = function(event) {
                if (event.source !== iframe.contentWindow) return;

                if (event.data.type === 'financial-wrapped-resize') {
                    iframe.style.height = event.data.height + 'px';
                } else if (event.data.type === 'financial-wrapped-ready') {
                    // Remove loading spinner and show iframe
                    container.innerHTML = '';
                    container.appendChild(iframe);
                    iframe.style.display = 'block';
                } else if (event.data.type === 'financial-wrapped-interaction') {
                    config.onInteraction(event.data.action, event.data.data);
                }
            };

            window.addEventListener('message', messageHandler);

            // Cleanup function
            return function cleanup() {
                window.removeEventListener('message', messageHandler);
                if (container.contains(iframe)) {
                    container.removeChild(iframe);
                }
            };
        }
    };

    // Export to global scope
    global.FinancialWrapped = FinancialWrapped;

    // Auto-init if data attributes are present
    document.addEventListener('DOMContentLoaded', function() {
        const autoInitElements = document.querySelectorAll('[data-financial-wrapped]');
        autoInitElements.forEach(function(element) {
            const config = {
                containerId: element.id,
                baseUrl: element.getAttribute('data-base-url') || window.location.origin,
                theme: element.getAttribute('data-theme') || 'light'
            };
            FinancialWrapped.init(config);
        });
    });

})(window);