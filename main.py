"""
Lightstar SPA Web Application - Hello World
A minimal single page application using the Lightstar framework.
"""

from lightstar import Lightstar, Response
from lightstar.static_files import StaticFiles
import uvicorn


# Create Lightstar application instance
app = Lightstar()

# Mount static files for serving frontend assets
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.route("/")
async def index():
    """Serve the main SPA page"""
    with open("static/index.html", "r") as f:
        content = f.read()
    return Response(content, media_type="text/html")


@app.route("/api/hello")
async def hello_world():
    """API endpoint that returns Hello World message"""
    return {"message": "Hello world"}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)