import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Server directory:', __dirname);
console.log('Setting up server...');

const server = http.createServer(async (req, res) => {
    console.log('Request URL:', req.url);
    if (req.url === '/' || req.url === '/index.html') {
        try {
            const filePath = path.join(__dirname, 'index.html');
            console.log('Attempting to read file:............', filePath);
            const data = await fs.readFile(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (err) {
            console.error('Error reading index.html:..........', err.message);
            res.writeHead(500);
            res.end('Error loading page');
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

console.log('Starting server...');

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});