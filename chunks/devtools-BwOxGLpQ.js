import { b as browserAPI, A as alpineDetectionFlag } from "./constants-Danu3nx7.js";

let devtoolsPanelCreated = false;
let retryCount = 0;

// Listen for navigation events
browserAPI.devtools.network.onNavigated.addListener(checkForAlpine);

// Set up periodic checking
const checkInterval = setInterval(checkForAlpine, 1000);

// Initial check
checkForAlpine();

function checkForAlpine() {
    // Stop checking if panel is created or we've tried too many times
    if (devtoolsPanelCreated || retryCount++ > 10) {
        clearInterval(checkInterval);
        return;
    }
    
    // Check if Alpine.js Pro DevTools detection flag exists
    browserAPI.devtools.inspectedWindow.eval(`!!(window.${alpineDetectionFlag})`, function(alpineDetected) {
        if (!alpineDetected || devtoolsPanelCreated) return;
        
        // Alpine detected, create the devtools panel
        clearInterval(checkInterval);
        devtoolsPanelCreated = true;
        
        browserAPI.devtools.panels.create(
            "Alpine.js Pro",
            "/icons/128.png",
            "/devtools-panel.html",
            function() {
                // Panel created callback
            }
        );
    });
}
