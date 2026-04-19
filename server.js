import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = join(process.cwd(), "site", "public");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = createServer((req, res) => {
  let urlPath = req.url.split("?")[0];
  let filePath = join(PUBLIC_DIR, urlPath === "/" ? "index.html" : urlPath);
  
  if (!extname(filePath)) {
    filePath = join(filePath, "index.html");
  }
  
  const ext = extname(filePath);
  const contentType = MIME_TYPES[ext] || "application/octet-stream";
  
  if (existsSync(filePath)) {
    const content = readFileSync(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});