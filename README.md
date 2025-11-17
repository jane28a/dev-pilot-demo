# Lightstar SPA - Hello World

A minimal single page application (SPA) built with the Lightstar Python framework that displays "Hello world" to users.

## Features

- Single Page Application (SPA) architecture
- Lightstar Python web framework backend
- Simple REST API endpoint
- Responsive frontend with vanilla JavaScript
- Minimal dependencies

## Project Structure

```
/
├── main.py              # Main Lightstar application
├── requirements.txt     # Python dependencies
├── README.md           # This file
└── static/             # Frontend assets
    ├── index.html      # Main SPA page
    └── app.js          # Client-side JavaScript
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the application:**
   ```bash
   python main.py
   ```

3. **Access the application:**
   Open your browser and navigate to: `http://127.0.0.1:8000`

## API Endpoints

- `GET /` - Serves the main SPA page
- `GET /api/hello` - Returns JSON with "Hello world" message
- `GET /static/*` - Serves static frontend assets

## Development

The application runs on `127.0.0.1:8000` by default. The SPA will automatically fetch and display the "Hello world" message from the backend API.

## Dependencies

- **lightstar**: Python web framework
- **uvicorn**: ASGI server for running the application