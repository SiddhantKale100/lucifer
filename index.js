import express from "express";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/cca', (req, res) => {
    res.download(path.join(__dirname, 'files', 'ccaP.docx')); 
});

// Route 2: Serve file 2
app.get('/app', (req, res) => {
    res.download(path.join(__dirname, 'files', 'file2.pdf')); 
});

// Route 3: Serve file 3
app.get('/os', (req, res) => {
    res.download(path.join(__dirname, 'files', 'file3.png'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});