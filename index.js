const express = require('express');
const multer = require('multer');
const Replicate = require('replicate');
const fs = require('fs').promises;

const app = express();
const upload = multer({ dest: 'uploads/' });

const replicate = new Replicate({
    auth: "your-api-key"
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/generate', upload.single('room-image'), async (req, res) => {
    try {
        const { 'room-type': roomType, 'room-theme': roomTheme, 'color-scheme': colorScheme } = req.body;
        const imagePath = req.file.path;
        const data = await fs.readFile(imagePath);
        const base64Image = `data:image/jpeg;base64,${data.toString('base64')}`;
        const prompt = `a ${colorScheme} ${roomTheme} ${roomType}`;
        const input = {
            image: base64Image,
            prompt: prompt,
            num_samples: "4"
        };
        const output = await replicate.run("jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b", { input });
        res.send(output.splice(1).map(img => `<img src="${img}" class="w-full h-56 object-cover rounded-md shadow-md mt-4">`).join(''));
        await fs.unlink(imagePath); // Clean up uploaded file
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating render.');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
