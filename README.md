# Interior AI HTMX Clone

This project is an interior design AI application using HTMX and ExpressJS. It is built as part of the article "Build an Interior AI Clone Using HTMX and ExpressJS". The application allows users to upload images of rooms and generate AI-enhanced interior designs based on specified themes and color schemes.

## Features

- Upload room images
- Specify room type, theme, and color scheme
- Generate AI-enhanced interior designs
- View generated designs directly in the browser

## Technologies Used

- [HTMX](https://htmx.org/)
- [ExpressJS](https://expressjs.com/)
- [Multer](Multer) for handling file uploads
- [Replicate](https://replicate.com/) API for AI image generation

## Getting Started

### Prerequisites

- Node.js installed on your machine
- An API key from Replicate

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/interior-ai-clone.git
    cd interior-ai-clone
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Add your Replicate API key to the project on `index.js`, line 9:
   ```javascript
    const replicate = new Replicate({
        auth: "your-api-key"
    });
   ```

### Running the Project

1. Start the server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

### Usage

1. Upload an image of a room.
2. Specify the room type, theme, and color scheme.
3. Click the "Generate" button to view the AI-enhanced interior designs.

## Contributing

Feel free to submit issues or pull requests if you have any improvements or bug fixes.

## License

This project is licensed under the ISC License.

## Acknowledgements

- [HTMX](https://htmx.org/)
- [Replicate](https://replicate.com/)

Enjoy building your own interior AI clone!
