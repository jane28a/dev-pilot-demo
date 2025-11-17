/**
 * Lightstar SPA - Client-side JavaScript
 * Handles fetching and displaying the Hello World message
 */

class HelloWorldApp {
    constructor() {
        this.messageElement = document.getElementById('message');
        this.init();
    }

    async init() {
        try {
            await this.loadMessage();
        } catch (error) {
            this.showError('Failed to load message');
            console.error('Error loading message:', error);
        }
    }

    async loadMessage() {
        try {
            const response = await fetch('/api/hello');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            this.showMessage(data.message);
        } catch (error) {
            throw error;
        }
    }

    showMessage(message) {
        this.messageElement.textContent = message;
        this.messageElement.className = 'message';
    }

    showError(errorMessage) {
        this.messageElement.textContent = errorMessage;
        this.messageElement.className = 'message error';
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HelloWorldApp();
});